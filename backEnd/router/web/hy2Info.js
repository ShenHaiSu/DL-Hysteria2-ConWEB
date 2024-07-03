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
router.get("/allInfo", (req, res, next) => {
  res.status(200);
  res.send(db_server);
})

// 获取所有已认证服务器的数据
router.get("/authedInfo", (req, res, next) => {
  res.status(200);
  res.send(db_server[0]);
})

// 获取所有未认证服务器的数据
router.get("/unauthedInfo", (req, res, next) => {
  res.status(200);
  res.send(db_server[1]);
})

// 认证hy2服务器
router.post("/authServer", (req, res, next) => {
  res.status(200);
})

// 取消认证服务器
router.post("/unauthServer", (req, res, next) => {
  res.status(200);
})

// 删除指定服务器数据
router.post("/deleteServer", (req, res, next) => {
  res.status(200);
})

// 清除执行服务器数据
router.post("/clearServer", (req, res, next) => {
  res.status(200);
})


// 暴露
module.exports.router = router;