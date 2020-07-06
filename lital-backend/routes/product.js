const express=require('express');
const ProductModel = require('../model/productModel.js')
const router= express.Router();
console.log(ProductModel)
router.get('/',async(req,res)=>{
    const Productdata = await ProductModel.find()
     res.send(Productdata)
    
});
router.post('/',(req,res)=>{
    const Productdata = new ProductModel (
        {
            name:req.body.name,
            color:req.body.color
        }
    );
   
    Productdata.save().then(data=>{
        res.json(data)
    })
    console.log(req.body)
});

module.exports = router;