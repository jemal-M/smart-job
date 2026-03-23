import { Router } from "express";
import { 
    createJob,
     deleteJob, 
     getJobById, 
     getJobs, 
     updateJob 
    } from "../controllers/JobController.ts";
import { authMiddleWare } from "../middleware/authMiddleware.ts";
const jobRouter=Router();
jobRouter.get("/",authMiddleWare,getJobs);
jobRouter.post("/create",authMiddleWare,createJob);
jobRouter.put("/:id",authMiddleWare,updateJob);
jobRouter.get("/:id",authMiddleWare,getJobById);
jobRouter.delete("/:id", authMiddleWare,deleteJob);
export default jobRouter;