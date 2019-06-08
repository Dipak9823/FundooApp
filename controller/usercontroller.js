var userservice=require('./userservice');

module.exports.register=(req,res)=> {
    responseresult={};
    userservice.register(req.body,(err,res)=>{
        if(err) {
            responseresult.success=false;
            responseresult.error=err;
            res.status(400).send(responseresult);
        }
        else {
            responseresult.success=true;
            responseresult.error=err;
            res.status(200).send(responseresult);
        }
    })
}