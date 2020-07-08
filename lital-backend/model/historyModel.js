const mongoose= require('mongoose')

const HistorySchema=mongoose.Schema(
    {
        name:{type:String,},
        role:{type:String},
        nameAction:{type:String},
  
        date:{type:String} ,
        nameProduct:{type:String}
       
    }
);


module.exports=mongoose.model('history',HistorySchema)