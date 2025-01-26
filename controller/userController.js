import express from "express";
import signupModel from "../models/signupmodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const loginFunc= async (req,res)=>{
    const {email,password}=req.body;
    try{
        const exists = await signupModel.findOne({ email });
        if(!exists){
            console.log('user doesnt exits, please register first');
            res.json({success:false,message:"User Doesnt Exists,please register first"});
        }
        else{
            const isMatch= await bcrypt.compare(password,exists.password);
            
            if(!isMatch){
                return  res.json({success:false,message:"Invalid password"})
             }
            else{
                res.json({success:true,message:"successfully login"})
            }
           }
        }
        catch(e){
            console.log('error')
            res.json({success:false,message:"error in logging"})
        }
}
const signupFunc=async(req,res)=>{
    const{name,email,password,gender}=req.body
    try{
        const exists=await signupModel.findOne({email})
        if(exists){
            res.json({success:false,message:"user already exists"})
        }
        else{
            const var1= await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,var1);
            const newUser=new signupModel({
                name:name,
                email:email,
                password:hashedPassword,
                gender:gender
            })
            const user=await newUser.save();
            const id=user._id;
            console.log(process.env.JWT_SECRET)
            //generating token, initially secretkey was visible later place in .env
            const token=jwt.sign({id},process.env.JWT_SECRET);
            console.log(token);
            res.json({success:true,message:"user successfully registered",token})
        }
    }
    catch(error){
        console.log("error");
        res.json({success:false,message:"error"})
    }
}
 
export {loginFunc, signupFunc}