/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555474663952_8771';

  // add your middleware config here
  config.middleware = [];

  // 关闭CSRF
  config.security = {
    csrf: false,
  };

  // 上传文件白名单
  config.multipart = {
    fileExtensions: ['.pkres', '.png', '.jpg', '.jpeg'],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  passportLocal = {
    // usernameField: 'username',
    // passwordField: 'password',
  }

  return {
    ...config,
    ...userConfig,
  };
};
