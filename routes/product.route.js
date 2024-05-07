const express=require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controllers');
const router=express.Router();



router.get('/products',getProducts);//to list out all products api
router.get('/product/:id',getProduct);//to list out single product based on ID
router.post('/products',createProduct);//to create the product in database
router.put('/product/:id',updateProduct);//to update the product 
router.delete('/product/:id',deleteProduct);//to delete the product

module.exports=router;
 