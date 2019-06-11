const nodemailer=require('nodemailer');

exports.sendmail=(url,email)=>{
    const transporter=nodemailer.createTransport({
        host: 'patildipak363@gmail.com',
        host: 8000,
        secure:true,
        auth:{
            user:"patildipak363@gmail.com",
            pass:""
        }
    });

    const mailOptions={
        from:'"Dipak Patil" <patildipak363@gmail.com>',
        to:email,
        subject: 'registration confirmation',
        text:'Your confirmation link is :\n\n'+url
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error) {
            console.log(error)
            console.log("Error in sending mail");
        }
        else {
            console.log(info);
            console.log("mail send to the user");
        }
    });

}