import { Router } from "express";
import { deleteSavedJob, getSavedJobById, getSavedJobs, getSavedJobsByJobId, updateSavedJob } from "../controllers/SavedJobscontroller.ts";
const savedJobRouter=Router();
savedJobRouter.get("/",getSavedJobs);
savedJobRouter.get("/:id", getSavedJobById);
savedJobRouter.get("/:jobId", getSavedJobsByJobId);
savedJobRouter.delete("/:id", deleteSavedJob);
savedJobRouter.put("/:id", updateSavedJob);
export default savedJobRouter;