const mongoose= require('mongoose')

const usersSchema=mongoose.Schema(
    {
        
       
            firstName:{type:String} ,
            password:{type:String},
            email:{type:String},
            role:{type:String} ,
            lastName: {type:String} 
       
    }
);


module.exports=mongoose.model('users',usersSchema)