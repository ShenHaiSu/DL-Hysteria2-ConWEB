const express = require("express");
const fs = require("node:fs");
const app = express();
const appConfig = require("./config.json");
const tools = require("./tools.js");



// 检查是否已经存在adminKey
let adminKey = null;
let keyIsExist = false;
try {
  adminKey = require("./adminKey.json")['adminKey'];
  keyIsExist = true;
} catch {
  adminKey = tools.genAdminKey(30);
  fs.writeFileSync("./adminKey.json", JSON.stringify({ adminKey }))
}
tools.log(`adminKey: ` + adminKey);
if (!keyIsExist) {
  keyIsExist = true;
  tools.log(`未检测到 adminKey.json 文件，随机生成30位长度的随机字符串作为管理员校验码。`);
}



app.listen(appConfig.serverPort, () => {
  tools.log(`Server is running, on Port ${appConfig.serverPort}`);
})