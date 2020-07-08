const usersModel = require('../model/usersModel')

exports.getUsers =(async(req,res)=>{
    const usersdata = await usersModel.find()
   
     res.send(usersdata)
    
});

exports.postUsers =((req,res)=>{
    const usersdata = new usersModel (
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

exports.deleteUsers=(async (req,res)=>{
    const Userdata = await usersModel.findOneAndDelete(req.params.id)
    
    res.send(JSON.stringify(Userdata))
});
exports.patchUsers=(async (req,res)=>{
    const Userdata = await usersModel.findOneAndUpdate(req.params.id,{firstName:req.body.firstName})
    
    res.send(JSON.stringify(Userdata))
});

