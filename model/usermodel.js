var mongoose=require('mongoose');
var bcrypt=require('bcrypt');
var schema=mongoose.Schema;

var userschema=new schema({
    username: String,
    email: String,
    name:{
    firstname: String,
    lastname: String
    },
    
    phone_no: Number,
    address: {street:String, zeepcode:Number, city:String, state:String}

} );

var user=mongoose.model('myuser',userschema);

function usermodel(){

};

usermodel.prototype.register=(req,res)=>{

    user.find({email:req.email},(err,data)=>{

        if(err) {
            console.log("Error in login");
        }
        else if(data>0){
            console.log("This email is already available here");
        }
        else {
            req.password=bcrypt.hash(req.password,10);

            var newUser=new user({
                username: req.username,
                email: req.email,
                name:{
                    firstname:req.firstname,
                    lastname:req.lastname
                },
                phone_no:req.number,
                address:{
                    street:req.street,
                    zipcode: req.zipcode,
                    city:req.city,
                    state:req.state
                }
            })
        

            newUser.save((err,result)=>{
                if(err) {
                    console.log("error in save data");
                    return callbak(err);
                }
                else {
                    console.log("successfully saved");
                    return callback(result);
                }

            })
        }
    })
}
      