module.exports.RegisteredServer = class {
  alias = "";
  domain = "";
  port = [];
  maxOnline = 0;
  nowOnline = 0;
  authCount = 0;
  firstConnect = 0;
  lastConnect = 0;
  onlineList = {};
  infoPort = "";
  infoAuthKey = "";
  error = {
    method: 0,
    body: 0,
    reject: 0,
    timeout: 0,
  };
  bandwidth = {
    total: 0,
    used: 0
  }
}