import mongoose,{Document,Schema} from "mongoose";
export type ProposalStatus = "pending" | "accepted" | "rejected";
export interface IProposal extends Document {
  jobId: mongoose.Types.ObjectId;
  freelancerId: mongoose.Types.ObjectId;
  coverLetter: string;
  proposedPrice: number;
  proposedDuration: number;
  status: ProposalStatus;
  createdAt: Date;
  updatedAt: Date;
}
const proposalSchema = new Schema<IProposal>({
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
  freelancerId: { type: Schema.Types.ObjectId, ref: 'Freelancer', required: true },
  coverLetter: { type: String, required: true },
  proposedPrice: { type: Number, required: true },
  proposedDuration: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
}, { timestamps: true });
proposalSchema.index({ jobId: 1, freelancerId: 1 }, { unique: true });

export default mongoose.model<IProposal>('Proposal', proposalSchema);
