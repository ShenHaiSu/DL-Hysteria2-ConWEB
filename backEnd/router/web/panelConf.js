const express = require("express");
const router = express.Router();
const tools = require("../../tools.js");

// 获取数据库对象
const db_panelConf = tools.db_getObj("panelConf");
const db_account = tools.db_getList("accounts");

const allowKeyList = [
  "allowNonManagerRegister",
  "allowNonManagerLogin",
  "hy2ServerDefaultPermission"
]

// 本路径API全部都需要管理员权限才能访问
router.use((req, res, next) => {
  // 请求Header中如果不包含session，直接抛出错误
  if (!req.cookies['session'] || req.cookies['session'] == "") return next(new Error("请先登录"));

  // 检查session是否是admin
  if (!db_account.some(account => account.session == req.cookies['session'] && account.userPermission == "admin")) return next(new Error("请先登录"));

  // 继续处理请求
  next();
})

// 获取面板设置
router.get("/getAll", (req, res, next) => {
  // 检查数据对象是否完整
  for (let i = 0; i < allowKeyList.length; i++) {
    if (db_panelConf[allowKeyList[i]] != undefined) continue;
    db_panelConf[allowKeyList[i]] = false; // 若数据对象不完整，则初始化为false
  }
  // 返回数据
  res.status(200).send(db_panelConf);
});

// 更新面板设置
router.post("/update", (req, res, next) => {
  // 检查请求体
  if (!req.body || req.body.key == undefined || req.body.value == undefined) return next(new Error("请求体不能为空"));
  // 检查key是否合法
  if (!allowKeyList.includes(req.body.key)) return next(new Error("非法的key"));
  // 检查value是否合法
  if (typeof req.body.value != "boolean") return next(new Error("非法的value"));
  // 更新数据库
  db_panelConf[req.body.key] = req.body.value;
  res.status(200).send("更新成功");
})


// 错误承接
router.use((err, req, res, next) => {
  res.status(500).send("服务器内部错误; " + err.message);
});

// 暴露接口
module.exports.router = router;