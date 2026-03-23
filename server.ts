import express from "express";
import type {Request,Response} from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db";
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.get("/health",(req:Request,res:Response)=>{
    res.send("hello world");
});
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});