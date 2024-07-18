module.exports.unRegisteredServer = class {
  firstConnect = 0;
  lastConnect = 0;
  connectCount = 0;
  error = {
    method: 0,
    body: 0
  }
}