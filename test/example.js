/**
 * Testing how models will work.
 */

/* this bit happens in app.js */
var env = 'makomi' // production | test

// load the config
var mkSrc = require('makomi-source-util');
mkSrc.config.setConfigFileLocation('./testapp1/.makomi/')
mkSrc.config.setEnv(env)
mkSrc.config.loadConfig(function(config) {

  // then we'd require(datasource/datasourcename.js)

  /* this happens inside datasourcename.js */





})
