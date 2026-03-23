import Proposal from "../models/Proposal.js";
import type { Request, Response } from "express";
import mongoose from "mongoose";
export const getProposals = async (req: Request, res: Response) => {
  try {
    const proposals = await Proposal.find({});
    res.json({
      success: true,
      proposals,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProposalById = async (req: Request, res: Response) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    res.json({
      success: true,
      proposal,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createProposal = async (req: Request, res: Response) => {
  try {
    const proposal = await Proposal.create(req.body);
    res.json({
      success: true,
      proposal,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteProposal = async (req: Request, res: Response) => {
  try {
    const proposal = await Proposal.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Proposal deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateProposal = async (req: Request, res: Response) => {
  try {
    const proposal = await Proposal.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      success: true,
      proposal,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProposalByFreelancerId = async (req: Request, res: Response) => {
  try {
    const freelancerId = req.params.freelancerId;
    if (!freelancerId || typeof freelancerId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "freelancerId is required",
      });
    }
    const proposals = await Proposal.find({ freelancerId: new mongoose.Types.ObjectId(freelancerId) });
    res.json({
      success: true,
      proposals,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProposalByJobId = async (req: Request, res: Response) => {
  try {
    const jobId = req.params.jobId;
    if (!jobId || typeof jobId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "jobId is required",
      });
    }
    const proposals = await Proposal.find({ jobId: new mongoose.Types.ObjectId(jobId) });
    res.json({
      success: true,
      proposals,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProposalByFreelancerIdAndJobId = async (req: Request, res: Response) => {
  try {
    const freelancerId = req.params.freelancerId;
    const jobId = req.params.jobId;
    if (!freelancerId || typeof freelancerId !== 'string' || !jobId || typeof jobId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "freelancerId and jobId are required",
      });
    }
    const proposals = await Proposal.find({ 
      freelancerId: new mongoose.Types.ObjectId(freelancerId), 
      jobId: new mongoose.Types.ObjectId(jobId) 
    });
    res.json({
      success: true,
      proposals,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProposalByStatus = async (req: Request, res: Response) => {
  try {
    const status = req.params.status;
    if (!status || typeof status !== 'string') {
      return res.status(400).json({
        success: false,
        message: "status is required",
      });
    }
    const proposals = await Proposal.find({ status: status });
    res.json({
      success: true,
      proposals,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};