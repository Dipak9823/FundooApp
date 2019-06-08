var express=require('express');
var router=express.Router();
var controller=require('');

router.post('/login',controller.login());
router.post('/register',controller.register());