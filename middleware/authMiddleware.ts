import jwt from "jsonwebtoken"
import type { Request,Response,NextFunction } from "express";

// Custom interface for JWT payload - contains what's actually stored in the token
interface IJwtPayload {
    _id: string;
    role?: string;
}

export const authMiddleWare = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IJwtPayload;
        req.user = decoded as any;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};
export const autherization=(req:Request, res: Response, next: NextFunction)=>{
  if(!req.user || req.user.role!=="admin"){
    return res.status(401).json({ message: 'Access denied' });
  }
  
  
  next();
}
