import mongoose from "mongoose";
export interface ISavedJob extends Document {
    userId: mongoose.Types.ObjectId;
    jobId: mongoose.Types.ObjectId;
    isSaved: boolean;
    updatedAt: Date;
    savedAt: Date;
    createdAt: Date;
}
const savedJobSchema = new mongoose.Schema<ISavedJob>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    isSaved: { type: Boolean, default: true },
    savedAt: { type: Date, default: Date.now },
}, { timestamps: true });

 export default mongoose.model<ISavedJob>('SavedJob', savedJobSchema);