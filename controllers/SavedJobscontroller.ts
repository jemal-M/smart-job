import SavedJob from "../models/SavedJob.ts";
import type { Request, Response } from "express";
import mongoose from "mongoose";
export const getSavedJobs = async (req: Request, res: Response) => {
  try {
    const savedJobs = await SavedJob.find({});
    res.json({
      success: true,
      savedJobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createJob=async(req:Request,res:Response)=>{
     const savedJob = new SavedJob(req.body);
    await savedJob.save();
    res.json({
      success: true,
      savedJob,
    });

};
export const getSavedJobById = async (req: Request, res: Response) => {
  try {
    const savedJob = await SavedJob.findById(req.params.id);
    res.json({
      success: true,
      savedJob,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteSavedJob = async (req: Request, res: Response) => {
  try {
    const savedJob = await SavedJob.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Saved job deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateSavedJob = async (req: Request, res: Response) => {
  try {
    const savedJob = await SavedJob.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      success: true,
      savedJob,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getSavedJobsByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "userId is required",
      });
    }
    const savedJobs = await SavedJob.find({ userId: new mongoose.Types.ObjectId(userId) });
    res.json({
      success: true,
      savedJobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getSavedJobsByJobId = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.jobId;
    if (!jobId || typeof jobId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "jobId is required",
      });
    }
    const savedJobs = await SavedJob.find({ jobId: new mongoose.Types.ObjectId(jobId) });
    res.json({
      success: true,
      savedJobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
