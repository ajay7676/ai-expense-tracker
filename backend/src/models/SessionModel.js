import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User id is required"],
    },
    refreshTokenHash: {
      type: String,
      required: true,
    },

    userAgent: {
      type: String,
      default: " ",
    },
    ipAddress: {
      tytpe: String,
      default: "",
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);


const SessionModel = mongoose.model("Session" , sessionSchema) ;

export default SessionModel;