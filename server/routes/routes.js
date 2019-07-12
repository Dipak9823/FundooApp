/*********************************************************************************************************************
 * @purpose : Here write all routes
 * @File : routes.js
 * @author : DipakPatil
 * @version : 1.0
 * @since :
 ***********************************************************************************************************************/


var express=require('express');
var router=express.Router();
var userController=require('../controller/usercontroller');
var noteController=require('../controller/notecontroller');
var middleware=require('../middleware/index');
//var upload = require('../middleware/img-uploading')

router.post('/register',userController.register);
router.post('/verification/:token',middleware.checkToken,userController.verification);
router.post('/login',userController.login);
router.post('/forgotPassword',userController.forgotPassword);
router.post('/resetPassword/:token',middleware.checkToken,userController.resetPassword);
router.post('/uploadimg',middleware.checkToken,userController.uploadFile);
router.post('/notes',middleware.checkToken,noteController.noteAddController);
router.put('/updatenote',noteController.noteUpdateController);
router.put('/updatelabel',noteController.noteUpdateLableController);
router.get('/getNotes',middleware.checkToken,noteController.getAllNoteController);
router.get('/archive',middleware.checkToken,noteController.noteArchiveController);
router.put('/archive',middleware.checkToken,noteController.noteUpdateArchiveController)
module.exports=router;