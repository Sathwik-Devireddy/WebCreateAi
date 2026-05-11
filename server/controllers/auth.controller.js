import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const googleAuth = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;

    // check required fields
    if (!name || !email) {
      return res.status(400).json({
        message: "Name and email are required",
      });
    }

    // check existing user
    let user = await User.findOne({ email });

    // create new user if not exists
    if (!user) {
      user = await User.create({
        name,
        email,
        avatar,
      });
    }

    // generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    // store token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User authenticated successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// logout
export const logout = (req, res) => {
  try {
    return res
      .clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
      })
      .status(200)
      .json({
        message: "User logged out",
      });
  } catch (error) {
    console.error("Logout error:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
