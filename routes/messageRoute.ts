import Router from "express";
import { createMessage, deleteMessage, getMessageById, getMessages, updateMessage } from "../controllers/MessageController.ts";
import { authMiddleWare } from "../middleware/authMiddleware.ts";
const messageRoute=Router();
messageRoute.get("",authMiddleWare,getMessages);
messageRoute.post("/create",authMiddleWare,createMessage);
messageRoute.get("/:id",authMiddleWare, getMessageById);
messageRoute.put("/:id",authMiddleWare, updateMessage);
messageRoute.delete("/:id",authMiddleWare,deleteMessage);

export default messageRoute;