import express from "express";
import {
  generatedemo,
  getCurrentUser,
} from "../controllers/user.controller.js";
import isAuth from "../middleware/isAuth.js";
const userRouter = express.Router();
//get current user details
userRouter.get("/me", isAuth, getCurrentUser);
userRouter.get("/gen", generatedemo);
export default userRouter;
//this file defines the routes related to user operations. It imports the necessary controller functions and middleware, sets up the route for getting the current user's details, and exports the router for use in the main application.
