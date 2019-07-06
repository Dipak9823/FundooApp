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

   trash:{
       type:Boolean
       
    },

   reminder:{
        type:String
   }    

});

var note=mongoose.model('addnotes',noteSchema);

class NoteModel{

    addNotes(req,callback){
        console.log("Note model addNotes",req.body);
                    var newnotes=new note({
                    userid: req.decoded._id,
                    label: req.body.label,
                    description:req.body.description,
                    color: req.body.color,
                    trash: req.body.trash,
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

    trashNotes(body,callback) {
        note.updateOne({"userid":body._id},{
            $set:{"trash": body.trash}
        },(err,result)=>{
            if(err) {
                console.log("Error in finding Id",err);
                return callback(err);
            }
            else {
                console.log("Delete Notes Successfully",result);
                return callback(null,result);
            }
        })
    }

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

    getAllNotes(body,callback) {
        note.find({'userid': body.userid},(err,result)=> {
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

    deleteNotes(body,callback) {
        note.remove({'_id':body.noteid},(err,result)=>{
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