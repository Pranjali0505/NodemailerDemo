const nodemailer=require('nodemailer')

module.exports={
    sendmail:(Email,OTP)=>{
      //create transport for sending mail
  const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'pranjaljagtap147@gmail.com',
      pass:''
    }
  });
      console.log(Email,OTP);
        const mailOptions={
            from:'pranjaljagtap147@gmail.com',
            to:Email,
            subject:'OTP',
            html:'<p>Your Password change OTP is </p> <h1>'+OTP+'</h1> <br><img src="https://autoflowtech.com/icons/logo-white.png">'
          };
        
          //use transporter object to send the email
        
          transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
              console.log(error);
            }else{
              console.log('Email sent: ' +info.response);
            }
        
          });
    }
}
 