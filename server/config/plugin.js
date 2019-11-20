'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportLocal: {
    enable: true,
    package: 'egg-passport-local',
  }
};
