import mongoose, { Document, Schema } from "mongoose";
export interface IFreelancer extends Document {
    userId: mongoose.Types.ObjectId;
    skills: string[];
    experience: number;
    portfolio: string;
    hourlyRate: number;
    bio: string;
    location: string;
    title: string;
    isAvailable: boolean;
    portfolioLink: string;
    cvUrl?: string;
    rating?: number;
    totalReviews?: number;
    createdAt: Date;
    updatedAt: Date;
}
const freelancerSchema = new Schema<IFreelancer>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    skills: { type: [String], required: true },
    experience: { type: Number, required: true },
    portfolio: { type: String, required: true },
    hourlyRate: { type: Number, required: true },
    bio: { type: String, required: true },
    location: { type: String, required: true },
    title: { type: String, required: true },
    isAvailable: { type: Boolean, required: true, default: true },
    portfolioLink: { type: String, required: true },
    cvUrl: { type: String },
    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.model<IFreelancer>('Freelancer', freelancerSchema);
