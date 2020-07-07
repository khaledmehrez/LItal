const ProductModel = require('../model/productModel')
exports.getProducts =('/getProduct',async(req,res)=>{
    const Productdata = await ProductModel.find()
     res.send(Productdata)
    
});

exports.postProducts =('/postProduct',(req,res)=>{
   new ProductModel (
        {
        name:req.body.name, 
            
            color:req.body.color,
            quantity:req.body ,
            phase:req.body.phase ,
            dimension:req.body.dimension,
            marque:req.body.marque ,
        
            type:req.body.type ,
          
            collection:req.body.collection,
          locallisation:req.body.locallisation,
          carton:req.body.carton ,
      
          image: req.body.image,
          commentaire: req.body.commentaire
        }
    );
   
    Productdata.save().then(data=>{
        res.json(data)
    })
    console.log(req.body)
});