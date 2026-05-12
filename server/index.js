import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.routes.js";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
const port = process.env.PORT || 6000;
//convert to json else it will be in the form of a string and we can't access the properties of it
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
