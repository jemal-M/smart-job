import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/UserController.js";
const userrouter = Router();
userrouter.get("/",getUsers);
userrouter.post("/create",createUser);
userrouter.get("/:id", getUserById);
userrouter.put("/:id", updateUser);
userrouter.delete("/:id", deleteUser);
export default userrouter;