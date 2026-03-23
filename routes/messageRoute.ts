import Router from "express";
import { createMessage, deleteMessage, getMessageById, getMessages, updateMessage } from "../controllers/MessageController.ts";
const messageRoute=Router();
messageRoute.get("",getMessages);
messageRoute.post("/create",createMessage);
messageRoute.get("/:id", getMessageById);
messageRoute.put("/:id", updateMessage);
messageRoute.delete("/:id",deleteMessage);

export default messageRoute;