var jwt=require("jsonwebtoken");
var config=require("../configuration/dbconfig");

let checkToken=(req,res,next) => {
    let token1=req.headers['token'];

    if(token1) {
        jwt.verify(token1,config.secret,(err,decoded)=>{
            if(err) {
                return res.send({
                    success: false,
                    message : "token is not value"
                })
            }
            else {
                req.decoded=decoded;
                next();
            }
        
        });
    } else {
        return res.send({
            success: false,
            message : "Auth token is not supplied"
        })
    }
};

module.exports=checkToken;