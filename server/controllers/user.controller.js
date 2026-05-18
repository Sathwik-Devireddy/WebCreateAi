import { generateResponse } from "../config/openRouter.js";
import extractJson from "../utils/extractJson.js";
export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
// This file defines the controller function for getting the current user's details. It checks if the user is authenticated (using the isAuth middleware)
//  and returns the user's information in the response. If the user is not found or if there is a server error, it returns an appropriate error message.
export const generatedemo = async (req, res) => {
  try {
    const result = await generateResponse("What is the capital of France?");
    const data = await extractJson(result);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
