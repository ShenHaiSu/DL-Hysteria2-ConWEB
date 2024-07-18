const express = require("express");
const router = express.Router();
const tools = require("../tools.js");

// 初始化
const db_server = tools.db_getObj("servers");
const db_account = tools.db_getObj("accounts");
if (db_server.length == 0) db_server.push({}, {});


// 认证服务器类
const { RegisteredServer } = require("../class/RegisteredServer.js");

// 未认证服务器类
const { unRegisteredServer } = require("../class/unRegisteredServer.js");

// 中间件 - 检查发来申请的ip是否在服务器列表中
router.use((req, res, next) => {
  let methodError = false;
  let bodyError = false;

  if (req.method != "POST") methodError = true;
  if (!(req.body['addr'] && req.body['auth'] && req.body['tx'])) bodyError = true;

  if (db_server[0][req.ip]) {
    next();
  } else {
    if (!db_server[1][req.ip]) db_server[1][req.ip] = new unRegisteredServer();
    if (!db_server[1][req.ip].firstConnect) db_server[1][req.ip].firstConnect = new Date().getTime();

    db_server[1][req.ip].lastConnect = new Date().getTime();
    db_server[1][req.ip].connectCount += 1;
    db_server[1][req.ip].error.method += methodError ? 1 : 0;
    db_server[1][req.ip].error.body += bodyError ? 1 : 0;
    res.status(404);
    res.send({});
    return;
  }
})

// 面向外部hy2的认证接口
router.post("/auth", (req, res, next) => {
  // 检查获取对应账户
  const targetAccountIndex = db_account.findIndex(account => account.userInfo.linkKey && account.userInfo.linkKey == req.body['auth']);
  if (targetAccountIndex == -1) {
    res.status(404);
    res.send();
    return;
  }

  const targetAccount = db_account[targetAccountIndex];
  // 检查认证
  const serverAccess = targetAccount.accessServer.some(alias => db_server[0][req.ip].alias == alias);
  const serverBlock = !targetAccount.blockServer.some(alias => db_server[0][req.ip].alias == alias);
  const serverOnlineCount = (db_server[0][req.ip].nowOnline + 1) <= db_server[0][req.ip].maxOnline;
  const onlineCount = (targetAccount.nowOnline + 1) <= targetAccount.maxOnline;
  const txSpeedAccess = req.body['tx'] <= targetAccount.txSpeed;
  const serverBandwidthAccess = db_server[0][req.ip].bandwidth.total > db_server[0][req.ip].bandwidth.used;

  // 任意一个认证不通过就直接拒绝
  if (!(serverAccess && serverBlock && serverOnlineCount && onlineCount && txSpeedAccess && serverBandwidthAccess)) {
    res.status(404);
    res.send({});
    return;
  }

  // 变更记录数据
  db_server[0][req.ip].nowOnline += 1;
  targetAccount.nowOnline += 1;

  // 返回认证数据
  res.status(200);
  res.send({ ok: true, id: targetAccount.userName });
})

module.exports.router = router;