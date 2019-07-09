/*********************************************************************************************************************
 * @purpose : Here we write all note services
 * @File : notesevice.js
 * @author : DipakPatil
 * @version : 1.0
 * @since : 
 ***********************************************************************************************************************/


var notemodel=require('../model/notemodel');

module.exports.noteaddServices=(req,callback)=>{
    console.log("Service 1");
    notemodel.addNotes(req,(err,data)=>{
        console.log("Service 2");
        if(err) {
            return callback(err);
        }
        else{
            return callback(null,data);
        }

    });
}

module.exports.noteUpdateServices=(body,callback)=>{
    console.log("Service 1");
    notemodel.updateNotes(body,(err,data)=>{
        console.log("Service 2");
        if(err) {
            return callback(err);
        }
        else {
            return callback(null,data);
        }
    })
}



module.exports.getAllNoteService=(body,callback)=>{
    notemodel.getAllNotes(body,(err,data)=>{
        if(err) {
            return callback(err);
        }
        else {
            return callback(null,data);
        }
    })
}

module.exports.noteUpdateLabel=(body,callback)=>{
    notemodel.updateLabel(body,(err,data)=>{
        if(err){
            return callback(err);
        }
        else {
            return callback(null,data);
        }
    })
}

module.exports.noteTrashServices=(body,callback)=>{
    notemodel.trashNotes(body,(err,data)=>{
        if(err) {
            return callback(err);
        }
        else {
            return callback(null,data);
        }
    })
}

module.exports.noteDeleteServices=(body,callback)=>{
    notemodel.deleteNotes(body,(err,data)=>{
    if(err) {
        return callback(err);
    }
    else {
        return callback(null,data);
    }
})
}

