const express = require("express");
const router = express.Router();
const tools = require("../tools.js");

// 初始化
const db_server = tools.db_getObj("servers");
const db_account = tools.db_getObj("accounts");
if (db_server.length == 0) db_server.push({}, {});

// 中间件 - 检查发来申请的ip是否在服务器列表中
router.use((req, res, next) => {
  let methodError = false;
  let bodyError = false;

  // IP是否是已认证的服务器
  if (db_server[0][req.ip]) {
    // 诊断body和method是否合法
    if (req.method != "POST") methodError = true;
    if (!(req.body['addr'] && req.body['auth'] && req.body['tx'])) bodyError = true;

    // 更新数据
    db_server[0][req.ip] = {
      connectTimes: (db_server[0][req.ip].connectTimes || 0) + 1,
      methodErrorTimes: (db_server[0][req.ip].methodErrorTimes || 0) + (methodError ? 1 : 0),
      bodyErrorTimes: (db_server[0][req.ip].bodyErrorTimes || 0) + (bodyError ? 1 : 0),
    }

    // 处理结果
    if (methodError || bodyError) {
      res.status(404);
      res.send();
      return;
    } else {
      return next();
    }
  }

  // IP是否被加入到待认证服务器中
  if (!db_server[1](req.ip)) db_server[1][req.ip] = { firstConnectTimeStamp: new Date().getTime() };
  if (req.method != "POST") methodError = true;
  if (!(req.body['addr'] && req.body['auth'] && req.body['tx'])) bodyError = true;

  // 更新数据
  db_server[1][req.ip] = {
    connectTimes: (db_server[1][req.ip].connectTimes || 0) + 1,
    methodErrorTimes: (db_server[1][req.ip].methodErrorTimes || 0) + (methodError ? 1 : 0),
    bodyErrorTimes: (db_server[1][req.ip].bodyErrorTimes || 0) + (bodyError ? 1 : 0),
  }

  res.status(404);
  res.send();
  return;
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

  // 返回认证数据
  res.status(200);
  res.send({ ok: true, id: db_account[targetAccountIndex]['userName'] });
})

module.exports.router = router;