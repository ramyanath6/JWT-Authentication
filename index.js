import express from 'express';
const app=express();
import userRouter  from './router/userRouter.js';
import { connectDB } from './db.js';

app.use(express.json());
express.urlencoded({extended:true}); //used for reading data from postman/thunder client

connectDB();

app.use('/api/user',userRouter);

app.listen(4000,()=>{
    console.log('server started at 4000 port')
})