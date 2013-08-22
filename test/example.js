/**
 * Testing how models will work.
 */

// this bit normally happens in app.js
var env = 'makomi' // production | test

// load the config
var mkSrc = require('makomi-source-util');
mkSrc.config.setConfigFileLocation('./testapp1/.makomi/')
mkSrc.config.setEnv(env)

// load the datasource
var sourceDir = "./test/testapp1/.makomi/"
var datasourceName = "maindb"
mkSrc.loadDatasource(sourceDir,datasourceName,function(datasource) {

  // load the adapter and configuration, and connect
  var adapter = require(datasource.adapter)

  mkSrc.config.loadConfig(function() {

    // convert datasource.params into connection params obj
    adapter.connect

  })

})


