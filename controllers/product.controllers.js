
const Product = require('../models/productModel');

const getProducts =async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products);
    }catch(error){
        return res.status(400).json({message:"Invalid data"})  ;
    }
}

const getProduct =async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
     res.status(500).json({message:error.message});   
    }
}

const createProduct = async(req,res)=>{
    try{
        const product= await Product.create(req.body);
        res.status(200).json(product);
       }catch(error){
        return res.status(400).json({message:"Invalid data"})  ;
       }
}

const updateProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404).json({message:"Product not found"});
        }
        else{
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const deleteProduct=async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message:"Product not found"});
        }
        else{
            const updatedProduct = await Product.findById(id);
            res.status(200).json({message:"Product Deleted Successfully"});
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports= { getProducts , getProduct , createProduct , updateProduct , deleteProduct};
