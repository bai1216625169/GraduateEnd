module.exports = function(db,app){
    app.get('/updateDate',(req,res)=>{
        let phone = req.query.phone
        let nicheng = req.query.nicheng;
        let xingbie = req.query.xingbie;
        let nianling = req.query.nianling;
        let xueli = req.query.xueli;
        let dengji = req.query.dengji;
        let xinzi = req.query.xinzi;
        let zhuzhi = req.query.zhuzhi;
        db.query(`SELECT * FROM user_resume WHERE phone= ${phone}`,(err,result)=>{
            if(err){
                console.log("查询已有账号,出错");
            }else{
                if(result.length==0){
                    // 插入 操作
                    db.query(`INSERT INTO user_resume SET ?`,{phone,nicheng,xingbie,nianling,xueli,dengji,xinzi,zhuzhi},(err,result)=>{
                        if(err){
                            console.log("注册账号插入,出错");
                        }else{
                            res.send('写入成功');
                        }
                    })
                }else{
                    db.query(`UPDATE  user_resume SET phone = ?,nicheng = ?,xingbie = ?,nianling = ?,xueli = ?,dengji = ?,xinzi = ?,zhuzhi = ? WHERE phone = ?`,[phone,nicheng,xingbie,nianling,xueli,dengji,xinzi,zhuzhi,phone],(err,result)=>{
                        if(err){
                            console.log("更新账号插入,出错");
                        }else{
                            res.send('写入成功');
                        }
                    })
                }
            }
        })
    });
}