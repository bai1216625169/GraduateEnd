// 引入 mysql 需要 的 插件
var mysql = require("mysql");
// 配置 mysql 连接池
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12166",
    database: "test",
});
module.exports = db;