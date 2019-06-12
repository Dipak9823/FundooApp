const nodemailer=require('nodemailer');

exports.sendmail=(url,email)=>{
    const transporter=nodemailer.createTransport({
        service: 'gmail',
        
        auth:{
            user:process.env.user,
            pass:process.env.pass
        }
    });

    const mailOptions={
        from:process.env.user,
        to:email,
        subject: 'registration confirmation',
        text:'Your confirmation link is :\n\n'+url
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        console.log(mailOptions);
        if(error) {
            console.log(error);
            console.log("Invalid username or password");
            console.log("Error in sending mail");
        }
        else {
            console.log(info);
            console.log("mail send to the user");
        }
    });

}