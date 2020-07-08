const express = require('express');
const ProductModel = require('../model/productModel.js')
const { getProducts, postProducts,deleteProducts,patchProducts} = require('../controllers/contProducts')
const router = express.Router();


router.get('/getProduct', getProducts)

router.post('/postProduct', postProducts)

router.delete('/deleteProduct/:postId',deleteProducts)
router.patch('/patchProduct/:postId',patchProducts)




module.exports = router;