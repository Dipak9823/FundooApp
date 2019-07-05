/******************************************************************************************
 * @Purpose     : Here we have to write test script in mocha for testing backend using
 *                chai
 * @file        : test.js
 * @author      : Dipak
 * @since       : 05-07-2019
 ******************************************************************************************/

const mongoose=require('mongoose');
const server=require('../server');
const fs=require('fs');
const chai=require('chai');
const chaihttp=require('chai-http');

chai.use(chaihttp);
chai.should();

function ReadFile(){
    //console.log(__dirname);
    var object=fs.readFileSync(`${__dirname}/user.json`);
    var data=JSON.parse(object);
    console.log(data);
    return data;
}

describe('status and content',()=>{
    var data=ReadFile();
    /**
     * @Description : It will create for testing Registration Api
     */
    it('Registration Process',(done)=>{
        chai.request(server).post('/registration').send(data.registration).end((err,res)=>{
            if(err){
                console.log("Error=>",err)
                res.should.have.status(400);
            }
            else{
                console.log("Result=>")
                res.should.have.status(200);
            }    
            done();
        })
    })
}) 

describe('status and content',()=>{
    var data=ReadFile();
    /**
     * @Description : It will create For Testing Login Api
     */

    it('Log in Process',(done)=>{
        chai.request(server).post('/login').send(data.login).end((err,res)=>{
            if(err) {
                console.log("Error=>",err);
                res.should.have.status(400);
            }
            else {
                console.log("Result=>",res);
                res.should.have.status(200);
            }
            done();
        })
    })
})