module.exports = function(db,app){
    app.get('/logoin',function(req,res){
        // 接受  post 请求的  用户账号
        let userName = req.query.userName;
         // 接受  post 请求的  用户密码
        let userPassword = req.query.userPassword;
        db.query(`SELECT * FROM user_account WHERE userName= ${userName} AND userPassword = ${userPassword}`,(err,result)=>{
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