const express = require('express');
const ProductModel = require('../model/productModel.js')
const { getProducts, postProducts } = require('../controllers/contProducts')
const router = express.Router();
console.log(ProductModel)

router.get('/getProduct', getProducts)

router.post('/postProduct', postProducts)

module.exports = router;