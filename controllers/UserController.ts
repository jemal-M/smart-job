import User from "../models/User.js";
import type { Request, Response } from "express";
export const getUsers=async(res:Response,req:Request)=>{
    const users=await User.find({})
    res.json({
        success:true,
        users,
    })
};
export const getUserById=async(res:Response, req:Request)=>{
    const user=await User.findById(req.params.id)
    res.json({
        success:true,
        user,
    })
};
export const createUser=async(req:Request, res:Response)=>{
            const {name,email,password}=req.body;
            const user=await User.create({
                name,
                email,
                password,
            });
            res.json({
               success:true,
               user,
           })  
}
export const updateUser=async(res:Response, req:Request)=>{
     const {name,email,password}=req.body;

    const user=await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.json({
        success:true,
        user,
    })
};
  export const deleteUser=async(res:Response, req:Request)=>{
    const user=await User.findByIdAndDelete(req.params.id)
    res.json({
        success:true,
        message:"User deleted successfully",
    })
};

