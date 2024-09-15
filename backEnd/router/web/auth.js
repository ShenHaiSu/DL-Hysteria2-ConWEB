const express = require("express");
const router = express.Router();
const tools = require("../../tools.js");

// 获取accounts数据对象
const db_account = tools.db_getList("accounts");
const adminKey = tools.runtimeDate.adminKey;

// 定义 account 类
const { Account } = require("../../class/Account.js");

const rejectResponse = (req, res, next) => {
  res.status(500);
  res.send({ error: true, msg: "no access" });
}


// 注册接口
router.post("/register", (req, res, next) => {
  const isAdmin = req.body.adminKey == adminKey;

  if (db_account.some(account => account['userName'] == req.body['userName'])) {
    res.status(500);
    res.send({
      error: true,
      msg: "该账号已被注册。"
    });
    return;
  } else {
    const newData = new Account(req.body['userName'], req.body['userPassword'], isAdmin);
    newData.session = tools.genRandomString(30);
    db_account.push(newData);

    res.status(200);
    if (!req.body['manual']) res.cookie("session", newData.session, { httpOnly: true });
    res.send({
      error: false,
      msg: "欢迎你，" + newData.userName,
      userInfo: {},
      userName: newData.userName,
      userPermission: newData.userPermission
    });
  }
})

// 登出接口
router.post("/logout", (req, res, next) => {
  const session = req.cookies['session'];
  if (session) res.cookie("session", "", { httpOnly: true });

  const targetIndex = db_account.findIndex(account => account.session == session);

  if (targetIndex == -1) {
    res.status(200);
    res.send({
      error: false,
      msg: "已登出"
    });
    return;
  } else {
    res.status(200);
    res.send({
      error: false,
      msg: `${db_account[targetIndex].userName} 已完成登出，下次见。`
    })
    return;
  }
})

// 登录接口
router.post("/login", (req, res, next) => {
  const targetIndex = db_account.findIndex(account => account.userName == req.body['userName'] && account.userPassword == req.body['userPassword']);

  if (targetIndex == -1) {
    res.status(500);
    res.cookie("session", "", { httpOnly: true });
    res.send({
      error: true,
      msg: "账号或密码错误，请重试"
    });
    return;
  } else {
    let account = db_account[targetIndex];
    account.session = tools.genRandomString(30);
    res.status(200);
    res.cookie("session", account.session, { httpOnly: true });
    res.send({
      error: false,
      msg: `欢迎回来，${account.userName}`,
      userName: account.userName,
      userPermission: account.userPermission,
      userInfo: account.userInfo
    });
    return;
  }
})

// 查询登录状态接口
router.post("/checkLogin", (req, res, next) => {
  const reqSession = req.cookies['session'];
  const targetIndex = db_account.findIndex(account => account.session == reqSession);

  if (targetIndex == -1) {
    res.cookie("session", "", { httpOnly: true });
    res.status(500);
    res.send({
      error: true,
      msg: "你提交的session无效。"
    });
    return;
  } else {
    const account = db_account[targetIndex];
    account.session = tools.genRandomString(30);
    res.cookie("session", account.session, { httpOnly: true });
    res.status(200);
    res.send({
      userName: account.userName,
      userPermission: account.userPermission,
      userInfo: account.userInfo,
    });
    return;
  }
})

// 获取所有账号信息接口
router.get("/allAccount", (req, res, next) => {
  // 检查登录状态
  if (!req.cookies['session'] || req.cookies['session'] == "") {
    res.status(500);
    res.send({ error: true, msg: "无权" });
    return;
  }
  // 检查权限
  const targetAccountIndex = db_account.findIndex(account => account.session == req.cookies['session']);
  if (targetAccountIndex == -1 || db_account[targetAccountIndex].userPermission != "admin") {
    res.status(500);
    res.send({ error: true, msg: "无权" });
    return;
  }

  // 过滤结果
  const sendObj = [];
  db_account.forEach(account => sendObj.push(JSON.parse(JSON.stringify(account))));
  sendObj.forEach(account => delete account.userPassword);

  // 发送请求体
  res.status(200);
  res.send(sendObj);
})

// 删除指定账号
router.post("/delete", (req, res, next) => {
  // 检查登录状态
  if (!req.cookies['session'] || req.cookies['session'] == "") {
    res.status(500);
    res.send({ error: true, msg: "无权" });
    return;
  }
  // 检查权限
  const requestAccount = db_account.findIndex(account => account.session == req.cookies['session']);
  if (requestAccount == -1 || db_account[requestAccount].userPermission != "admin") {
    res.status(500);
    res.send({ error: true, msg: "无权" });
    return;
  }
  // 检查body
  if (!req.body['userName'] || req.body['userName'] == "") {
    res.status(500);
    res.send({ error: true, msg: "参数不齐" });
    return;
  }
  // 删除操作
  const targetAccountIndex = db_account.findIndex(account => account.userName == req.body['userName']);
  if (targetAccountIndex == -1) {
    res.status(500);
    res.send({ error: true, msg: "目标不存在" });
    return;
  }
  /**
   * 
   * todo: 下发通知给所有服务器kick掉这个用户
   * 
   */
  db_account.splice(targetAccountIndex, 1);
  res.status(200);
  res.send({ error: false, msg: "完成删除，删除1项。" });
})

// 编辑账号信息
router.post("/edit", (req, res, next) => {
  // 检查body格式
  const checkList = ['target', 'hy2Key', 'txSpeed', 'maxOnline', 'maxBandwidth', 'usedBandwidth', 'accessServer', 'blockServer'];
  if (!req.body || !checkList.some(key => req.body[key])) return rejectResponse(req, res, next);

  // 检查目标是否存在
  const targetIndex = db_account.findIndex(account => account.userName == req.body['target']);
  if (targetIndex == -1) return rejectResponse(req, res, next);

  // 提交更新
  const targetAccount = db_account[targetIndex];
  targetAccount.userInfo.hy2Key = req.body['hy2Key'];
  targetAccount.userInfo.txSpeed = req.body['txSpeed'];
  targetAccount.userInfo.maxOnline = req.body['maxOnline'];
  targetAccount.userInfo.bandwidth.total = req.body['maxBandwidth'];
  targetAccount.userInfo.bandwidth.used = req.body['usedBandwidth'];
  targetAccount.userInfo.accessServer = req.body['accessServer'];
  targetAccount.userInfo.blockServer = req.body['blockServer'];

  // 返回成功
  res.status(200);
  res.send({ error: false, msg: "完成修改", targetAccount });
})


module.exports.router = router;