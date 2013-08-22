var Adapter = require('makomi-adapter')
var util = require('util')
var mysql = require('mysql')

module.exports = MysqlAdapater
util.inherits(MysqlAdapter,Adapter)

function MysqlAdapter() {}
MysqlAdapter.prototype.connect = function(params) {
  pool = mysql.createPool({
    host: params.host,
    user: params.user,
    password: params.password
  })
}