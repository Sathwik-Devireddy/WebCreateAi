import express from "express";
import { googleAuth, logout } from "../controllers/auth.controller.js";
const authRouter = express.Router();
authRouter.post("/google", (req, res) => {});
authRouter.post("/google", googleAuth);
authRouter.post("/logout", (req, res) => {});
export default authRouter;
