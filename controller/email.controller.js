const connection=require('../connection/mysql.connection');
const Semail=require('../controller/sendmail');
module.exports={
    getAllUser:(req,res)=>{
        connection.query(`select * from users `,(err,result)=>{
            if(err){
                res.send({error:true,message:err});
            }else{
                res.send({error:false,data:result});
            }
        })

    },


  
   generateOtp: (req, res) => {     
        const { Email } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000);
         connection.query(`update users set otp=${otp} where Email='${Email}' `,(err,result)=>{
            if(err){
               
                res.send({error:true,message:err});
            }else{
                Semail.sendmail(Email,otp);
                res.send({error:false,data:result});
            }
        })    
      
      }

      
}