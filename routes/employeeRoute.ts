import { Router } from "express";
import { createEmployer, deleteEmployer, getEmployerById, getEmployers, updateEmployer } from "../controllers/EmployerController.js";
const employeeRoute = Router();
employeeRoute.get("/",getEmployers);
employeeRoute.post("/create", createEmployer);
employeeRoute.get("/:id", getEmployerById);
employeeRoute.put("/:id", updateEmployer);
employeeRoute.delete("/:id", deleteEmployer);
export default employeeRoute;