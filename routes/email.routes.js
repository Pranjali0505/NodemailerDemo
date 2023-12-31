var express = require('express');
var router = express.Router();
const nodemailer=require('nodemailer');
const emailController=require('../controller/email.controller');

router.get('/',emailController.getAllUser);

router.post('/send-otp',emailController.generateOtp );

router.post('/send-email',(req,res)=>{
  

//create transport for sending mail

  const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'pranjaljagtap147@gmail.com',
      pass:'yjcp ekih nacv opmq'
    }
  });



 
  

 //define email message

  const mailOptions={
    from:'pranjaljagtap147@gmail.com',
    to:Email,
    subject:subject,
    text:'this is test email'
  };

  //use transporter object to send the email

  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      console.log(error);
      res.send('error sending mail');
    }else{
      console.log('Email sent: ' +info.response);
      res.send('email sent successfully');
    }

  });
});


module.exports = router;
