var userservice=require('../services/userservices');
var config=require('../configuration/dbconfig');
var jwt=require('jsonwebtoken');
var token=require('../middleware/token')
var nodemailer=require('../middleware/mail');
var singleupload=require('../middleware/img-uploading');
exports.register=(req,res)=> {
    console.log("controller1");
    responseresult={};
    userservice.register(req.body,(err,data)=>{
        console.log("control2",req.body);
        if(err) {
            responseresult.success=false;
            responseresult.error=err;
            return res.status(400).send(responseresult);
        }
        else {
            responseresult.success=true;
            responseresult.result=data;
            var payload={
                email: req.body.email
            }
            var obj=token.generateToken(payload);
            console.log(obj);
            const url=`http://localhost:8000/#!/verification/:${obj.token}`;
            console.log(url,req.body.email);
            nodemailer.sendmail(url,req.body.email);

            return res.status(200).send(url);

        }
    })
}

exports.verification=(req,res)=>{
    var responseresult={}
    userservice.verification(req.body,(err,data)=>{
        if(err){
            responseresult.success=false;
            responseresult.error=err;
            res.status(200).send(responseresult);
        }
        else {
            responseresult.success=true;
            responseresult.result=data;
            res.status(200).send(responseresult);
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
            email=req.body.email
            let token1=jwt.sign({_id:data._id}, config.secret, {expiresIn : '1d'});
            
            console.log("controller 2",data);
            client.set(token1, token1,redis.print)
            // client.keys('*',(err,reply) => {
            //     if(err)
            //     console.log(err);
            //     else
            //     console.log(reply);
                
            // })
            return res.status(200).send({
                message:'token generated',
                token:token1
            });
        }

    })
}

exports.forgotPassword=(req,res)=>{
    const responseresult={}
    userservice.forgotPassword(req.body,(err,data)=>{
        console.log(data);
        if(err) {
            responseresult.success=false,
            responseresult.error=err,
            res.status(400).send(responseresult)
        }
        else{
            const payload={
                email:req.body.email
            }
            var obj=token.generateToken(payload);
            const url=`http://localhost:4200/resetpassword/:${obj.token}`;
            nodemailer.sendmail(url,req.body.email);
            res.status(200).send(url);
        }
    })
}


exports.resetPassword=(req,res)=>{
    console.log("In a controller resetPassword");
    userservice.resetPassword(req.body,(err,result)=>{
        if(err) {
            responseresult.success=false;
            responseresult.error=err;
            res.status(400).send(responseresult);
        }
        else {
            console.log("Password reset successfully");
            responseresult.success=true;
            responseresult.result=result;
            res.status(200).send(responseresult);
        }
    })
exports.uploadimg = function(req,res){
    console.log("Upload image controller");
    responseresult={}
    var upload = singleupload.single('image');

    upload(req, res, function(err) {

        if (err) {
          return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
        }
    
        return res.json({'imageUrl': req.file.location});
      });
    }


}