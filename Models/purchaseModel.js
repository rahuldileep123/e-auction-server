const mongoose = require('mongoose')

const purchaseSchema= new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    bidValue:{
        type:String,
        required:true,   
    },
    bidderId:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    }
})
const purchases=mongoose.model('purchases',purchaseSchema)
module.exports=purchases