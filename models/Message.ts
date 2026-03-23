import mongoose,{Document,Schema} from "mongoose";
export interface Imessage extends Document{
    chatId:mongoose.Types.ObjectId;
    senderId:mongoose.Types.ObjectId;
    receiverId:mongoose.Types.ObjectId;
    message:string;
    isRead:boolean;
    createdAt:Date;
    updatedAt:Date;
    image?:string;
}
const messageSchema=new Schema<Imessage>({
    chatId:{type:Schema.Types.ObjectId,ref:'Chat',required:true},
    senderId:{type:Schema.Types.ObjectId,ref:'User',required:true},
    receiverId:{type:Schema.Types.ObjectId,ref:'User',required:true},
    message:{type:String,required:true},
    isRead:{type:Boolean,default:false},
    image:{type:String}
},{timestamps:true});
export default mongoose.model<Imessage>('Message',messageSchema);