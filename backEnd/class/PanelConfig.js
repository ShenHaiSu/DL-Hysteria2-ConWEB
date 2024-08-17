module.exports.PanelConfig = class {
  constructor(){
    
  }

  /**
    是否允许非管理员注册 Boolean 
    默认 False
   */
  allowNonAdminRegister = false;

  /**
    默认服务器权限 Boolean
    默认 False
   */
  defaultServerPermission = false;

  /**
    面板配置最新更新时间 Number
    默认 undefined
   */
  updateTimestamp = undefined;
}