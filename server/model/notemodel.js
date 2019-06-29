var mongoose=require("mongoose");

var noteSchema=new mongoose.Schema({

   userid:{
       type: Number
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
       type:Boolean,
       default:false
    },

   reminder:{
        type:String
   }    

});

var note=mongoose.model('addnotes',noteSchema);

class NoteModel{

    addNotes(body,callback){
        console.log("User model addNotes",body);
                    var newnotes=new note({
                    userid: body.userid,
                    label: body.label,
                    description:body.description,
                    color: body.color,
                    trash: body.trash,
                    reminder: body.reminder
                })

            newnotes.save((err,result)=>
            {
                if(err){
                    console.log("Error in saving data");
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
        note.update({"userid":body.userid},{
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
        note.update({"userid":body._id},{
            $set:{"trash": body.trash}
        },(err,result)=>{
            if(err) {
                console.log("Error in finding Id",err);
                callback(err);
            }
            else {
                console.log("Delete Notes Successfully",result);
                callback(null,result);
            }
        })
    }

    updateLabel(body,callback) {
        note.update({"userid":body.userid},{
            $set:{"label" :body.label}
        }),(err,result)=>{
            if(err) {
                console.log("Error in finding id",err);
                callback(err);
            }
            else {
                console.log("Successfully Updated");
                callback(null,result);
            }
        }
    }

    showNotes(body,callback) {
        note.find({ },(err,result)=> {
            if(err) {
                console.log("Userid does not find in our database",err);
                callback(err);
            }
            else{
                console.log("Successfully Run");
                callback(null,result);
            }

        });
    }

}

module.exports=new NoteModel();