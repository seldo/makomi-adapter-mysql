var Adapter = require('makomi-adapter')
var util = require('util')

module.exports = MysqlAdapater
util.inherits(MysqlAdapter,Adapter)

function MysqlAdapter() {}
MysqlAdapter.prototype.connect = function() {
  // TODO: actually connect, probably need some parameters
}