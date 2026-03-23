import { Router } from "express";
import {
     forgetPassword,
      getProfile, 
      login, 
      register, 
      resetPassword,
       updatePassword, 
       updateProfile 
    } from "../controllers/AuthController.js";
const authRouter = Router();
authRouter.post('/',login);
authRouter.post('/',register);
authRouter.get('/profile', getProfile);
authRouter.post('/logout', getProfile);
authRouter.put('/profile', updateProfile);
authRouter.put('/password/update',updatePassword);
authRouter.get("/forget/password",forgetPassword);
authRouter.put("/reset/password/:token", resetPassword);
export default authRouter;
 