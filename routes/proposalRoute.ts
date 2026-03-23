import { Router } from "express";
import { 
    deleteProposal,
     getProposalByFreelancerId,
      getProposalById,
       getProposalByJobId, 
       getProposals,
        updateProposal
     } from "../controllers/ProposalController.ts";
const proposalRouter=Router();
proposalRouter.get("/",getProposals);
proposalRouter.get("/:id", getProposalById);
proposalRouter.get("/freelancer/:freelancerId", getProposalByFreelancerId);
proposalRouter.delete("/:id", deleteProposal);
proposalRouter.get("/job/:jobId", getProposalByJobId);
proposalRouter.put("/:id", updateProposal);

export default proposalRouter;