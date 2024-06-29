const express = require("express");
const router = express.Router();

// 引入分支路由
const { router: webapi_auth } = require("./web/auth.js");
const { router: webapi_systemInfo } = require("./web/systemInfo.js");

// 挂载分支路由
router.use("/auth", webapi_auth);
router.use("/systemInfo", webapi_systemInfo);


module.exports.router = router;
