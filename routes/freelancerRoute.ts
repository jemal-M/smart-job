import { Router } from "express";
import { createFreelancer, deleteFreelancer, getFreelancerById, getFreelancers, updateFreelancer } from "../controllers/FreelancerController.js";
const freelancerRouter=Router();
freelancerRouter.get("/",getFreelancers);
freelancerRouter.post("/create", createFreelancer);
freelancerRouter.get("/:id", getFreelancerById);
freelancerRouter.delete("/:id", deleteFreelancer);
freelancerRouter.put("/:id", updateFreelancer);
export default freelancerRouter;