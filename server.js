// 引入http插件
var http = require("http");
// 引入express插件  来辅助 写 node 代码
var express = require("express");
// 调用express方法 来获取 express 的 使用 实例  --app
var app = express();
// 引入基本 操作 数据库 的 js 模块
var db = require('./dataBase');
// 引入 核心 跨域 插件
var cors = require("cors");
// 引入 url 插件 
var url = require("url");
// node 解决跨越问题
app.use(cors({
  　　methods: ["GET", "POST"],
  　　alloweHeaders: ["Content-Type", "application/json;charset=utf-8;application/x-www-form-urlencoded"]
  }));
// 引入后台 注册 模块
var register = require('./register');
// 调用 后台 注册 暴露 的 方法
register(db,app)
// 引入后台 登录 模块
var logoin = require('./logoin.js');
// 调用 local 转换 user 的 模块
logoin(db,app)
var cookieSuser = require('./cookieSuser.js');
// 调用 local 转换 user 暴露 的 方法
cookieSuser(db,app)
// 调用 getPostion  的 模块
var getPostion = require('./getPositon.js')
// 调用 getPostion暴露 的 方法
getPostion(db,app,url)
// 调用 更新简历  的 模块
var update = require('./updateDate.js')
// 调用 更新简历 暴露 的 方法
update(db,app)
// 调用 获取简历  的 模块
var getResumeDate = require('./getResumeDate')
// 调用 获取简历 暴露 的 方法
getResumeDate(db,app)



// 监听8080端口
app.listen(8080, function () {
  console.log("成功进入端口号 http://localhost:8080/");
});