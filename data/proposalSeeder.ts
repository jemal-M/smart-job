import Proposal from "../models/Proposal";
const proposalSeeder = async () => {
  try {
    await Proposal.deleteMany({});
    Proposal.insertMany([
      {
        freelancerId: "645187973305300012345678",
        jobId: "645187973305300012345679",
        description: "I can do this job",
        status: "pending",
      },
      {
        freelancerId: "645187973305300012345678",
        jobId: "645187973305300012345680",
        description: "I can do this job too",
        status: "accepted",
      },
      {
        freelancerId: "645187973305300012345679",
        jobId: "645187973305300012345679",
        description: "I can do this job as well",
        status: "rejected",
      },
      {
        freelancerId: "645187973305300012345679",
        jobId: "645187973305300012345680",
        description: "I can do this job also",
        status: "pending",
      },
      
      {
        freelancerId: "645187973305300012345678",
        jobId: "645187973305300012345681",
        description: "I can do this job too",
        status: "accepted",
      },
      {
        freelancerId: "645187973305300012345679",
        jobId: "645187973305300012345681",
        description: "I can do this job as well",
        status: "rejected",
      },
      
    ]);
    console.log("Proposals deleted");
    process.exit(1);
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
};
export default proposalSeeder;