let connection=require('../connection/mysql.connection');
const bcrypt=require('bcryptjs');
module.exports={
    updatePasswordWithOTP: (req, res) => {
        const { Email, Password, OTP } = req.body;
    
        
        connection.query(`SELECT otp FROM users WHERE Email='${Email}'`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err.message });
            } else {
                console.log("Input OTP:", OTP);
                console.log("Stored OTP:", result[0].otp);
                if (result[0].otp === OTP) {
                    let salt = bcrypt.genSaltSync(10);
                    const hashPassword = bcrypt.hashSync(Password, salt);
                    console.log("Input OTP:", OTP);
                    connection.query(`UPDATE users SET Password='${hashPassword}', otp=NULL WHERE Email='${Email}'`, (err, result) => {
                        if (err) {
                            res.send({ error: true, message: err.message });
                        } else {
                            res.send({ error: false, message: 'Password updated successfully' });
                        }
                    });
                } else {
                    
                    res.send({ error: true, message: 'Invalid OTP' });
                }
            }
        });
    },
    
    
}


