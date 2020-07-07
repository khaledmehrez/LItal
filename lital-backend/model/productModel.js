const mongoose= require('mongoose')

const ProductSchema=mongoose.Schema(
    {
        name:{type:String,},
        color:{type:String},
        reference:{type:String},
  
        quantity:{type:String} ,
        phase:{type:String},
        dimension:{type:String},
        marque:{type:String} ,
       
        type:{type:String},
        collection:{type:String},
      locallisation:{type:String},
      carton:{type:String} ,

      image: {type:String},
      commentaire: {type:String}
    }
);


module.exports=mongoose.model('product',ProductSchema)