/**
 * Created by RickD on 2016/8/21.
 */
var config  = require('./config_default');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(config.DATABASE_NAME,config.MYSQL_USERNAME,config.MYSQL_PASSWD,{
    host:'127.0.0.1',
    port:config.MYSQL_PORT,
    dialect : 'mysql'
});

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
