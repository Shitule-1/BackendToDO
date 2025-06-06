import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
import taskRoute from './Routes/taskRoute.js'

const app=express()
app.use(express.json())
app.use('/',taskRoute)
console.log("testing env variable" ,process.env.MONGO)  // for checking env variable accesiible or not 
//connnection of mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Error connecting to DB:");
    }
};

connectDB()

app.listen(process.env.PORT,()=>{
     console.log(`server is runing on port no ${process.env.PORT}`)
})
app.get('/',()=>{
    console.log("for testing purpose")
})