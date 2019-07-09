/*********************************************************************************************************************
 * @purpose : here, write our note controller to sending req to backend or to sending res to frontend
 * @File : notecontroller.js
 * @author : DipakPatil
 * @version : 1.0
 * @since :
 ***********************************************************************************************************************/

var noteservice=require('../services/noteserrvice');

module.exports.noteAddController=(req,res)=>{
    //console.log("Add note Controller 1 ");
    console.log(req.decoded._id);
    req.checkBody('description','Description is required').not().isEmpty();
    var errors=req.validationErrors();
    responseResult={};
    if(errors){
        responseResult.success=false;
        responseResult.error=errors;
        return res.status(400).send(responseResult)
    }
    else {
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



module.exports.getAllNoteController=(req,res)=>{
    responseResult={};
    noteservice.getAllNoteService(req.body,(err,result)=>{
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

module.exports.noteTrashController=(req,res)=>{
    console.log("Controller 1");
    responseResult={};
    noteservice.noteTrashServices(req.body,(err,result)=>{
        console.log("Controller 2",result);
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.success=true;
            responseResult.error=result;
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