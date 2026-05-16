import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import dotenv, { config } from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const registerUser = async (req, res) => {
  console.log("API is working ");
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

    // create access token
    const accesstToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    // create refresh token
    const refreshToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set Cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      accesstToken,
      data: newUser,
    });
  } catch (error) {
    console.log("Error is  coming");
    res.status(500).json({
      success: false,
      message: ("ffd", error.message),
    });
  }
};

export const getMe = async (req, res) => {
  try {
    // Find current logged in user
    const user = await UserModel.findById(req.user.id).select("-password");

    // Check User
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Creating Refresh Token

export const refreshToken = async (req, res) => {
  try {

    // Get refresh token from cookies
    const refreshToken = req.cookies.refreshToken;

    // Check refresh token
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token not found",
      });
    }

    // Verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_SECRET
    );

    // Create new access token
    const accessToken = jwt.sign(
      {
        id: decoded.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    // Create new refresh Token
     const newRefreshToken = jwt.sign(
      {id: decoded.id},
      process.env.JWT_SECRET,
        { expiresIn: "7d" }
     )
     res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    console.log("Checking Cookies")
    console.log(req.cookies);

    // Send response
    res.status(200).json({
      success: true,
      message: "Access token refreshed successfully",
      accessToken,
    });

  } catch (error) {

    res.status(401).json({
      success: false,
      // message: "Invalid refresh token",
       message: error.message,
    });
  }
};
