import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user.routes.js";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import websiteRouter from "./routes/website.routes.js";
import billingRouter from "./routes/billing.routes.js";
import { stripeWebhook } from "./controllers/stripWebhook.controller.js";

const app = express();

const port = process.env.PORT || 6000;

// Stripe webhook MUST come before express.json()
app.post(
  "/api/strip-webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// normal middleware
app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "https://webcreateai-1.onrender.com",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/website", websiteRouter);
app.use("/api/billing", billingRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
