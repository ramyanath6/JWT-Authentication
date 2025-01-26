import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB=async()=>{
    await mongoose.connect(process.env.MONGODBCONNECT)
    .then(()=>{
        console.log('database connected')
    })
}
