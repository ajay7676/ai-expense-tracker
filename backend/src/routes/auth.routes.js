import express from "express";
import {getMe, refreshToken, registerUser} from '../controllers/userController.js'
import { isAuth } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register",registerUser )
authRouter.get("/get-me",isAuth ,getMe)
authRouter.get("/refresh-token" ,refreshToken)

 export default authRouter;