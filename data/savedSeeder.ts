import SavedJob from "../models/SavedJob";
const savedJobSeed=()=>{
     
    SavedJob.deleteMany({}).then(()=>{

        console.log("deleted");
        
    })
    SavedJob.insertMany([
        {
            userId:"645187373737373737373737",
            jobId:"645187373737373737373737"
        },
        {
            userId:"645187373737373737373737",
            jobId:"645187373737373737373738"
        },
        {
            userId:"645187373737373737373738",
            jobId:"645187373737373737373737"
        },
        {
            userId:"645187373737373737373738",
            jobId:"645187373737373737373738"
        }
        
    ]).then((res)=>{
        console.log(res);
    })

}
export default savedJobSeed;