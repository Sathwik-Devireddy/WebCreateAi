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
