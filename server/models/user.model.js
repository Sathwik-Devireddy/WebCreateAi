import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    avatar: {
      type: String,
    },
    credits: {
      type: Number,
      default: 100,
      min: 0,
    },
    plan: {
      type: String,
      enum: ["free", "pro", "enterprise"],
      default: "free",
    },
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);
export default User;
// This file defines the User model using Mongoose. It specifies the schema for user documents in the MongoDB database, including fields for name, email, avatar, credits, and plan. The model is then exported for use in other parts of the application.
