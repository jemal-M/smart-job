import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: "freelancer" | "employer" | "admin";
    profileImage: string;
    isVerified: boolean;
    resetPasswordToken?: string | undefined;
    resetPasswordExpire?: number | undefined;
    matchPassword(enteredPassword: string): Promise<boolean>;
    getResetPasswordToken(): string;
}
const userSchema = new mongoose.Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["freelancer", "employer", "admin"],
            default: "freelancer",
        },
        profileImage: {
            type: String,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        resetPasswordToken: {
            type: String,
        },
        resetPasswordExpire: {
            type: Number,
        },
    },
    { timestamps: true }
);
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Method to match password
userSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate reset password token
userSchema.methods.getResetPasswordToken = function (): string {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");
    // Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    // Set expire time (10 minutes)
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
    return resetToken;
};

export default mongoose.model<IUser>("User", userSchema);
