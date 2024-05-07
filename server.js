const express=require('express');
const mongoose=require('mongoose');
// const Product =require('./models/productModel');
const productRoute= require('./routes/product.route');


const connectionString= "mongodb+srv://sujal:sj12345678@cluster0.gbfngmo.mongodb.net/";

mongoose.connect(connectionString).then(()=>{
    console.log("DB connection Successful");
}).catch((error)=>{
    console.log("Error in DB Connection");
});

const port=5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.status(200).setHeader('Content-Type','Text/Plain').send("Simple Crud Nodejs Application");
});

app.use('/api/',productRoute);

// app.post('/api/products',(req,res)=>{
//     // console.log(req.body);
//     res.status(200).json(req.body); //or res.send(req.body);
// });

//create api
// app.post('/api/products',async (req,res)=>{
//    try{
//     const product= await Product.create(req.body);
//     res.status(200).json(product);
//    }catch(error){
//     return res.status(400).json({message:"Invalid data"})  ;
//    }
// });

//read api
// app.get('/api/products',async (req,res)=>{
//     try{
//         const products=await Product.find({});
//         res.status(200).json(products);
//     }catch(error){
//         return res.status(400).json({message:"Invalid data"})  ;
//     }
// });


//read api id
// app.get('/api/product/:id',async (req,res)=>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }catch(error){
//      res.status(500).json({message:error.message});   
//     }
// });

//update api
// app.put('/api/product/:id',async (req,res)=>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             res.status(404).json({message:"Product not found"});
//         }
//         else{
//             const updatedProduct = await Product.findById(id);
//             res.status(200).json(updatedProduct);
//         }
//     }catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

//delete api
// app.delete('/api/product/:id',async (req,res)=>{
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             res.status(404).json({message:"Product not found"});
//         }
//         else{
//             const updatedProduct = await Product.findById(id);
//             res.status(200).json({message:"Product Deleted Successfully"});
//         }
//     }catch(error){
//         res.status(500).json({message:error.message});
//     }
// });


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
}); 