import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["ai", "user"],
      required: true,
    },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

const wesiteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      default: "Untitled Website",
    },
    latestCode: {
      type: String,
      required: true,
    },
    conversation: [messageSchema],
    deployed: { type: Boolean, default: false },
    slug: { type: String, unique: true },
    deployedUrl: { type: String, default: "" },
  },
  { timestamps: true },
);
const Website = mongoose.model("Website", wesiteSchema);
export default Website;
