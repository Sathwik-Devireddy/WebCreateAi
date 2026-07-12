import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next(); //this line allows the request to proceed to the next middleware or route handler if the user is authenticated successfully.
  } catch (error) {
    return res.status(401).json({
      message: `Unauthorized ${error}`,
    });
  }
};
export default isAuth;
//this file defines the isAuth middleware function, which is used to protect routes
// that require authentication. It checks for the presence of a JWT token in the request cookies, verifies
// the token, and retrieves the corresponding user from the database. If the token is valid and the user is found,
//  it attaches the user information to the request object and allows the request to proceed. If there is
// any issue with authentication (e.g., missing token, invalid token), it returns an unauthorized response.
