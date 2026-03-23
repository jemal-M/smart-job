import { Router } from "express";
import { 
    deleteProposal,
     getProposalByFreelancerId,
      getProposalById,
       getProposalByJobId, 
       getProposals,
        updateProposal
     } from "../controllers/ProposalController.ts";
import { authMiddleWare } from "../middleware/authMiddleware.ts";
const proposalRouter=Router();
proposalRouter.get("/",authMiddleWare,getProposals);
proposalRouter.get("/:id",authMiddleWare, getProposalById);
proposalRouter.get("/freelancer/:freelancerId",authMiddleWare, getProposalByFreelancerId);
proposalRouter.delete("/:id",authMiddleWare, deleteProposal);
proposalRouter.get("/job/:jobId", authMiddleWare,getProposalByJobId);
proposalRouter.put("/:id", authMiddleWare,updateProposal);

export default proposalRouter;