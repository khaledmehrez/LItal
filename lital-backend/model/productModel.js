const mongoose= require('mongoose')

const ProductSchema=mongoose.Schema(
    {
        name:{type:String},
        color:{type:String}
    }
);


module.exports=mongoose.model('product',ProductSchema)