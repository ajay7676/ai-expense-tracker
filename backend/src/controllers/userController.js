import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const registerUser = async (req, res) => {
    console.log("API is working ")
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check empty fileds
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    // Check existing user
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create user
    const newUser = await UserModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    console.log(process.env.JWT_SECRET);
    // create token
    const token = jwt.sign({ id: newUser._id },  process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      data: newUser,
    });
  } catch (error) {
    console.log("Error is  coming")
    res.status(500).json({
      success: false,
      message:("ffd" ,  error.message),
    });
  }
};

export const getMe = async (req,res) => {

    try {

        // Find current logged in user
        const user = await UserModel.findById(req.user.id).select("-password");
       
        // Check User
    
    } catch (error) {
        
    }

}
