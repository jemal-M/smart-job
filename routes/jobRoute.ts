import { Router } from "express";
import { 
    createJob,
     deleteJob, 
     getJobById, 
     getJobs, 
     updateJob 
    } from "../controllers/JobController.ts";
const jobRouter=Router();
jobRouter.get("/",getJobs);
jobRouter.post("/create",createJob);
jobRouter.put("/:id",updateJob);
jobRouter.get("/:id",getJobById);
jobRouter.delete("/:id", deleteJob);
export default jobRouter;