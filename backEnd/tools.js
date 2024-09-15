const fs = require("node:fs");
const path = require("node:path");
const { PanelConfig } = require("./class/PanelConfig.js");

module.exports.runtimeDate = {
  adminKey: "",
  dbAutosaveTimer: null,
};

module.exports.db = {};

/**
 * 根据要求的长度和特定样本池生成随机字符串
 * @param {Number} length 随机字符串长度
 * @param {String} pool 生成随机字符串使用的样本池
 * @returns {String} 随机字符串
 */
module.exports.genRandomString = (length, pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") => {
  let result = '';
  for (let i = 0; i < length; i++) result += pool[Math.floor(Math.random() * pool.length)];
  return result;
}

/**
 * 根据指定长度生成随机管理员秘钥
 * @param {Number} length 管理员秘钥长度
 * @returns {String} 管理员秘钥
 */
module.exports.genAdminKey = (length = 30) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@';
  return this.genRandomString(length, chars);
}

/**
 * 将控制台内容同步输出到文件
 * @param {String} input 输出内容
 * @param {String} type 输出类型
 */
module.exports.log = (input, type = "info") => {
  const msgList = input.split("\n");
  const timeStamp = new Date();
  const dateString = `${timeStamp.getFullYear()}-${this.num2Length(timeStamp.getMonth() + 1)}-${this.num2Length(timeStamp.getDate())}`;
  const timeString = `${timeStamp.getHours()}:${this.num2Length(timeStamp.getMinutes())}:${this.num2Length(timeStamp.getSeconds())}`;
  for (let i = 0; i < msgList.length; i++) {
    const displayMsg = `[${timeString}] [${type}] - ${msgList[i]}`;
    fs.appendFileSync(`./logs/${dateString}.log`, displayMsg + "\n");
    console.log(displayMsg);
  }
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

/**
 * 获取管理员秘钥
 * @returns {String} 新生成的管理员秘钥或者已存在本地的管理员秘钥
 */
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
    this.log(`No adminKey.json file was detected, and a 30-bit random string was randomly generated as the administrator key.`);
  }
  this.runtimeDate.adminKey = adminKey;
  return adminKey;
}

/**
 * 检查并生成运行需求的文件夹，
 * 
 * 如果证书文件夹不存在将会创建，并自动终止程序。
 * 
 * 请创建证书文件夹之后手动将crt和key文件存入
 * @param {Array<String>} input 需要存在的文件夹列表
 */
module.exports.checkFolderList = (input) => {
  for (const folder of input) {
    try {
      fs.accessSync(folder);
    } catch {
      if (folder != "logs") this.log(`"${folder}" The default folder does not exist, try to create it.`);

      try {
        fs.mkdirSync(folder, { recursive: true });
        if (folder == "cert") {
          this.error(`The "${folder}" folder has been created. Please manually place the SSL certificate in the folder and start the server again.`);
          process.exit(1);
        }
      } catch (err) {
        this.error(`"${folder}" folder creation failed: ${err.message}`);
        process.exit(1);
      }
    }
  }
}


/**
 * ===========================================================================
 * 
 * 数据库相关操作
 * 
 * ===========================================================================
 */


/**
 * 读取db文件夹下的所有json文件并挂载
 * 
 * 拉起db自动保存函数的自动循环器
 */
module.exports.db_init = () => {
  try {
    const dbDirectory = path.join(__dirname, 'db');
    const files = fs.readdirSync(dbDirectory);
    files.forEach(file => {
      if (path.extname(file) !== '.json') return;
      this.db[file.replace(/\..+$/, "")] = require(path.join(dbDirectory, file));
    });

    // 启动自动定时保存
    this.runtimeDate.dbAutosaveTimer = setInterval(this.db_autosave, 5 * 1000);
  } catch (err) {
    this.error(`${err} \nError reading "db" folder or reading json file in "db" folder, please check whether json content is compliant. `);
  }
}

/**
 * db自动保存函数的执行函数本体
 */
module.exports.db_autosave = () => {
  try {
    for (const fileName in this.db) {
      if (!Object.hasOwnProperty.call(this.db, fileName)) continue;
      const fileObj = this.db[fileName];
      fs.writeFileSync(`./db/${fileName}.json`, JSON.stringify(fileObj));
    }
  } catch (err) {
    this.error(`${err} \nFailed to save the db file, please check the code error.`);
  }
}

/**
 * 获取数据表已进行操作，数据表类型都是基础对象
 * @param {String} name 数据表的文件名
 * @returns {Array<Object>} 数据表对象
 */
module.exports.db_getObj = (name) => {
  if (this.db[name]) return this.db[name];
  this.db[name] = {};
  return this.db[name];
}

/**
 * 获取数据表已进行操作，数据表类型都是数组
 * @param {String} name 数据表的名字
 * @returns {Array<Object>} 数据表对象
 */
module.exports.db_getList = (name) => {
  if (this.db[name]) return this.db[name];
  this.db[name] = [];
  return this.db[name];
}