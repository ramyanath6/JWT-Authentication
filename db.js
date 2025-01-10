import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://ramya:ramya123@cluster0.ig8l6.mongodb.net/jwtdb?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log('database connected')
    })
}
