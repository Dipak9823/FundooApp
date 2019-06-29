var notemodel=require('../model/notemodel');

module.exports.noteaddServices=(body,callback)=>{
    console.log("Service 1");
    notemodel.addNotes(body,(err,data)=>{
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

module.exports.noteShowServices=(body,callback)=>{
    notemodel.showNotes(body,(err,data)=>{
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