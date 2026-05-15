import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const isAuth = async(req,res, next) =>{
    try {
        // Get authorization header
        const authHeader = req.headers.authorization;

        // check Header
        if(!authHeader || !authHeader.startsWidth("Bearer ")){
            return res.status(401).json({
                success: false,
                message: "Token not found"
            });
        }

         // Extract Token
         const token = authHeader.split(" ")[1];

         // Verify Token
         const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Save decoded user
        req.user = decoded;

         next();

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid token"
        })
        
    }
}