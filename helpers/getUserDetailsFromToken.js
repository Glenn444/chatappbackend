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

    const user = await UserModel.findOne({userId: decode.id});
 
    return user;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      
      throw new Error("Token Expired")
      //res.status(401).json({ error: "Token expired" });
    } else {
     
      console.log("Error Userdetails: ", error.message);
     // res.status(401).json({ error: "Invalid token" });
    }
  }
};

module.exports = getUserDetailsFromToken;
