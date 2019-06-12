var jwt=require('jsonwebtoken');
var config=require('../configuration/dbconfig')
module.exports={

    generateToken(payload){
        var token=jwt.sign({payload},config.secret,{expiresIn: '1d'});

        const obj={
            success: true,
            message: 'token Succssfully Created',
            token: token
        }
        return obj;
    }
}