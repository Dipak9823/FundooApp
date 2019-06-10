var userservice=require('../services/userservices');

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
            return res.status(200).send(responseresult);
        }
    })
}