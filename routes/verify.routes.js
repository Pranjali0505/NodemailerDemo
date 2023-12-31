const router=require('express').Router();
const verifyController=require('../controller/verify.controller');


 router.post('/verify-otp',verifyController.updatePasswordWithOTP);


module.exports =router;