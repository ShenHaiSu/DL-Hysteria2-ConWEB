const tools = require("../tools.js");

module.exports.Account = class {
  constructor(name, password, isAdmin) {
    this.userName = name;
    this.userPassword = password;
    this.userPermission = isAdmin ? "admin" : "user";
  }

  userName;
  userPassword;
  userPermission;
  session = "";
  userInfo = {
    hy2Key: tools.genRandomString(30),
    txSpeed: 125000, // 默认 1mb/s  125000 = 1Mbps
    maxOnline: 3, // 默认最多三设备在线
    nowOnline: 0, // 当前设备在线数，这个交给自动更新维护
    accessServer: [], // 有权使用的服务器
    blockServer: [], // 无权使用的服务器
    bandwidth: {
      total: 5, // 默认带宽 5GB
      used: 0
    }
  };
}