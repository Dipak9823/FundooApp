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
/*Post the Data into notes */
router.post('/notes',middleware.checkToken,noteController.noteAddController);
/*Get Data Into Notes */
router.get('/notes',middleware.checkToken,noteController.getAllNoteController);
/*Update data of Notes */
router.put('/notes',noteController.noteUpdateController);


router.put('/updatelabel',noteController.noteUpdateLableController);
/*Get Archive Notes */
router.get('/archive',middleware.checkToken,noteController.noteArchiveController);
/*Update Archive notes*/
router.put('/archive',middleware.checkToken,noteController.noteUpdateArchiveController)
/*Get Trash Notes */
router.get('/trash',middleware.checkToken,noteController.noteTrashController)
/* Update Trash Notes */
router.put('/trash',middleware.checkToken,noteController.noteUpdateTrashController)
module.exports=router;