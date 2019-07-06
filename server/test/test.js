/******************************************************************************************
 * @Purpose     : Here we have to write test script in mocha for testing backend using
 *                chai
 * @file        : test.js
 * @author      : Dipak Patil
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
    //console.log(data);
    return data;
}

function ReadFileNegative() {
    var object=fs.readFileSync(`${__dirname}/userData.json`);
    var data=JSON.parse(object);
    //console.log(data);
    return data;
}
/**
 * @Description : It will create for testing Registration Api
 */
describe('status and content',()=>{
    var data=ReadFile();
    
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

/**
 * @Description : It will create For Testing Login Api
*/

describe('status and content',()=>{
    var data=ReadFile();
    
    it('Log in Process',(done)=>{
        chai.request(server).post('/login').send(data.login).end((err,res)=>{
            if(err) {
                console.log("Error=>",err);
                res.should.have.status(400);
            }
            else {
                console.log("Result=>");
                res.should.have.status(200);
                
            }
            done();
        })
    })
})

describe('status and content',()=>{
    var data=ReadFileNegative();
    
    it('Log in Process',(done)=>{
        chai.request(server).post('/login').send(data.login).end((err,res)=>{
            if(err) {
                console.log("Error=>",err);
                res.should.have.status(200);
            }
            else {
                console.log("Result=>");
                res.should.have.status(400);
                
            }
            done();
        })
    })
})

/**
 * @Description : It will Crete For testing ForgetPassword Api
 */

// describe('Status and Content',()=>{
//     var data=ReadFile();
//     it('Forget Password Process',(done)=>{
//         chai.request(server).post('/forgetpassword').send(data.forgetpassword).end((err,res)=>{
//             if(err) {
//                 console.log("Error =>",err);
//                 res.should.have.status(400);
//             }
//             else {
//                 console.log("Successful ");
//                 res.should.have.status(200);
//             }
//         })
//     })
// }
// )
/**
 * @Description : It will create for ResetPassword Api
 */

    // describe('Status and Content',()=>{
    //  var data=ReadFile();
    //  it('Reset Password Process',(done)=>{
    //      chai.request(server).post('/resetpassword/:token').send(data.resetpassword).end((err,res)=>{
    //         if(err) {
    //             console.log("Error=>",err);
    //             res.should.have.status(400);
    //         }
    //         else {

    //             console.log("Successfully Done");
    //             res.should.have.status(200);
    //         }
    //      })
    //  })
    // })

/**
 * @Description : It will create For Testing Create note Api
 */

    describe('status and content',()=>{
        var data=ReadFile();
        it('Create Note Process',(done)=>{
            chai.request(server).post('/notes').send(data.notes).end((err,res)=>{
                if(err){
                    console.log("Error=>",err);
                    res.should.have.status(400);
                }
                else{
                    console.log("Successfully Done ");
                    res.should.have.status(200);
                }
                done();
            })
        })

    })

    // describe('status and content',()=>{
    //     var data=ReadFileNegative();
    //     it('Create Note Process',(done)=>{
    //         chai.request(server).post('/notes').send(data.notes).end((err,res)=>{
    //             if(err){
    //                 console.log("Error=>",err);
    //                 res.should.have.status(400);
    //             }
    //             else{
    //                 console.log("Successfully Done ");
    //                 res.should.have.status(200);
    //             }
    //             done();
    //         })
    //     })

    // })

/**
 * @Description : It will create For Testing DeleteNote Api 
 */
    describe('status and content',()=>{
        var data=ReadFile();
        it('Delete note Process',(done)=>{
            chai.request(server).post('/deletenotes').send(data.deletenotes).end((err,res)=>{
                if(err) {
                    console.log("Error=>",err);
                    res.should.have.status(400);
                }
                else {
                    console.log("Successfully Done");
                    res.should.have.status(200);
                }
                done();
            })
        })
    })

    describe('status and content',()=>{
        var data=ReadFileNegative();
        it('Delete note Process',(done)=>{
            chai.request(server).post('/deletenotes').send(data.deletenotes).end((err,res)=>{
                if(err) {
                    console.log("Error=>",err);
                    res.should.have.status(200);
                }
                else {
                    console.log("Successfully Done");
                    res.should.have.status(400);
                }
                done();
            })
        })
    })

/**
 * @Description : It will create for testing UpdateNote Api
 */

    describe('status and content',()=>{
        var data=ReadFile();
        it('Update note process',(done)=>{
          chai.request(server).post('/updatenote').send(data.updatenotes).end((err,res)=>{
              if(err) {
                  console.log("Error=>",err);
                  res.should.have.status(400);
              }
              else {
                  console.log("Successfully Done");
                  res.should.have.status(200);  
              }
              done();
          })
        })
    })

    describe('status and content',()=>{
        var data=ReadFileNegative();
        it('Update note process',(done)=>{
          chai.request(server).post('/updatenote').send(data.updatenotes).end((err,res)=>{
              if(err) {
                  console.log("Error=>",err);
                  res.should.have.status(200);
              }
              else {
                  console.log("Successfully Done");
                  res.should.have.status(400);  
              }
              done();
          })
        })
    })

/**
 * @Description : It Will create For Update Label Api
 */
    describe('status and content', ()=>{
        var data=ReadFile();
        it('Update Label',(done)=>{
            chai.request(server).post('/updatelabel').send(data.updatelabel).end((err,res)=>{
                if(err) {
                    console.log("Error=>",err);
                    res.should.have.status(400);
                }
                else {
                    console.log("Successfully Done");
                    res.should.have.status(200);
                }
                done();
            })
        })
    })

    describe('status and content', ()=>{
        var data=ReadFileNegative();
        it('Update Label',(done)=>{
            chai.request(server).post('/updatelabel').send(data.updatelabel).end((err,res)=>{
                if(err) {
                    console.log("Error=>",err);
                    res.should.have.status(200);
                }
                else {
                    console.log("Successfully Done");
                    res.should.have.status(400);
                }
                done();
            })
        })
    })

/**
 * @Description : It will create for Trash Api
 */
    describe('status and content',()=>{
        var data=ReadFile();
        it('Trash notes',(done)=>{
            chai.request(server).post('/trashnotes').send(data.trash).end((err,res)=>{
                if(err) {
                    console.log("Error=>",err);
                    res.should.have.status(400);
                }
                else {
                    console.log("Successfully Done");
                    res.should.have.status(200);
                }
                done();
            })
        })
    })

    describe('status and content',()=>{
        var data=ReadFileNegative();
        it('Trash notes',(done)=>{
            chai.request(server).post('/trashnotes').send(data.trash).end((err,res)=>{
                if(err) {
                    console.log("Error=>",err);
                    res.should.have.status(200);
                }
                else {
                    console.log("Successfully Done");
                    res.should.have.status(400);
                }
                done();
            })
        })
    })


/**
 * @Description : It will create for ShowLabel Api
 */
    // describe('status and content',()=>{
        
    // })