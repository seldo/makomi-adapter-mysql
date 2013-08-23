var Adapter = require('makomi-adapter')
var util = require('util')
var mysql = require('mysql')

module.exports = MysqlAdapater
util.inherits(MysqlAdapter,Adapter)

var pool;

function MysqlAdapter() {}
MysqlAdapter.prototype.initialize = function(params) {
  pool = mysql.createPool({
    host: params.host,
    user: params.user,
    password: params.password
  })
}

MysqlAdapter.prototype.begin = function(cb) {
  pool.getConnection(function(err, connection) {
    // TODO: start transaction?
    cb(connection)
  });
}

MysqlAdapter.prototype.query = function(query,params) {



}