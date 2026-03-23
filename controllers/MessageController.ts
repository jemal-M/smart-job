import Message from "../models/Message.js";
import mongoose from "mongoose";
import type { Request, Response } from "express";
export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.find({});
    res.json({
      success: true,
      messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMessageById = async (req: Request, res: Response) => {
  try {
    const message = await Message.findById(req.params.id);
    res.json({
      success: true,
      message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const createMessage = async (req: Request, res: Response) => {
  try {
    const message = await Message.create({
      chatId: req.body.chatId,
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      message: req.body.message,
      image: req.body.image,
    });
    res.json({
      success: true,
      message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const deleteMessage = async (req: Request, res: Response) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateMessage = async (req: Request, res: Response) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, {
      chatId: req.body.chatId,
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      message: req.body.message,
      image: req.body.image,
    });
    res.json({
      success: true,
      message,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMessagesByChatId = async (req: Request, res: Response) => {
  try {
    const chatId = req.params.chatId;
    if (!chatId || typeof chatId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "chatId is required",
      });
    }
    const messages = await Message.find({ chatId: new mongoose.Types.ObjectId(chatId) });
    res.json({
      success: true,
      messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMessagesBySenderId = async (req: Request, res: Response) => {
  try {
    const senderId = req.params.senderId;
    if (!senderId || typeof senderId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "senderId is required",
      });
    }
    const messages = await Message.find({ senderId: new mongoose.Types.ObjectId(senderId) });
    res.json({
      success: true,
      messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMessagesByReceiverId = async (req: Request, res: Response) => {
  try {
    const receiverId = req.params.receiverId;
    if (!receiverId || typeof receiverId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "receiverId is required",
      });
    }
    const messages = await Message.find({ receiverId: new mongoose.Types.ObjectId(receiverId) });
    res.json({
      success: true,
      messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMessagesByChatIdAndSenderId = async (
  req: Request,
  res: Response
) => {
  try {
    const chatId = req.params.chatId;
    const senderId = req.params.senderId;
    if (!chatId || typeof chatId !== 'string' || !senderId || typeof senderId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "chatId and senderId are required",
      });
    }
    const messages = await Message.find({ 
      chatId: new mongoose.Types.ObjectId(chatId), 
      senderId: new mongoose.Types.ObjectId(senderId) 
    });
    res.json({
      success: true,
      messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMessagesByChatIdAndReceiverId = async (
  req: Request,
  res: Response
) => {
  try {
    const chatId = req.params.chatId;
    const receiverId = req.params.receiverId;
    if (!chatId || typeof chatId !== 'string' || !receiverId || typeof receiverId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "chatId and receiverId are required",
      });
    }
    const messages = await Message.find({ 
      chatId: new mongoose.Types.ObjectId(chatId), 
      receiverId: new mongoose.Types.ObjectId(receiverId) 
    });
    res.json({
      success: true,
      messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getMessagesBySenderIdAndReceiverId = async (
  req: Request,
  res: Response
) => {
  try {
    const senderId = req.params.senderId;
    const receiverId = req.params.receiverId;
    if (!senderId || typeof senderId !== 'string' || !receiverId || typeof receiverId !== 'string') {
      return res.status(400).json({
        success: false,
        message: "senderId and receiverId are required",
      });
    }
    const messages = await Message.find({ 
      senderId: new mongoose.Types.ObjectId(senderId), 
      receiverId: new mongoose.Types.ObjectId(receiverId) 
    });
    res.json({
      success: true,
      messages,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};