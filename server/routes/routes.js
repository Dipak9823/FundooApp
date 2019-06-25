var express=require('express');
var router=express.Router();
var controller=require('../controller/usercontroller');
var middleware=require('../middleware/index');
var upload = require('../middleware/img-uploading')

router.post('/register',controller.register);
router.post('/verification/:token',middleware.checkToken,controller.verification);
router.post('/login',controller.login);
router.post('/forgotPassword',controller.forgotPassword);
router.post('/resetPassword/:token',middleware.checkToken,controller.resetPassword);
router.post('/uploadimg',upload.single('image'));
module.exports=router;