import express from 'express';
const app=express();
import userRouter  from './router/userRouter.js';
import { connectDB } from './db.js';
import mongoose from 'mongoose';

app.use(express.json());
express.urlencoded({extended:true}); //used for reading data from postman/thunder client

connectDB();

app.use('/api/user',userRouter);

const loginSchema=mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
}) 
let loginModel=mongoose.model('LoginCollection',loginSchema);

app.listen(5000,()=>{
    console.log('server started at 5000 port')
})