import User from "../models/User.js";
import type { Request, Response } from "express";
export const register = async (req:Request, res:Response) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
 
export const login = async (req:Request, res:Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    res.json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProfile = async (req:Request, res:Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
    const user = await User.findById(req.user._id);
    res.json({
      success: true,
      user,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const logout = async (req:Request, res:Response) => {
  try {
    res.json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateProfile = async (req:Request, res:Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        name,
        email,
      },
      {
        new: true,
      }
    );
    res.json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updatePassword = async (req:Request, res:Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
    const user = await User.findById(req.user._id);
    const { oldPassword, newPassword } = req.body;
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await user.matchPassword(oldPassword);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Old password is incorrect",
      });
    }
    user.password = newPassword;
    await user.save();
    res.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const forgetPassword = async (req:Request, res:Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const resetToken = user.getResetPasswordToken();
    await user.save();
    res.json({
      success: true,
      message: "Reset password token generated successfully",
      resetToken,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const resetPassword = async (req:Request, res:Response) => {
  try {
    const { resetToken } = req.params;
    const { password } = req.body;
    
    // Validate resetToken - ensure it's a string and not empty
    if (!resetToken || Array.isArray(resetToken)) {
      return res.status(400).json({
        success: false,
        message: "Invalid reset password token",
      });
    }
    
    // Validate password
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Please provide a password",
      });
    }
    
    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpire: { $gt: Date.now() },
    } as any);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid reset password token",
      });
    }
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res.json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


