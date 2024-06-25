const fs = require("node:fs");

module.exports.runtimeDate = {
  adminKey: ""
}

/**
 * 根据指定长度生成随机字符串
 * @param {Number} length 随机字符串长度
 * @returns {String} 随机字符串
 */
module.exports.genAdminKey = (length) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

/**
 * 将控制台内容同步输出到文件
 * @param {String} input 输出内容
 * @param {String} type 输出类型
 */
module.exports.log = (input, type = "info") => {
  const timeStamp = new Date();
  const dateString = `${timeStamp.getFullYear()}-${this.num2Length(timeStamp.getMonth() + 1)}-${this.num2Length(timeStamp.getDate())}`;
  const timeString = `${timeStamp.getHours()}:${this.num2Length(timeStamp.getMinutes())}:${this.num2Length(timeStamp.getSeconds())}`;
  const displayMsg = `[${timeString}] [${type}] - ${input}`;
  fs.appendFileSync(`./logs/${dateString}.log`, displayMsg + "\n");
  console.log(displayMsg);
}

/**
 * 将控制台内容同步输出到文件
 * @param {String} input 输出内容
 */
module.exports.error = (input) => this.log(input, "error");

/**
 * 获取指定长度的字符串
 * @param {Number|String} input 输入的文字
 * @param {Number} length 返回值的长度
 * @returns {String} 返回的指定长度的字符串
 */
module.exports.num2Length = (input, length = 2) => {
  let result = `${input}`;
  for (let i = 0; i < length; i++) result = `0${result}`;
  return result.slice(result.length - length);
}

module.exports.getAdminKey = () => {
  if (this.runtimeDate.adminKey.length != 0) return this.runtimeDate.adminKey;

  let adminKey = "";
  let keyIsExist = false;
  try {
    adminKey = require("./adminKey.json")['adminKey'];
    keyIsExist = true;
  } catch {
    adminKey = this.genAdminKey(30);
    fs.writeFileSync("./adminKey.json", JSON.stringify({ adminKey }))
  }
  this.log(`adminKey: ` + adminKey);
  if (!keyIsExist) {
    keyIsExist = true;
    this.log(`未检测到 adminKey.json 文件，随机生成30位长度的随机字符串作为管理员校验码。`);
  }
  this.runtimeDate.adminKey = adminKey;
  return adminKey;
}

module.exports.checkFolderList = (input) => {
  for (const folder of input) {
    try {
      fs.accessSync(folder);
    } catch {
      if (folder != "logs") this.log(`"${folder}" 默认文件夹不存在，尝试创建。`);

      try {
        fs.mkdirSync(folder, { recursive: true });
        if (folder == "cert") {
          this.error(`"${folder}" 文件夹已创建，请手动将ssl证书放置在文件夹中，再次启动服务端。`);
          process.exit(1);
        }
      } catch (err) {
        this.error(`"${folder}" 文件夹创建失败: ${err.message}`);
        process.exit(1);
      }
    }
  }
}