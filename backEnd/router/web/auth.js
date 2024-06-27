const express = require("express");
const router = express.Router();
const tools = require("../../tools.js");

// 获取accounts数据对象
const db_account = tools.db_getObj("accounts");
const adminKey = tools.runtimeDate.adminKey;

// 定义 account 类
class Account {
  constructor(name, password, isAdmin) {
    this.userName = name;
    this.userPassword = password;
    this.userPermission = isAdmin ? "admin" : "user";
  }

  userName;
  userPassword;
  userPermission;
  session = "";
  userInfo = {};
}

// 注册接口
router.post("/regist", (req, res, next) => {
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
    res.cookie("session", newData.session, { httpOnly: true });
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

module.exports.router = router;