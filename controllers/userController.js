const users=require("../Models/userModel")
const jwt = require('jsonwebtoken')

//register

exports.register=async(req,res)=>{
    console.log("insode register");
    const {username,email,password}=req.body
    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(406).json("user already exists")
        }else{
            const newUser= new users({
                username,email,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
}

exports.login=async(req,res)=>{
    console.log("inside login");
    const {email,password}=req.body
    try{
      const existingUser= await users.findOne({email,password})
      if(existingUser){
        const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
        res.status(200).json({
            existingUser,
            token
        })
      }else{
        res.status(404).json("Invalid Email/Password")
      }
     }catch(err){
        res.status(401).json(err)
        console.log(err);
    }
}