import mongoose,{Document,Schema} from "mongoose";
export interface IReview extends Document{
    freelancerId:mongoose.Types.ObjectId;
    employerId:mongoose.Types.ObjectId;
    rating:number;
    review:string;
    comment:string;
    jobId:mongoose.Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;
}
const reviewSchema=new Schema<IReview>({
    freelancerId:{type:Schema.Types.ObjectId,ref:'Freelancer',required:true},
    employerId:{type:Schema.Types.ObjectId,ref:'Employer',required:true},
    rating:{type:Number,required:true},
    review:{type:String,required:true},
    comment:{type:String,required:true},
    jobId:{type:Schema.Types.ObjectId,ref:'Job',required:true},
},{timestamps:true});
export default mongoose.model<IReview>('Review',reviewSchema);