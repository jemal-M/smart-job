import Job from "../models/Job.js";
import type { Request, Response } from "express";
export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find({});
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json({
      success: true,
      job,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.create(req.body);
    res.json({
      success: true,
      job,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      success: true,
      job,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const searchJobs = async (req: Request, res: Response) => {
  try {
    const { title, skills, minBudget, maxBudget } = req.query;
    let query: any = {};
    if (title && typeof title === "string") {
      query.title = { $regex: title, $options: "i" };
    }
    if (skills && typeof skills === "string") {
      query.skills = { $in: skills.split(",") };
    }
    const minBudgetNum = minBudget !== undefined ? Number(minBudget) : undefined;
    const maxBudgetNum = maxBudget !== undefined ? Number(maxBudget) : undefined;
    if (minBudgetNum !== undefined && maxBudgetNum !== undefined) {
      query.budget = { $gte: minBudgetNum, $lte: maxBudgetNum };
    } else if (minBudgetNum !== undefined) {
      query.budget = { $gte: minBudgetNum };
    } else if (maxBudgetNum !== undefined) {
      query.budget = { $lte: maxBudgetNum };
    }
    const jobs = await Job.find(query);
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const filterJobs = async (req: Request, res: Response) => {
  try {
    const { location, contractType, experienceLevel } = req.query;
    let query: any = {};
    if (location && typeof location === "string") {
      query.location = { $regex: location, $options: "i" };
    }
    if (contractType) {
      query.contractType = contractType;
    }
    if (experienceLevel) {
      query.experienceLevel = experienceLevel;
    }
    const jobs = await Job.find(query);
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getJobsByEmployer = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find({ employerId: req.params.employerId });
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getRecommendedJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.aggregate([
      {
        $lookup: {
          from: "freelancers",
          localField: "employerId",
          foreignField: "userId",
          as: "employer",
        },
      },
      {
        $unwind: "$employer",
      },
      {
        $sample: { size: 5 },
      },
    ]);
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getJobsBySkills = async (req: Request, res: Response) => {
  try {
    const { skills } = req.params;
    if (!skills) {
      return res.status(400).json({
        success: false,
        message: "Skills parameter is required",
      });
    }
    const skillsParam = skills;
    // Handle string | string[] type from req.params
    const skillsArray = Array.isArray(skillsParam) 
      ? skillsParam 
      : skillsParam.split(",").map(s => s.trim());
    const jobs = await Job.find({ skills: { $in: skillsArray } });
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getJobsByLocation = async (req: Request, res: Response) => {
  try {
    const { location } = req.params;
    if (!location) {
      return res.status(400).json({
        success: false,
        message: "Location parameter is required",
      });
    }
    const locationParam = Array.isArray(location) ? location[0] : location;
    if (!locationParam || typeof locationParam !== "string") {
      return res.status(400).json({
        success: false,
        message: "Location parameter must be a valid string",
      });
    }
    const jobs = await Job.find({ location: new RegExp(locationParam, "i") });
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getJobsByBudget = async (req: Request, res: Response) => {
  try {
    const { minBudget, maxBudget } = req.params;
    const query: any = {};
    const minBudgetNum = minBudget !== undefined ? Number(minBudget) : undefined;
    const maxBudgetNum = maxBudget !== undefined ? Number(maxBudget) : undefined;
    if (minBudget !== undefined && isNaN(Number(minBudget))) {
      return res.status(400).json({
        success: false,
        message: "minBudget must be a valid number",
      });
    }
    if (maxBudget !== undefined && isNaN(Number(maxBudget))) {
      return res.status(400).json({
        success: false,
        message: "maxBudget must be a valid number",
      });
    }
    if (minBudgetNum !== undefined) {
      query.budget = { $gte: minBudgetNum };
    }
    if (maxBudgetNum !== undefined) {
      query.budget = { ...query.budget, $lte: maxBudgetNum };
    }
    const jobs = await Job.find(query);
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getJobsByContractType = async (req: Request, res: Response) => {
  try {
    const { contractType } = req.params;
    const jobs = await Job.find({ contractType });
    res.json({
      success: true,
      jobs,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
