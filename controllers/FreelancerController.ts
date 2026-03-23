import Freelancer from "../models/Freelancer.js";
import type { Request, Response } from "express";
export const getFreelancers = async (req: Request, res: Response) => {
  try {
    const freelancers = await Freelancer.find({});
    res.json({
      success: true,
      freelancers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getFreelancerById = async (req: Request, res: Response) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    res.json({
      success: true,
      freelancer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createFreelancer = async (req: Request, res: Response) => {
  try {
    // Ensure user is authenticated
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not authenticated",
      });
    }

    const { bio, hourlyRate,skills,experience,portfolio,location,title,rating } = req.body;
    const freelancer = await Freelancer.create({
      bio,
      hourlyRate,
      experience,
      skills,
      portfolio,
      location,
      title,
      rating,
      userId: req.user._id,
      isAvailable: true,
      portfolioLink: req.body.portfolioLink || "",
      cvUrl: req.body.cvUrl || "",
      totalReviews: 0,
    });
    res.json({
      success: true,
      freelancer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateFreelancer = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not authenticated",
      });
    }
    const { id } = req.params;
    const { bio, hourlyRate,skills,experience,portfolio,location,title,rating } = req.body;
    const freelancer = await Freelancer.findByIdAndUpdate(
      id,
      {
        bio,
        hourlyRate,
        experience,
        skills,
        portfolio,
        location,
        title,
        rating,
        isAvailable: true,
        portfolioLink: req.body.portfolioLink || "",
        cvUrl: req.body.cvUrl || "",
      },
      {
        new: true,
      }
    );
    res.json({
      success: true,
      freelancer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteFreelancer = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not authenticated",
      });
    }
    const { id } = req.params;
    await Freelancer.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Freelancer deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const applyToJob = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not authenticated",
      });
    }
    const { jobId } = req.params;
    const freelancer = await Freelancer.findOne({ userId: req.user._id });
    if (!freelancer) {
      return res.status(404).json({
        success: false,
        message: "Freelancer not found",
      });
    }
    // Add job application logic here
    res.json({
      success: true,
      message: "Applied to job successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const searchFreelancers = async (req: Request, res: Response) => {
  try {
    const { skills, location, minHourlyRate, maxHourlyRate } = req.query;
    let query: any = {};
    if (skills) {
      query.skills = { $in: (skills as string).split(",") };
    }
    if (location) {
      query.location = { $regex: location, $options: "i" };
    }
    if (minHourlyRate || maxHourlyRate) {
      query.hourlyRate = {};
      if (minHourlyRate) {
        query.hourlyRate.$gte = Number(minHourlyRate);
      }
      if (maxHourlyRate) {
        query.hourlyRate.$lte = Number(maxHourlyRate);
      }
    }
    const freelancers = await Freelancer.find(query);
    res.json({
      success: true,
      freelancers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getFreelancersByUserId = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not authenticated",
      });
    }
    const freelancers = await Freelancer.find({ userId: req.user._id });
    res.json({
      success: true,
      freelancers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};