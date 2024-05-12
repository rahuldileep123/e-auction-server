const purchases = require("../Models/purchaseModel")
const users =require("../Models/userModel")
exports.bidding=async(req,res)=>{
    const bidderId= req.payload
    const {productId,bidValue,productName,bidId}=req.body
console.log("inside place bid");
    try{
        const existingBid = await purchases.findOne({productId})
        if(existingBid){
            if(bidValue>existingBid.bidValue){
                const updatedBid= await purchases.findByIdAndUpdate({_id:bidId},{
                    productId,bidValue,bidderId,productName
                },{new:true})
                await updatedBid.save()
                res.status(200).json(updatedBid)

            }else{
                res.status(401).json(`Place above Highest bid:${existingBid.bidValue}`)
            }
        }else{
            try{
                const newBid= new purchases({
                    productId,bidValue,bidderId,productName
                })
                await newBid.save()
                res.status(200).json(newBid)
            }catch(err){
                res.status(406).json(err)
                console.log(err);
            }
         
        }
    }catch(err){
        res.status(401).json(err)
    }
   
}

exports.getBid=async(req,res)=>{
    console.log("inside get bid");
    const {pid}= req.params
    try{
        const existingBid = await  purchases.findOne({productId:pid})
        if(existingBid){
            res.status(200).json(existingBid)
        }
            
    }catch(err){
        res.status(401).json(err)
}}

exports.getPurchase=async(req,res)=>{
    const bidderId= req.payload
    try{
        const existingBid = await  purchases.find({bidderId})
        if(existingBid){
            res.status(200).json(existingBid)
        }
            
    }catch(err){
        res.status(401).json(err)
}
}

exports.getWinner=async(req,res)=>{
    console.log("inside winner");
    const {bid}= req.params
    try{
        const winner= await users.findOne({_id:bid})
        console.log(winner);
        if(winner){
            res.status(200).json(`Winner: ${winner.username}`)
        }
        
    }catch(err){
        res.status(401).json(err)
    }


}