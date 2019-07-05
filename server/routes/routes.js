var express=require('express');
var router=express.Router();
var userController=require('../controller/usercontroller');
var noteController=require('../controller/notecontroller');
var middleware=require('../middleware/index');
var upload = require('../middleware/img-uploading')

router.post('/register',userController.register);
router.post('/verification/:token',middleware.checkToken,userController.verification);
router.post('/login',userController.login);
router.post('/forgotPassword',userController.forgotPassword);
router.post('/resetPassword/:token',middleware.checkToken,userController.resetPassword);
router.post('/uploadimg',upload.single('image'));
router.post('/notes',middleware.checkToken,noteController.noteAddController);
router.post('/updatenote',noteController.noteUpdateController);
router.post('/trashnote',noteController.noteTrashController);
router.post('/updatelabel',noteController.noteUpdateLableController);
router.post('/shownote',noteController.noteShowController);
module.exports=router;