const express = require("express");
const router = express.Router();
const tools = require("../tools.js");

// 初始化
const db_server = tools.db_getObj("servers");
const db_account = tools.db_getObj("accounts");
if (db_server.length == 0) db_server.push({}, []);

// 中间件 - 检查发来申请的ip是否在服务器列表中
router.use((req, res, next) => {
  // IP是否是已认证的服务器
  if (db_server[0][req.ip]) return next();

  // IP是否被加入到待认证服务器中
  if (!db_server[1].includes(req.ip)) db_server[1].push(req.ip);
  res.status(404);
  res.send();
  return;
})

// 面向外部hy2的认证接口
router.post("/auth", (req, res, next) => {
  // 检查post 包体
  if (!(req.body['addr'] && req.body['auth'] && req.body['tx'])) {
    res.status(404);
    res.send();
    return;
  }

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