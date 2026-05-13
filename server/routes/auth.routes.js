import express from "express";
import { googleAuth, logout } from "../controllers/auth.controller.js";
const authRouter = express.Router();
// Google authentication
authRouter.post("/google", googleAuth);
// Logout
authRouter.get("/logout", logout);
export default authRouter;
// this file defines the routes for authentication-related operations, such as Google authentication and logout. It imports the necessary controller functions and sets up the routes accordingly.
