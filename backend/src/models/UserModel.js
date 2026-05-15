import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
     required: [true, "Last name is required"],
    trim: true,
  },
  email: {
      type: String,
      required: true,
     required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
     password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true,
  }
);
 const User = mongoose.model("users" , userSchema);
 export default User;
