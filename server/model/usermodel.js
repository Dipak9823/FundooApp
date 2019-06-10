var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
//var schema=mongoose.Schema;

var userschema = new mongoose.Schema({
    name: {
        firstname: String,
        lastname: String
    },
    username: String,
    email: String,
    password: String,
    phone_no: Number,
    address: { street: String, zeepcode: Number, city: String, state: String }

});

var user = mongoose.model('myuser', userschema);
function hash(password) {
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

class usermodel {
    register(body, callback) {
        console.log("usermodel 1")
        user.findOne({ "email": body.email }, (err, data) => {
            console.log("usermodel 2")
            if (err) {
                console.log("Error in login");
                return callback(err);
            }
            else if(data>0){
                 console.log("This email is already available here");
                 return callback(null,response)
             }
            else {
                

                var newUser = new user({
                    name: {
                        firstname: body.firstname,
                        lastname: body.lastname
                    },

                    username: body.username,
                    email: body.email,
                    password: hash(body.password),
                    phone_no: body.number,
                    address: {
                        street: body.street,
                        zipcode: body.zipcode,
                        city: body.city,
                        state: body.state
                    }
                })


                newUser.save((err, result) => {
                    if (err) {
                        console.log("error in save data");
                        return callback(err);
                    }
                    else {
                        console.log("successfully saved");
                        return callback(null, result);
                    }

                })
            }
        })

    }
};

//usermodel.prototype.register=(body,callback)=>{

// console.log("usermodel 1")
// user.findOne({"email":body.email},(err,data)=>{
// console.log("usermodel 2")
//     if(err) {
//         console.log("Error in login");
//         return callback(err);
//     }
//     // else if(data>0){
//     //     console.log("This email is already available here");
//     //     return callback(null,response)
//     // }
//     else {
//         body.password=bcrypt.hash(body.password,10);

//         var newUser=new user({
//             name:{
//                 firstname:body.firstname,
//                 lastname:body.lastname
//             },

//             username: body.username,
//             email: body.email,
//             password: body.password,
//             phone_no:body.number,
//             address:{
//                 street:body.street,
//                 zipcode: body.zipcode,
//                 city:body.city,
//                 state:body.state
//             }
//         })


//         newUser.save((err,result)=>{
//             if(err) {
//                 console.log("error in save data");
//                 return callback(err);
//             }
//             else {
//                 console.log("successfully saved");
//                 return callback(null,result);
//             }

//         })
//     }
// })

//}

module.exports = new usermodel();
