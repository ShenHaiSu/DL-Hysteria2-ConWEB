const fs = require("node:fs");

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
  const dateString = `${timeStamp.getFullYear()}-${timeStamp.getMonth() + 1}-${timeStamp.getDate()}`;
  const timeString = `${timeStamp.getHours()}:${timeStamp.getMinutes()}:${timeStamp.getSeconds()}`;

  const displayMsg = `[${timeString}] [${type}] - ${input}`;
  fs.appendFileSync(`./logs/${dateString}.log`, displayMsg + "\n");
  console.log(displayMsg);
}