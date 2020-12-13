module.exports = function(db,app){
    app.get('/getDate',(req,res)=>{
        let phone = req.query.phone;
        // SELECT nicheng,xingbie FROM user_resume WHERE phone = 17731293790
        db.query(`SELECT nicheng,xingbie,nianling,xueli,dengji,xinzi,zhuzhi FROM user_resume WHERE phone= ${phone}`,(err,result)=>{
            if(err){
                console.log("查询简历出错");
            }else{
                res.send(result)
            }
        })
    })
}