const ProductModel = require('../model/productModel')


exports.getProducts = (async (req, res) => {
    const Productdata = await ProductModel.find()
    res.send(Productdata)

});

exports.postProducts = ((req, res) => {
    const Productdata = new ProductModel(
        {
            name: req.body.name,

            color: req.body.color,
            quantitys: req.body.quantitys,
            phase: req.body.phase,
            dimension: req.body.dimension,
            marque: req.body.marque,

            type: req.body.type,

            collections: req.body.collections,
            locallisation: req.body.locallisation,
            carton: req.body.carton,

            image: req.body.image,
            commentaire: req.body.commentaire
        }
    );

    Productdata.save().then(data => {
        res.json(data)
    })

});

exports.deleteProducts = (async (req, res) => {
    const Productdata = await ProductModel.findOneAndDelete({_id:req.params.postId})
    res.send(JSON.stringify(Productdata))
});



exports.patchProducts=(async (req,res)=>{
    const Productdata = await ProductModel.findOneAndUpdate({_id:req.params.postId}, {$set: { name: req.body.name}})

    res.send(JSON.stringify(Productdata))
});
