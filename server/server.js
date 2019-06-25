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
/*app.get('/',function(req,res){

    res.send("Hello World");
});*/

client=redis.createClient();
client.on('connect', function(){
    console.log("Connected to redis");
} )

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
