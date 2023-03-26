const express=require('express')
const router=express.Router()
const User=require('../models/register')
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")

//REGISTER
router.get('/register',(req,res)=>{
    res.send("Register page")
})

router.post('/register',async(req,res)=>{
    try{

        const hashedPassword=await bcrypt.hash(req.body.password,10);
        const newUser=new User({
            name:req.body.name,
            lastname:req.body.lastname,
            email:req.body.email,
            username:req.body.username,
            password:hashedPassword,
            confirmpassword:hashedPassword

        })
        
        const user=await newUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

//Login
router.get('/login',(req,res)=>{res.send("Login here")})
router.post('/login',async(req,res)=>{
    try{
        const user=await User.findOne({
            username:req.body.username
        })
        !user && res.status(400).json("Wrong Credentials");

        const validated=await bcrypt.compare(req.body.password,user.password)
        !validated && res.status(400).json("Wrong Credentials");

        const {password,...others}=user._doc;
        
        
        // creating a jwt 
        const token=jwt.sign(
            {
                userId:user._id,
                userEmail:user.email,
            },
            process.env.SECRET_KEY,
            {expiresIn:"24h"}
        )
        res.status(200).send({
            message:"Login Successful",
            email:user.email,
            token,
        });
        

    }catch(err){
        res.status(500).json(err)
    }
})


module.exports=router