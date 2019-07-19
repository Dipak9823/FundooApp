/*********************************************************************************************************************
 * @purpose : here we write notes schemas and api
 * @File : notemodel.js
 * @author : DipakPatil
 * @version : 1.0
 * @since :
 ***********************************************************************************************************************/


var mongoose=require("mongoose");

var noteSchema=new mongoose.Schema({

   userid:{
       type: String
   },

   title: {type: String}
    ,

   description:{
       type:String
   },
   label:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: label
        }
    ],

   color:{
       type:String
   },

   archive:{
       type:Boolean,
       default: false       

    },

   reminder:[{
            type:Date
        }]
    ,
   trash:{
       type: Boolean,
       default: false
   }    

});
var note=mongoose.model('addnotes',noteSchema);


/**
 * @Description : Add Label Schema
 */

var labelSchema=new mongoose.Schema({

    noteid :{
        type: mongoose.Schema.Types.ObjectId, ref: note
    },
    label:{
        type: String
    },
    userid: {
       type: String
    }

})
var label=mongoose.model("label",labelSchema);




class NoteModel{

/**
 * @Description : here we save notes
 */
    addNotes(req,callback){
        console.log("Note model addNotes",req.body);
                    var newnotes=new note({
                    userid: req.decoded._id,
                    title: req.body.title,
                    label: req.body.label,
                    description:req.body.description,
                    color: req.body.color,
                    reminder:req.body.reminder,
                    archive: req.body.archive,
                })
               // reminder: req.body.reminder

            newnotes.save((err,result)=>
            {
                if(err){
                    console.log("Error in saving data",err);
                        return callback(err);
                }
                else {
                    console.log("Successfully save",result);
                        return callback(null, result);
                }
            });
    }
     
    
/**
 * @Description : Here update existing note
 */
    updateNotes(body,callback) {
        console.log("notemodel");
        note.updateOne({"userid":body.userid},{
            $set:{
                    "description":body.description
                 }
        },(err,result)=>{
            if(err) {
                console.log("Error in finding user id:-",err);
                return callback(err);
            }
            else {
                console.log("Update successfully",result);
                return callback(null,result);
            }

        })
    }

   


/**
 * @Description : using this api get all notes from database
 */

    getAllNotes(body,callback) {
        note.find({},(err,result)=> {
            if(err) {
                console.log("Userid does not find in our database",err);
                return callback(err);
            }
            else{
                //console.log("Successfully Run",result);
                return callback(null,result);
            }

        });
    }

/**
* @description: Here All The Populate notes from labels
* @param {*} noteobj 
* @param {*} callback 
*/
    getPopulateNotes(noteObj,callback) {
        console.log("Model 1",noteObj);
        label.findOne({label:noteObj.label}).populate('note').exec((err ,result)=>{
            console.log("Model 2",result);
            if(err) {
                console.log(err);
                return callback(err);
            }
            else {
                console.log(result);
                return callback(null,result);
            }
        })
    }
/**
 * @Description : Here all the archive notes are displayed
 */
archiveNotes(archiveobj,callback) {
    note.find({'userid':archiveobj._id,'archive':true},(err,result)=>{
        console.log("notemodel",result)
        if(err) {
            console.log("Error in finding trash");
            return callback(err);
        }
        else {
            console.log(result);
            return callback(null,result);
        }
    })
}
/**
 * @Description : Here all the update Archive notes
 */
    updateArchiveNotes(archiveObj,callback) {
        console.log("notemodel 1",archiveObj);
    note.updateOne({'userid': archiveObj.userid ,'_id': archiveObj._id},
                   {$set:{'archive': archiveObj.archive}},(err,result)=>{
                       console.log("notemodel 2");
                       if(err) {
                           console.log("Error in notemodel");
                           return callback(err);
                       }
                       else{
                            console.log(result);
                            return callback(null,result);
                       }
                   } )
    }
/**
 * @Description : Here all the trash notes are displayed
 */
    trashNotes(body,callback) {
        note.find({'trash':true},(err,result)=>{
            console.log(result)
            if(err) {
                console.log("Error in finding trash");
                return callback(err);
            }
            else {
                console.log(result);
                return callback(null,result);
            }
        })
    }

/**
 * @Description : Here all the update Trash notes
 */
updateTrashNotes(trashObj,callback) {
    console.log("notemodel 1",trashObj);
note.updateOne({'userid': trashObj.userid ,'_id': trashObj._id},
               {$set:{'trash': trashObj.trash}},{upsert:true},(err,result)=>{
                   console.log("notemodel 2");
                   if(err) {
                       console.log("Error in notemodel",err);
                       return callback(err);
                   }
                   else{
                        console.log(result);
                        return callback(null,result);
                   }
               } )
}

/**
 * @Description : using this api delete all notes from the database
 */
    deleteNotes(body,callback) {
        note.deleteOne({'_id':body.noteid},(err,result)=>{
            if(err) {
                console.log("_id doesn't match",err);
                return callback(err);
            }
            else {
                console.log("Successfully Run ",result);
                return callback(null,result);
            }
        })
    }



/**
 * @description : Populate Label 
 * @param {*} labelObj 
 * @param {*} callback 
 */

    

/**
 * @Description : Using this api here we add label
 */
    addLabel(labelObj,callback) {
        console.log(labelObj);
        const newLabel={
            label:labelObj.label,
            userid: labelObj.userid
        }
        const data=new label(newLabel);
        console.log("label model",data);
        data.save((err,result)=>{
            if(err) {
                console.log(err);
                return callback(err);
            }
            else {
                console.log("result",result)
                return callback(null,result);
            }
        })
    }
/**
 * @Description : Get Label
 */
    getLabel(labelObj,callback) {
        console.log(labelObj);  
        label.find({'userid':labelObj.userid},(err,result)=>{
            if(err) {
                console.log(err);
                return callback(err);
            }
            else {
                //console.log(null,result);
                return callback(null,result);
            }
        })

    }
/**
 * @Description : Update Label 
 */  
    updateLabel(labelObj,callback) {
        console.log(labelObj);  
        label.updateOne({'userid':labelObj.id,'_id':labelObj._id},{
                    $set:{ 'label':labelObj.label } },(err,result)=>{
            if(err) {
                console.log(err);
                return callback(err);
            }
            else {
                console.log(null,result);
                return callback(null,result);
            }
        })

    }

/**
 * @Description : Delete Label
 */
    deleteLabel(labelObj,callback) {
        console.log(labelObj);  
        label.delete({'userid':labelObj.id,'_id':labelObj._id},(err,result)=>{
            if(err) {
                console.log(err);
                return callback(err);
            }
            else {
                console.log(result);
                return callback(null,result);
            }
        })
    }

/**
 * @description : Add Reminder
 * @param {*} reminderObj 
 * @param {*} callback 
 */
    addReminder(reminderObj,callback) {
    console.log('NoteModel 1',reminderObj);
    note.updateOne({'_id':reminderObj.noteid},
    {
        $set: { 'reminder':reminderObj.reminder } 
    },(err,result)=>{
        console.log("Note model 2",result);
        if(err) {
            console.log(err);
            return callback(err);
        }
        else {
            //console.log(result);
            return callback(null,result);
        }
    })

}
 
/**
 * @description : Delete Reminder
 */
    deleteReminder(reminderObj,callback) {
        console.log('NoteModel 1',reminderObj);
        note.findOneAndUpdate({'_id':reminderObj.noteid},
        {
            $pull: { 'reminder':reminderObj.reminder } 
        },(err,result)=>{
            console.log("Note model 2",result);
            if(err) {
                console.log(err);
                return callback(err);
            }
            else {
                //console.log(result);
                return callback(null,result);
            }
        })

    }
}


module.exports=new NoteModel();