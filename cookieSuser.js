module.exports = function(db,app){
    // 客户端 请求 发送 账号  请求 显示 在 界面 上
    app.get('/getUser',function(req,res){
        let localUser = req.query.user
        db.query(`SELECT * FROM user_account WHERE userName= ${localUser}`,(err,result)=>{
            if(err){
                console.log("查询已有账号,出错");
            }else{
                if(result.length==0){
                    // 响应 错误
                    res.send('账号密码错误');
                }else{
                    // 响应 正确
                    res.send('账号密码正确');
                }
            }
        })
    })
}