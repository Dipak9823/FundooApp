var usermodel=require("../model/usermodel");

exports.register=(data,callback)=>{
    console.log("userservice 1",data);
    try{
    usermodel.register(data,(err,data)=>{
        console.log("userservice 2");
        if(err){
            return callback(err)
        }
        else {
            return callback(null,data);
        }
    });
}catch(err){console.log(err);
    callback.send(err)
}
}
exports.login=(data,callback)=>{
    console.log("userservice login 1");
    usermodel.login(data,(err,data)=>{
        console.log("userservid login 2");
        if(err){
            return callback(err);
        }
        else {
            return callback(null,data);
        }
    })
}