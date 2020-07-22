const usersModel = require('../model/usersModel')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');
exports.getUsers =(async(req,res)=>{
    const usersdata = await usersModel.find()
   
     res.send(usersdata)
    
});

exports.postUsers =( (req,res)=>{

    bcrypt.genSalt( (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            
            const usersdata = new usersModel (
                {
                    firstName:req.body.firstName ,
                    password:hash,
                    email:req.body.email,
                    role:req.body.role ,
                    lastName: req.body.lastName
        
                }
            );
           
            usersdata.save().then(data=>{
                res.json(data)
            })
            
        });
    });
   
   
    




});

exports.deleteUsers=(async (req,res)=>{
    
    const Userdata = await usersModel.findOneAndDelete({_id:req.params.postId})
    
    res.send(JSON.stringify(Userdata))
});
exports.patchUsers=(async (req,res)=>{
    
    const Userdata = await usersModel.findOneAndUpdate({_id:req.params.postId}, {$set:{firstName:req.body.firstName}})
    
    res.send(JSON.stringify(Userdata))
});

exports.postLogin= (async (req,res)=>{
  
   
    
        const usersdata = await usersModel.find({email:req.body.email})
    
        if(usersdata[0]===undefined){
            return res.send('user is not registred')
        }
        else{
        const userpassword = await bcrypt.compare(req.body.password, usersdata[0].password)
    if(userpassword){
        const tokenData={data:usersdata[0]}
        const token =jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET)
        
    
        res.cookie('token',token).send({token:token})    }
    else{
        res.send("password is incorrect")
    
      }
    }
      

  
 

})

