// 引入 node 读写 功能 模块
var fs = require("fs");
// 引入 node 路径 拼接 功能 模块
var path = require("path");
module.exports = function(db,app,url){
    // 客户端 请求 发送 账号  请求 显示 在 界面 上
    app.get('/getPosition',function(req,res){
        var params = url.parse(req.url, true).query;
        fs.readFile(
          path.join(__dirname,"Json", "position.json"),
          function (err, data) {
            var data = JSON.parse(data.toString());
            var list = [];
            for (var key in data) {
              if (key >= (params.page - 1) * 10 && key < params.page * 10) {
                list.push(data[key]);
              }
            }
            list.push({ pageNumber: Math.ceil(data.length / 10) });
            res.send(list);
          }
        );
    })
}