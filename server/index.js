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
//convert to json else it will be in the form of a string and we can't access the properties of it
app.use(express.json());
app.use(cookieParser());
app.post(
  "/api/strip-webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);
app.use(
  cors({
    origin: "https://webcreateai-1.onrender.com",
    credentials: true,
  }),
);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/website", websiteRouter);
app.use("/api/billing", billingRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
//cors is used to allow cross-origin requests from the client application running on a different port. The server listens on the specified port and connects to the database when it starts. The routes for authentication and user operations are set up using the imported routers.
