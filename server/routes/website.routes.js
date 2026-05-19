import express from "express";

import isAuth from "../middleware/isAuth.js";
import {
  generateWebsite,
  getWebsiteById,
  getAllWebsites,
  changes,
} from "../controllers/website.controllers.js";
const websiteRouter = express.Router();
//get current user details
websiteRouter.post("/generate", isAuth, generateWebsite);
websiteRouter.post("/update/:id", isAuth, changes);
websiteRouter.get("/get-by-id/:id", isAuth, getWebsiteById);
websiteRouter.get("/get-all", isAuth, getAllWebsites);

export default websiteRouter;
//this file defines the routes related to user operations. It imports the necessary controller functions and middleware, sets up the route for getting the current user's details, and exports the router for use in the main application.
