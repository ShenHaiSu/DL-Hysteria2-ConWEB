const tools = require('../tools');
const db_account = tools.db_getObj("accounts");
const db_server = tools.db_getObj("servers");

// 运行时记录
const runtimeDate = {
  loopTimer: undefined, // 循环定时器
};

// 向外暴露启动函数
module.exports.startLoopTasks = async function () {
  runtimeDate.loopTimer = setInterval(async () => {
    // 获取hy2服务器更新信息
    await getHy2ServerInfo();
    // 检查服务器是否超出运行限制
    await checkServerLimit();
    // 检查用户账户是否超出运行限制
    await checkUserLimit();
  }, 1000 * 60 * 10); // 每10分钟执行一次
}

// 工具函数 - 计算traffic返回json的耗量总和
function getSingleTraffic(traffic) {
  let total = 0;
  for (const key in traffic) {
    if (!Object.hasOwnProperty.call(traffic, key)) continue;
    total += traffic[key].total;
  }
  return total;
}

// 获取hy2服务器信息
async function getHy2ServerInfo() {
  // 获取已注册服务器列表
  const serverList = db_server[0];
  const nowOnline = {};
  // 遍历列表发送请求更新数据
  for (const address in serverList) {
    if (!Object.hasOwnProperty.call(serverList, address)) continue;
    const server = serverList[address];
    const trafficUrl = `http://${server.domain.length > 0 ? server.domain : address}:${server.infoPort}/traffic?clear=1`;
    const onlineUrl = `http://${server.domain.length > 0 ? server.domain : address}:${server.infoPort}/online`;

    try {
      const [trafficResp, onlineResp] = await Promise.all([
        fetch(trafficUrl, { timeout: 2000, headers: { Authorization: server.infoAuthKey } }),
        fetch(onlineUrl, { timeout: 2000, headers: { Authorization: server.infoAuthKey } })
      ]);

      const trafficData = await trafficResp.json();
      const onlineData = await onlineResp.json();

      // 更新服务器数据
      server.lastConnect = new Date().getTime();
      server.bandwidth.used = Object.values(trafficData).reduce((acc, cur) => acc + (getSingleTraffic(cur) / 1024 / 1024 / 1024), 0);
      server.onlineList = onlineData;

      // 更新用户数据
      Object.keys(trafficData).forEach(name => {
        const used = getSingleTraffic(data[name]) / 1024 / 1024 / 1024;
        const user = db_account.find(user => user.userName === name);
        if (!user) return;
        user.userInfo.bandwidth.used += used;
      })
      Object.keys(onlineData).forEach(name => {
        if (!nowOnline[name]) nowOnline[name] = 0;
        nowOnline[name] += onlineData[name];
      })

    } catch {
      server.error.timeout++;
    }
  }

  // 更新用户当前在线数据
  Object.keys(nowOnline).forEach(name => {
    const user = db_account.find(user => user.userName === name);
    if (!user) return;
    user.userInfo.nowOnline = nowOnline[name];
  })
}

// 检查服务器是否超出运行限制
async function checkServerLimit() {
  // 获取已注册服务器列表
  const serverList = db_server[0];
  // 遍历列表检查运行状态
  for (const address in serverList) {
    if (!Object.hasOwnProperty.call(serverList, address)) continue;
    const server = serverList[address];
    // 检查流量限制
    if (server.bandwidth.used <= server.bandwidth.total) continue;
    // 超出流量限制，获取所有非管理员账号
    const userList = db_account.filter(user => user.userPermission !== "admin").map(user => user.userName);
    fetch(`http://${server.domain.length > 0 ? server.domain : address}:${server.infoPort}/kick`, {
      method: "POST",
      body: userList,
      timeout: 2000,
      headers: { Authorization: server.infoAuthKey }
    })
      .then(() => {
        console.log(`服务器${address}超出流量限制，已踢出${userList.length}个用户`);
      })
      .catch(() => {
        console.log(`服务器${address}超出流量限制，踢人失败`);
      });
  }
}

// 检查用户账户是否超出运行限制
async function checkUserLimit() {
  // 获取所有用户列表
  const userList = db_account;
  // 遍历列表检查运行状态
  for (let i = 0; i < userList.length; i++) {
    const user = userList[i];
    if (user.userPermission === "admin") continue; // 管理员不检查
    // 检查流量限制
    if (user.userInfo.bandwidth.used <= user.userInfo.bandwidth.total) continue;
    // 检查在线设备数
    if (user.userInfo.nowOnline <= user.userInfo.maxOnline) continue;
    // 超出限制，踢出账号
    user.userInfo.nowOnline = 0;
    // 向所有服务器发送kick指令
    Promise.all(Object.keys(db_server[0]).map(address => {
      const server = db_server[0][address];
      return fetch(`http://${server.domain.length > 0 ? server.domain : address}:${server.infoPort}/kick`, {
        method: "POST",
        body: [user.userName],
        timeout: 2000,
        headers: { Authorization: server.infoAuthKey }
      })
    }))
  }
}