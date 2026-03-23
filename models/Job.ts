import mongoose,{Document,Schema} from "mongoose";
export type JobType="Fulltime"|"Part-Time";
export type JobStatus="open"|'in-progress'|"closed"
export interface IJob extends Document{
    title:string;
    description:string;
    requirements:string[];
    salary:number;
    location:string;
    companyId:mongoose.Types.ObjectId;
    postedBy:mongoose.Types.ObjectId;
    applicants:mongoose.Types.ObjectId[];
    experience:number;
    type:JobType;
    status:JobStatus;
    isRemote:Boolean;
    deadline:Date;
    createdAt:Date;
    updatedAt:Date;
}
const jobSchema=new Schema<IJob>({
    title:{type:String,required:true},
    description:{type:String,required:true},
    requirements:{type:[String],required:true},
    salary:{type:Number,required:true},
    location:{type:String,required:true},
    companyId:{type:Schema.Types.ObjectId,ref:'Employer',required:true},
    postedBy:{type:Schema.Types.ObjectId,ref:'User',required:true},
    applicants:{type:[Schema.Types.ObjectId],ref:'Freelancer'},
    experience:{type:Number,required:true},
    type:{type:String,enum:['Fulltime','Part-Time'],required:true},
    status:{type:String,enum:['open','in-progress','closed'],default:'open'},
    isRemote:{type:Boolean,default:false},
    deadline:{type:Date,required:true},
},{timestamps:true});
export default mongoose.model<IJob>('Job',jobSchema);