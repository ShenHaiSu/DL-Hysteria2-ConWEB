/**
 * 访问路径 /hy2ServerInfo
 */

const express = require("express");
const router = express.Router();
const tools = require("../../tools.js");

// 获取accounts数据对象
const db_account = tools.db_getObj("accounts");
const db_server = tools.db_getObj("servers");

// 工具函数
const rejectResponse = (req, res, next) => {
  res.status(500);
  res.send({ error: true, msg: "无权" });
}

// 认证服务器类
const { RegisteredServer } = require("../../class/RegisteredServer.js");

// 未认证服务器类
const { unRegisteredServer } = require("../../class/unRegisteredServer.js");

// 权限检测
router.use((req, res, next) => {
  // 检测cookie的Session
  if (!req.cookies['session'] || req.cookies['session'] == "") return rejectResponse(req, res, next);

  // 检测accountPermission
  const targetAccountIndex = db_account.findIndex(account => account.session == req.cookies['session']);
  if (targetAccountIndex == -1) return rejectResponse(req, res, next);
  if (db_account[targetAccountIndex]['userPermission'] != "admin") return rejectResponse(req, res, next);

  // 跳转下一步路由
  next();
})


// 获取所有hy2服务器的数据
router.get("/all", (req, res, next) => {
  res.status(200);
  res.send(db_server);
})

// 获取所有已认证服务器的数据
router.get("/allRegistered", (req, res, next) => {
  res.status(200);
  res.send(db_server[0]);
})

// 获取所有未认证服务器的数据
router.get("/allUnregistered", (req, res, next) => {
  res.status(200);
  res.send(db_server[1]);
})

// 认证hy2服务器
router.post("/registerServer", (req, res, next) => {
  // 检查body内容
  const bodyPropList = ["target", "alias", "port", "maxOnline", "infoPort", "infoAuthkey", "maxBandwidth"];
  if (bodyPropList.some(prop => !Object.hasOwnProperty.call(req.body, prop))) return rejectResponse(req, res, next);

  // 创建新的认证服务器对象
  const newServer = new RegisteredServer();
  newServer.alias = req.body['alias'];
  newServer.domain = req.body['domain'] || "";
  newServer.port = req.body['port'];
  newServer.maxOnline = req.body['maxOnline'];
  newServer.infoPort = req.body['infoPort'];
  newServer.infoAuthKey = req.body['infoAuthkey'];
  newServer.bandwidth.total = req.body['maxBandwidth'];
  db_server[0][req.body['target']] = newServer;

  // 删除未认证服务器对象
  if (db_server[1][req.body['target']]) delete db_server[1][req.body['target']];

  res.status(200);
})

// 编辑已认证的hy2服务器
router.post("/editServer", (req, res, next) => {
  // 检查body内容
  const bodyPropList = ["target","domain", "alias", "port", "maxOnline", "infoPort", "infoAuthKey", "maxBandwidth"]; // 待编辑的属性
  if (bodyPropList.some(prop => !Object.hasOwnProperty.call(req.body, prop))) return rejectResponse(req, res, next);

  // 检查别名是否重复
  const targetServerAlias = req.body['alias'];
  const targetServerIndex = db_server[0].findIndex(server => server.alias == targetServerAlias && server.ip != req.body['target']);
  if (targetServerIndex != -1) return rejectResponse(req, res, next);

  // 编辑服务器信息
  const targetServerIP = req.body['target'];
  const targetServer = db_server[0][targetServerIP];
  if (!targetServer) return rejectResponse(req, res, next);
  targetServer.alias = req.body['alias'];
  targetServer.port = req.body['port'];
  targetServer.maxOnline = req.body['maxOnline'];
  targetServer.infoPort = req.body['infoPort'];
  targetServer.infoAuthKey = req.body['infoAuthKey'];
  targetServer.bandwidth.total = req.body['maxBandwidth'];
  targetServer.domain = req.body['domain'] || "";

  // 响应客户端
  res.status(200);
  res.send({ error: false, msg: `已编辑服务器${targetServerIP}的信息。` });
})

// 取消认证服务器
router.post("/unRegisterServer", (req, res, next) => {
  // 检查body内容
  if (!req.body['target'] || req.body['target'] == "") return rejectResponse(req, res, next);

  // 添加到未认证服务器
  const targetServerIP = req.body['target'];
  db_server[1][targetServerIP] = new unRegisteredServer();

  // 转移服务器信息
  db_server[1][targetServerIP].firstConnect = db_server[0][targetServerIP].firstConnect;
  db_server[1][targetServerIP].lastConnect = db_server[0][targetServerIP].lastConnect;
  db_server[1][targetServerIP].error.method = db_server[0][targetServerIP].error.method;
  db_server[1][targetServerIP].error.body = db_server[0][targetServerIP].error.body;

  // 删除已认证服务器
  delete db_server[0][targetServerIP];

  // 响应客户端
  res.status(200);
  res.send({ error: false, msg: `将${targetServerIP}服务器从已认证服务器中删除，添加在未认证服务器列表中。` });
})

// 删除指定服务器数据
router.post("/deleteServer", (req, res, next) => {
  // 检查body内容
  if (!req.body['target'] || req.body['target'] == "") return rejectResponse(req, res, next);

  // 删除服务器数据
  const targetServerIP = req.body['target'];
  let error = false;
  if (db_server[0][targetServerIP]) {
    delete db_server[0][targetServerIP];
  } else if (db_server[1][targetServerIP]) {
    delete db_server[1][targetServerIP];
  } else {
    error = true;
  }

  // 响应客户端
  if (error) {
    res.status(500);
    res.send({ error, msg: `删除失败，请检查node后端命令行提示。` });
  } else {
    res.status(200);
    res.send({ error, msg: `已经删除服务器${targetServerIP}。` });
  }
})

// 清除执行服务器数据
router.post("/clearServer", (req, res, next) => {
  // 检查body内容
  if (!req.body['target'] || req.body['target'] == "") return rejectResponse(req, res, next);

  // 执行删除
  const targetServerIP = req.body['target'];
  let error = false;
  if (db_server[0][targetServerIP]) {
    db_server[0][targetServerIP] = Object.assign(
      db_server[0][targetServerIP],
      {
        nowOnline: 0,
        authCount: 0,
        lastConnect: 0,
        onlineList: {},
        error: { method: 0, body: 0, reject: 0, timeout: 0 },
        bandwidth: { total: db_server[0][targetServerIP].bandwidth.total, used: 0 }
      })
  } else if (db_server[1][targetServerIP]) {
    db_server[1][targetServerIP] = Object.assign(
      db_server[1][targetServerIP],
      {
        lastConnect: 0,
        error: { method: 0, body: 0 }
      })
  } else {
    error = true;
  }

  // 响应客户端
  if (error) {
    res.status(500);
    res.send({ error, msg: `执行清除失败，请检查NODE.js后端的错误提示。` });
  } else {
    res.status(200);
    res.send({ error, msg: `已经清空服务器${targetServerIP}。` });
  }
})

// 清除执行服务器的已使用带宽
router.post("/clearServerBandwidth", (req, res, next) => {
  // 检查body内容
  if (!req.body['target'] || req.body['target'] == "") return rejectResponse(req, res, next);

  // 检查并清空已使用的带宽
  if (db_server[0][req.body['target']]) {
    db_server[0][req.body['target']].bandwidth.used = 0;
    res.status(200);
    res.send({ error: false, msg: "完成重置" });
  } else {
    res.status(500);
    res.send({ error: true, msg: "该服务器不存在" });
  }
})

// 错误承接
router.all("*", (req, res) => {
  res.send({ error: true, msg: "服务端内部错误，请检查后台信息或者日志" });
})

// 暴露
module.exports.router = router;