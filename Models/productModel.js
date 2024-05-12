const mongoose =require("mongoose")

const productSchema = new mongoose.Schema({
    pName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    baseBid:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
})
const products = mongoose.model("products",productSchema)
module.exports=products