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
            responseResult.sucess=false;
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

module.exports.getPopulateNotes=(req,res)=>{
    responseResult={};
    noteObj={
        // id:req.decoded._id,
        // noteid: req.body.noteid,
        // _id: req.body.label,
        label:req.body.label
    }
    console.log("Controller 1");
    noteservice.getPopulateNotes(noteObj,(err,result)=>{
        console.log("Controller 2");
        if(err) {
            responseResult.success=false;
            responseresult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.sucess=true;
            responseResult.result=result;
            res.status(200).send(responseResult);
        }
    })
}
module.exports.noteArchiveController=(req,res)=>{
    console.log("Controller 1");
    console.log(req.decoded._id);
    archiveobj={
        _id:req.decoded._id
    }
    responseResult={};
    noteservice.noteArchiveServices(archiveobj,(err,result)=>{
        console.log("Controller 2",result);
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.success=true;
            responseResult.message=result;
            res.status(200).send(responseResult);
        }
     })
} 

module.exports.noteUpdateArchiveController=(req,res)=>{
    console.log("controller 1",req.body);
    archiveObj={
        userid:req.decoded._id,
        _id:req.body._id,
        archive:req.body.archive
    }
    responseResult={}
    noteservice.noteUpdateArchiveServices(archiveObj,(err,result)=>{
        console.log("Controller 2");
        if(err) {
            responseResult.success=false;
            responseResult.error=err;
            res.status(400).send(responseResult);
        }
        else {
            responseResult.success=true;
            responseResult.message=result;
            res.status(200).send(responseResult);
        }
    })
}

/**
 * @Description : Here Get All The Trash Notes
 */

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
            responseResult.message=result;
            res.status(200).send(responseResult);
        }
     })
} 
/**
 *  @Description : Update Trash Api
 */
module.exports.noteUpdateTrashController=(req,res)=>{
    console.log("controller 1",req.body);
        trashObj={
        userid:req.decoded._id,
        _id:req.body._id,
        trash:req.body.trash
    }
    responseResult={}
    noteservice.noteUpdateTrashServices(trashObj,(err,result)=>{
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

/*Delete note*/
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

/* Add Label */
module.exports.noteAddLabelController=(req,res)=>{
    try{
    console.log("Controller 1");
    const labelObj={
        userid:req.decoded._id,
        label: req.body.labelname
    }
    const responseResult={}
    console.log(labelObj)
    noteservice.noteAddLabelServices(labelObj,(err,result)=>{
        console.log("controller 2");
        if(err){
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
}catch(err){
    console.log("in catch",err);
    res.status(400).send(err);
}
}

/* Get All Labels */
module.exports.noteGetAllLabelController=(req,res)=>{
    console.log("Controller 1");
    labelObj={
        userid: req.decoded._id,
    }
    responseResult={}
    noteservice.noteGetLabelServices(labelObj,(err,result)=>{
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

/* Update Label */

module.exports.noteUpdateLabelController=(req,res)=>{
    console.log('Controller 2');
    labelObj={
        userid:req.decoded._id,
        _id:req.body._id
    }
    responseResult={}
    noteseervice.noteUpdateLabelServices(labelObj,(err,result)=>{

        if(err) {
        responseResult.success=false;
        responseResult.error=err;
        res.status(400).send(responseResult);
    }
    else {
        responseResult.success=true;
        responseResult.result=result;
    }
})
}
/*Delete Label*/
module.exports.noteDeleteLabelController=(req,res)=>{
    console.log('Controller 2');
    labelObj={
        userid:req.decoded._id,
        _id:req.body._id
    }
    responseResult={}
    noteseervice.noteUpdateLabelServices(labelObj,(err,result)=>{

        if(err) {
        responseResult.success=false;
        responseResult.error=err;
        res.status(400).send(responseResult);
    }
    else {
        responseResult.success=true;
        responseResult.result=result;
    }
})
}

/**
 * @description : Add Reminder
 */

module.exports.noteAddReminderController=(req,res)=>{
    console.log("Body",req.body);
    renminderObj={
        noteid: req.body.id,
        reminder: req.body.reminder
    }
    responseResult={}
    noteservice.noteAddReminderServices(reminderObj,(err,result)=>{
        console.log('controller 2');
        if(err){
            console.log(err);
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
/**
 * @description : Delete Reminder
 */

module.exports.noteDeleteReminderController=(req,res)=>{
    console.log('Controller 1');
    console.log("body",req.body);
    reminderObj={
        
        noteid:req.body.id,
        reminder:req.body.reminder
    }
    responseResult={}
    noteservice.noteDeleteReminderServices(reminderObj,(err,result)=>{
        console.log('Controller 2');
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