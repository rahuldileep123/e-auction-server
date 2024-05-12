const products =require("../Models/productModel")

//add product
exports.addProduct=async(req,res)=>{
    console.log("inside add product");
    const {pName,description,category,startDate,endDate,baseBid}=req.body
    const userId= req.payload
    const productImage = req.file.filename
    try{
        const newProduct= new products({
            pName,description,category,startDate,endDate,baseBid,productImage,userId
        })
        await newProduct.save()
        res.status(200).json(newProduct)
    }catch(err){
        res.status(401).json(err)
    }
}


exports.getAllProducts=async(req,res)=>{
    try{
        const allProducts= await products.find()
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getSingleProduct=async(req,res)=>{
    console.log("inside get product");
    const {pid}= req.params
    try{
        const product= await products.find({_id:pid})
        console.log(product);
        res.status(200).json(product)
    }catch(err){
        res.status(401).json(err)
    }
}

//get user products

exports.getUserProducts=async(req,res)=>{
    const userId =req.payload
    try{
      const userProducts =await products.find({userId})
      res.status(200).json(userProducts)
    }catch(err){
      res.status(401).json(err)
    }
  }


  exports.deleteProduct=async(req,res)=>{
    const {pid}=req.params
    try{
        const product= await products.findByIdAndDelete({_id:pid})
        res.status(200).json(product)
    }catch(err){
        res.status(401).json(err)
    }
  }