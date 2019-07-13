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

   label:{
       type: String
   },

   description:{
       type:String
   },

   color:{
       type:String
   },

   archive:{
       type:Boolean,
        default: false       

    },

   reminder:{
        type:String
   },
   trash:{
       type: Boolean,
       default: false
   }    

});

var note=mongoose.model('addnotes',noteSchema);

class NoteModel{

/**
 * @Description : here we save notes
 */
    addNotes(req,callback){
        console.log("Note model addNotes",req.body);
                    var newnotes=new note({
                    userid: req.decoded._id,
                    label: req.body.label,
                    description:req.body.description,
                    color: req.body.color,
                    archive: req.body.archive,
                    reminder: req.body.reminder
                })

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
 * @Description : here stored a trash notes
 */
   

/**
 * @Descritpion :  using this api update the existing note label
 */    
    updateLabel(body,callback) {
        note.updateOne({"userid":body.userid},{
            $set:{"label" :body.label}
        }),(err,result)=>{
            if(err) {
                console.log("Error in finding id",err);
                return callback(err);
            }
            else {
                console.log("Successfully Updated");
                return callback(null,result);
            }
        }
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
                console.log("Successfully Run",result);
                return callback(null,result);
            }

        });
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

}

 

module.exports=new NoteModel();