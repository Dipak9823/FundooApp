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
var upload = require('../middleware/img-uploading')

router.post('/register',userController.register);
router.post('/verification/:token',middleware.checkToken,userController.verification);
router.post('/login',userController.login);
router.post('/forgotPassword',userController.forgotPassword);
router.post('/resetPassword/:token',middleware.checkToken,userController.resetPassword);
router.post('/uploadimg',upload.single('image'));
router.post('/notes',middleware.checkToken,noteController.noteAddController);
router.put('/updatenote',noteController.noteUpdateController);
router.get('/trashnotes',middleware.checkToken,noteController.noteTrashController);
router.put('/updatelabel',noteController.noteUpdateLableController);
router.get('/getNotes',middleware.checkToken,noteController.getAllNoteController);
router.delete('/deletenotes',noteController.noteDeleteController);
module.exports=router;