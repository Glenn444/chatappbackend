const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const getUserDetailsFromToken = async (token) => {
  try {
    if (!token) {
      return {
        message: "session out",
        logout: true,
      };
    }

    const decode = await jwt.verify(token, process.env.JWT_SECREAT_KEY);

    const user = await UserModel.findById(decode.id).select("-password");

    return user;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      // Token has expired, handle accordingly
      // For example, you can respond with an error message
      res.status(401).json({ error: "Token expired" });
    } else {
      // Other JWT verification errors, handle accordingly
      res.status(401).json({ error: "Invalid token" });
    }
  }
};

module.exports = getUserDetailsFromToken;
