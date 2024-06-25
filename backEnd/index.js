const express = require("express");
const compression = require("compression");
const path = require("node:path");
const appConfig = require("./config.json");
const tools = require("./tools.js");
const app = express();
const fs = require("node:fs");
const https = require('node:https');


// 压缩
app.use(compression());

// 访问记录
app.use((req, res, next) => {
  tools.log(`[${req.ip}] - [${req.method}] - ${req.url}`);
  next();
})

// 检查文件夹是否存在
const folderList = ["logs", "cert", "db", "node_modules"];
tools.checkFolderList(folderList);
// 检查是否已经存在adminKey
let adminKey = tools.getAdminKey();

// 挂载分支路由
const { router: apiMain } = require("./router/main.js");
const { router: hy2Auth } = require("./router/hy2.js");
app.use("/api", apiMain);
app.use("/hy2Auth", hy2Auth);

// 挂载前端页面
app.use(express.static(path.join(__dirname, 'static')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});


const httpsOptions = {
  key: fs.readFileSync('./cert/server.key'),
  cert: fs.readFileSync('./cert/server.crt')
};

https.createServer(httpsOptions, app).listen(appConfig.serverPort, () => {
  tools.log(`Server is running, on Port ${appConfig.serverPort}`);
  tools.log(`LocakLink: https://127.0.0.1:${appConfig.serverPort}`);
});