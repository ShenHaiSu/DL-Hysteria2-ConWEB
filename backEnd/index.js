const express = require("express");
const compression = require("compression");
const path = require("node:path");
const appConfig = require("./config.json");
const tools = require("./tools.js");
const app = express();
const fs = require("node:fs");
const https = require('node:https');
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
const { startLoopTasks } = require("./tasks/main.js");


// 压缩
app.use(compression());

// body格式化中间件
app.use(bodyParser.json());
// cookie格式化中间件
app.use(cookieParser());

// 访问记录
app.use((req, res, next) => {
  tools.log(`[${req.ip}] - [${req.method}] - ${req.url}`);
  next();
})

// 检查文件夹是否存在
const folderList = ["logs", "cert", "db", "node_modules"];
tools.checkFolderList(folderList);

// 挂载本地db文件
tools.db_init();

// 检查是否已经存在adminKey
tools.getAdminKey();

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
  startLoopTasks();
  tools.log(`Start Loop Tasks`);
});