var noteservice=require('../services/noteserrvice');

module.exports.noteAddController=(req,res)=>{
    console.log("Add note Controller 1 ");
    console.log(req.decoded._id);
    responseResult={};
    noteservice.noteaddServices(req,(err,result)=>{
        console.log("Addnote controller 2",result);
        
        if(err) {
            resposneResult.sucess=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.sucess=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}

module.exports.noteUpdateController=(req,res)=>{
    responseResult={};
    console.log("controller 1");
    noteservice.noteUpdateServices(req.body,(err,result)=>{
        console.log("Controller 2")
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else{
            responseResult.success=false;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}

module.exports.noteTrashController=(req,res)=>{
    responseResult={};
    noteservice.noteTrashServices(req.body,(err,result)=>{
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}

module.exports.noteShowController=(req,res)=>{
    responseResult={};
    noteservice.noteShowServices(req.body,(err,result)=>{
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}

module.exports.noteUpdateLableController=(req,res)=>{
    console.log("Controller 1");
    responseResult={};
    noteservice.noteUpdateLabel(req.body,(err,result)=>{
        console.log("Controller 2");
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}

module.exports.noteDeleteController=(req,res)=>{
    console.log("Controller 1");
    responseResult={};
    noteservice.noteDeleteServices(req.body,(err,result)=>{
        console.log("Controller 2");
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.success=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}