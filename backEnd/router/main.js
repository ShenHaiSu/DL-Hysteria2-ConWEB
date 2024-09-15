const express = require("express");
const router = express.Router();

// 引入分支路由
const { router: webapi_auth } = require("./web/auth.js");
const { router: webapi_systemInfo } = require("./web/systemInfo.js");
const { router: webapi_hy2ServerInfo } = require("./web/hy2Info.js");
const { router: webapi_panelConf } = require("./web/panelConf.js")

// 挂载分支路由
router.use("/auth", webapi_auth);
router.use("/systemInfo", webapi_systemInfo);
router.use("/hy2ServerInfo", webapi_hy2ServerInfo);
router.use("/panelConf", webapi_panelConf);


module.exports.router = router;
