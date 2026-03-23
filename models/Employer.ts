import mongoose, { Document, Schema } from "mongoose";
export interface IEmployer extends Document {
    userId: mongoose.Types.ObjectId;
    companyLogo: string;
    companyName: string;
    companyDescription: string;
    companyWebsite: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
    companyCity: string;
    companyCountry: string;
    companyZipCode: string;
    companyIndustry: string;
    companySize: string;
    companyFounded: string;
    companyType: string;
    companySocialLinks: {
        linkedin?: string;
        twitter?: string;
        facebook?: string;
        instagram?: string;
    };
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}
const employerSchema = new Schema<IEmployer>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    companyLogo: { type: String, required: true },
    companyName: { type: String, required: true },
    companyDescription: { type: String, required: true },
    companyWebsite: { type: String, required: true },
    companyEmail: { type: String, required: true },
    companyPhone: { type: String, required: true },
    companyAddress: { type: String, required: true },
    companyCity: { type: String, required: true },
    companyCountry: { type: String, required: true },
    companyZipCode: { type: String, required: true },
    companyIndustry: { type: String, required: true },
    companySize: { type: String, required: true },
    companyFounded: { type: String, required: true },
    companyType: { type: String, required: true },
    companySocialLinks: {
        linkedin: String,
        twitter: String,
        facebook: String,
        instagram: String
    },
    isVerified: { type: Boolean, required: true, default: false },
}, { timestamps: true });
export default mongoose.model<IEmployer>('Employer', employerSchema);