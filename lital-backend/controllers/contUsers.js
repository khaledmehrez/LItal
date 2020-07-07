const usersModel = require('../model/usersModel')

exports.getUsers =('/',async(req,res)=>{
    const usersdata = await usersModel.find()
     res.send(usersdata)
    
});

exports.postUsers =('/',(req,res)=>{
    const usersdata = new usersdata (
        {
            firstName:req.body.firstName ,
            password:req.body.password,
            email:req.body.email,
            role:req.body.role ,
            lastName: req.body.lastName

        }
    );
   
    usersdata.save().then(data=>{
        res.json(data)
    })
    console.log(req.body)
});