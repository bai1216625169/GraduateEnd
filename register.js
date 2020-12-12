module.exports = function(db,app){
    app.get("/register",function(req,res){
        // 接受  get 请求的  用户账号
        let userName = req.query.userName;
         // 接受  get 请求的  用户密码
        let userPassword = req.query.userPassword;
         // 首先 查询 用户 是否 被注册
        db.query(`SELECT * FROM user_account WHERE userName= ${userName}`,(err,result)=>{
            if(err){
                console.log("查询已有账号,出错");
            }else{
                if(result.length==0){
                    // 将 请求 的 数据 添加 的 数据库
                    db.query(`INSERT INTO user_account SET ?`,{userName,userPassword},(err,result)=>{
                        if(err){
                            console.log("注册账号插入,出错");
                        }else{
                            res.send("用户注册成功");
                        }
                    })
                }else{
                    res.send('该手机号已经注册');
                }
            }
        })

    })
}