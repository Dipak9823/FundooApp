var express=require('express');
var router=express.Router();
var controller=require('../controller/usercontroller');
var middleware=require('../middleware/index');

router.post('/register',controller.register);
router.post('/verification',middleware.checkToken,controller.verification);
router.post('/login',controller.login);
router.post('/forgotPassword',controller.forgotPassword);
router.post('/resetPassword',middleware.checkToken,controller.resetPassword);
module.exports=router;