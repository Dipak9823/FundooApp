var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')
var config=require("../configuration/dbconfig"); 

aws.config.update({
  accessKeyId: config.accesskey,
  secretAccessKey: config.secretkey,
  region:config.region
})

var s3 = new aws.S3({  })
 
var upload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'fundooappimg',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'APP-Image'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports=upload;