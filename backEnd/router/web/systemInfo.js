/**
 * 系统信息
 * 
 * 例如：
 * CPU名称、核心数、线程数、
 * 内存大小、硬盘大小、IP地址
 */

const os = require("node:os");
const express = require("express");
const systeminfomation = require("systeminformation");
const router = express.Router();
const tools = require("../../tools.js");

const db_account = tools.db_getList("accounts");
const runtimeData = {
  cpuTimeSave: {
    user: 0,
    nice: 0,
    sys: 0,
    idle: 0,
    irq: 0
  },
  timeLabels: [],
  cpuUsageHistory: [],
  ramUsageHistory: [],
}

// 权限检查
router.use((req, res, next) => {
  if (!req.cookies || !req.cookies['session'] || req.cookies['session'] == "") {
    // 没有检测到身份cookie
    res.status(500);
    res.send({ error: true, msg: "服务器内部出错。" });
    return;
  }
  const targetAccount = db_account.find(account => account.session == req.cookies['session']);
  if (!targetAccount || targetAccount.userPermission != "admin") {
    // 提交的session 无效
    res.status(500);
    res.send({ error: true, msg: "服务器内部出错。" });
    return;
  } else {
    next();
  }
})

// 获取系统所有系统信息
// 聚合接口
router.get("/allInfo", async (req, res, next) => {
  try {
    const cpuInfo = get_cpuInfo();
    const ramInfo = get_ramInfo();
    const diskInfo = await get_diskInfo();
    const ipInfo = get_ipInfo();

    res.status(200);
    res.send({ error: false, msg: "获取成功", cpuInfo, ramInfo, diskInfo, ipInfo });

    // 更新到占用历史
    updateUsageHistory("all", cpuInfo, ramInfo);

  } catch (errObj) {
    res.status(500);
    res.send({ error: true, msg: "服务器内部错误" + JSON.stringify(errObj) });
  }
})

// 获取CPU信息
router.get("/cpuInfo", (req, res, next) => {
  const cpuInfo = get_cpuInfo();
  res.status(200);
  res.send({
    error: false,
    msg: "获取成功",
    ...cpuInfo
  });
  // 更新到占用历史
  updateUsageHistory("cpu", cpuInfo, null);
})

// 获取内存信息
router.get("/ramInfo", (req, res, next) => {
  const ramInfo = get_ramInfo();
  res.status(200);
  res.send({
    error: false,
    msg: "获取成功",
    ...ramInfo
  });
  // 更新到占用历史
  updateUsageHistory("ram", null, ramInfo);
})

// 获取硬盘信息
router.get("/diskInfo", async (req, res, next) => {
  const getInfo = await get_diskInfo();
  if (getInfo.error) {
    res.status(500);
    res.send({ error: true, msg: "内部请求出现错误" });
    return;
  } else {
    res.status(200);
    res.send({ error: false, msg: "获取成功", diskInfo: getInfo });
  }
})

// 获取面板IP地址
router.get("/ipInfo", (req, res, next) => {
  res.status(200);
  res.send({ error: false, msg: "获取成功", ipAddress: get_ipInfo() });
})

// 获取服务端历史占用数据
router.get("/cpuAramHistory", (req, res, next) => {
  res.status(200);
  res.send({
    error: false,
    msg: "获取成功",
    timeLabels: runtimeData.timeLabels,
    cpuInfo: runtimeData.cpuUsageHistory,
    ramInfo: runtimeData.ramUsageHistory,
  });
})


// CPU相关信息包括 核心数、速度、名称、总量、占用量
const get_cpuInfo = () => {
  const result = {};
  const cpuList = os.cpus();
  result.count = cpuList.length;
  result.speed = parseInt(cpuList.reduce((pValue, cValue) => pValue + cValue.speed, 0) / result.count);
  result.name = cpuList[0].model;
  let user = 0;
  let nice = 0;
  let sys = 0;
  let idle = 0;
  let irq = 0;

  for (let i = 0; i < cpuList.length; i++) {
    user += cpuList[i].times.user;
    nice += cpuList[i].times.nice;
    sys += cpuList[i].times.sys;
    idle += cpuList[i].times.idle;
    irq += cpuList[i].times.irq;
  }

  user = user - runtimeData.cpuTimeSave.user;
  nice = nice - runtimeData.cpuTimeSave.nice;
  sys = sys - runtimeData.cpuTimeSave.sys;
  idle = idle - runtimeData.cpuTimeSave.idle;
  irq = irq - runtimeData.cpuTimeSave.irq;

  const total = user + nice + sys + idle + irq;
  result.total = total;
  result.usage = Number(((total - idle) / total).toFixed(4));

  runtimeData.cpuTimeSave.user += user;
  runtimeData.cpuTimeSave.nice += nice;
  runtimeData.cpuTimeSave.sys += sys;
  runtimeData.cpuTimeSave.idle += idle;
  runtimeData.cpuTimeSave.irq += irq;

  return result;
}

// 运行内存相关信息 包括大小、占用
const get_ramInfo = () => {
  const result = {};
  result.total = os.totalmem();
  result.free = os.freemem();
  result.used = result.total - result.free;
  result.freePercentage = Number((result.free / result.total).toFixed(4));
  result.usedPercentage = Number((result.used / result.total).toFixed(4));

  return result;
}

// 硬盘存储空间相关信息 包括大小、占用
const get_diskInfo = async () => {
  try {
    const data = await systeminfomation.fsSize();
    const result = {};
    for (let i = 0; i < data.length; i++) {
      const disk = data[i];
      const total = Number((disk.size / 1024 / 1024 / 1024).toFixed(2));
      const used = Number((disk.used / 1024 / 1024 / 1024).toFixed(2));
      const free = Number(((total - used)).toFixed(2));
      const usedPercentage = Number(((used / total)).toFixed(2));
      result[disk.fs] = { total, used, free, usedPercentage };
    }
    return result;
  } catch (err) {
    return { error: true, obj: err };
  }
}

// 获取IP地址信息
const get_ipInfo = () => {
  const interfaces = os.networkInterfaces();
  const result = [];

  for (const key in interfaces) {
    if (!Object.hasOwnProperty.call(interfaces, key)) continue;
    for (let i = 0; i < interfaces[key].length; i++) {
      if (interfaces[key][i].address == "127.0.0.1") continue;
      if (interfaces[key][i].address == "::1") continue;
      if (interfaces[key][i].address.startsWith("192.168")) continue;
      result.push(interfaces[key][i].address);
    }
  }

  return result;
}

// 更新历史占用信息
const updateUsageHistory = (tag, cpuInfo, ramInfo) => {
  // 生成时间文本
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  // 检测已有数据长度
  if (runtimeData.timeLabels.length == 10) {
    runtimeData.timeLabels.shift();
    runtimeData.cpuUsageHistory.shift();
    runtimeData.ramUsageHistory.shift();
  }

  // 提交新数据
  runtimeData.timeLabels.push(timeString);
  runtimeData.cpuUsageHistory.push(tag == "ram" ? 0 : Number((cpuInfo.usage / cpuInfo.total).toFixed(2)));
  runtimeData.ramUsageHistory.push(tag == "cpu" ? 0 : ramInfo.usedPercentage);
}

module.exports.router = router;