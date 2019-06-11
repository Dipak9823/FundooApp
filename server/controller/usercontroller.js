var userservice=require('../services/userservices');
var config=require('../configuration/dbconfig');
var jwt=require('jsonwebtoken');
var token=require('../middleware/token')
var send=require('../middleware/mail');
exports.register=(req,res)=> {
    console.log("controller1");
    responseresult={};
    userservice.register(req.body,(err,result)=>{
        console.log("control2",req.body);
        if(err) {
            responseresult.success=false;
            responseresult.error=err;
            return res.status(400).send(responseresult);
        }
        else {
            responseresult.success=true;
            responseresult.result=result;
            var payload={
                email: responseresult.result.email
            }
            var obj=token.generateToken(payload);
            const url=`http://localhost:8000/login/${obj}`;
            send.sendmail(url,req.body.email);
            return res.status(200).send(url);

        }
    })
}

exports.login=(req,res)=>{
    console.log("controller 1");
    
    responseresult={}
    userservice.login(req.body,(err,data)=>{
        if(err) {
            responseresult.success=false;
            responseresult.error=err;
            return res.status(400).send(responseresult);
        }
        else {
            let token=jwt.sign({email:req.body.email, _id: data[0]._id}, config.secret, {expiresIn : '1d'});
            
            return res.status(200).send({
                message:'token generated',
                token:token
            });
        }

    })
}