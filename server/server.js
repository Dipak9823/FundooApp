var routes=require("./routes/routes");
var mongoose=require("mongoose");
var config=require("./configuration/dbconfig");
var bodyparser=require('body-parser');
var expressValidator=require('express-validator');
const dotenv=require('dotenv');
dotenv.config();
var express=require('express');
var app=express();

/*app.get('/',function(req,res){

    res.send("Hello World");
});*/
app.use(expressValidator());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/',routes);
/*Server Establishment*/
app.listen(8000,()=>{
   console.log("Connect to the port number",);
});

mongoose.promise=global.promise;
/*Connect to the Database*/
mongoose.connect(config.url,{useNewUrlParser:true}).then(
    ()=>{   console.log("Connected to database") },
    err=>{  console.log("Error in connection",err)}
)
