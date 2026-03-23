import Employer from "../models/Employer.js";
import type { Request, Response } from "express";
export const getEmployers = async (req: Request, res: Response) => {
  try {
    const employers = await Employer.find({});
    res.json({
      success: true,
      employers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getEmployerById = async (req: Request, res: Response) => {
  try {
    const employer = await Employer.findById(req.params.id);
    res.json({
      success: true,
      employer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createEmployer = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
    
    if (req.user.role !== "employer") {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }
    const employer = await Employer.create({
      userId: req.user?._id,
      companyLogo: req.body.companyLogo,
      companyName: req.body.companyName,
      companyDescription: req.body.companyDescription,
      companyWebsite: req.body.companyWebsite,
      companyEmail: req.body.companyEmail,
      companyPhone: req.body.companyPhone,
      companyAddress: req.body.companyAddress,
      companyCity: req.body.companyCity,
      companyCountry: req.body.companyCountry,
      companyZipCode: req.body.companyZipCode,
      companyIndustry: req.body.companyIndustry,
      companySize: req.body.companySize,
      companyFounded: req.body.companyFounded,
      companyType: req.body.companyType,
      companySocialLinks: req.body.companySocialLinks,
    });
    res.json({
      success: true,
      employer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateEmployer = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    if (req.user.role !== "employer") {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }
    const employer = await Employer.findByIdAndUpdate(
      req.params.id,
      {
        companyLogo: req.body.companyLogo,
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription,
        companyWebsite: req.body.companyWebsite,
        companyEmail: req.body.companyEmail,
        companyPhone: req.body.companyPhone,
        companyAddress: req.body.companyAddress,
        companyCity: req.body.companyCity,
        companyCountry: req.body.companyCountry,
        companyZipCode: req.body.companyZipCode,
        companyIndustry: req.body.companyIndustry,
        companySize: req.body.companySize,
        companyFounded: req.body.companyFounded,
        companyType: req.body.companyType,
        companySocialLinks: req.body.companySocialLinks,
      },
      { new: true }
    );
    res.json({
      success: true,
      employer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteEmployer = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    if (req.user.role !== "employer") {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }
    const employer = await Employer.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      employer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getEmployerByUserId = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    if (req.user.role !== "employer") {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }
    const employer = await Employer.findOne({ userId: req.user._id });
    res.json({
      success: true,
      employer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const verifyEmployer = async (req: Request, res: Response) => {
  try {
    const employer = await Employer.findByIdAndUpdate(
      req.params.id,
      { isVerified: true },
      { new: true }
    );
    res.json({
      success: true,
      employer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const unverifyEmployer = async (req: Request, res: Response) => {
  try {
    const employer = await Employer.findByIdAndUpdate(
      req.params.id,
      { isVerified: false },
      { new: true }
    );
    res.json({
      success: true,
      employer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const toggleVerifyEmployer = async (req: Request, res: Response) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) {
      return res.status(404).json({
        success: false,
        message: "Employer not found",
      });
    }
    const updatedEmployer = await Employer.findByIdAndUpdate(
      req.params.id,
      { isVerified: !employer.isVerified },
      { new: true }
    );
    res.json({
      success: true,
      employer: updatedEmployer,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getVerifiedEmployers = async (req: Request, res: Response) => {
  try {
    const employers = await Employer.find({ isVerified: true });
    res.json({
      success: true,
      employers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getUnverifiedEmployers = async (req: Request, res: Response) => {
  try {
    const employers = await Employer.find({ isVerified: false });
    res.json({
      success: true,
      employers,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
