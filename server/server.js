/*********************************************************************************************************************
 *  @Purpose : Here we execute our all connections 
 *  @File :  server.js
 *  @Author : DipakPatil
 *  @Version : 1.0
 *  @Since : 
 ***********************************************************************************************************************/
var routes=require("./routes/routes");
var mongoose=require("mongoose");
var cors=require("cors");
var config=require("./configuration/dbconfig");
var bodyparser=require('body-parser');
var expressValidator=require('express-validator');
redis=require("redis");

const dotenv=require('dotenv');
dotenv.config();
var express=require('express');
var app=express();
app.use(cors());
/* Here, resdis createclient function is declared */
client=redis.createClient();
/* Connection of redis cache */
client.on('connect', function(){
    console.log("Connected to redis");
} )
/* use expressvalidator for validating data coming from request*/
app.use(expressValidator());
/* use body-parser for to take parsing our json data*/
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
/* Here call routes function */
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

module.exports=app;