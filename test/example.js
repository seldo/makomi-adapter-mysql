/**
 * Testing how models will work.
 */

// this bit normally happens in app.js
var env = 'makomi' // production | test

// load the config
var mkSrc = require('makomi-source-utils');
mkSrc.config.setConfigFileLocation('./testapp1/.makomi/config.json')
mkSrc.config.loadConfig(env)

// load the datasource and connect()

adapter.connect()


