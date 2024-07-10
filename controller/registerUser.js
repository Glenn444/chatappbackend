const UserModel = require("../models/UserModel");
const { usersAppwrite } = require("../appwriteConfig/appwrite");
const jwt = require("jsonwebtoken");
<<<<<<< HEAD

async function registerUser(request, response) {
  try {
    const { name, userId, profile_pic } = request.body;
    const result = await usersAppwrite.list();
    const userFound = result.users.find((user) => userId === user.$id);
 
    if (!userFound) {
      return res.status(404).json({ msg: "No user found with id: " + userId });
    }
    if (userFound) {
      const dbUser = await UserModel.findById(userId);
      if (!dbUser) {
        await UserModel.create({ name, _id: userId , profile_pic});
=======
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const registerUser = asyncWrapper(async (request, response, next) => {
  try {
    const { name, userId, profile_pic } = request.body;

    const result = await usersAppwrite.list();
    const userFound = result.users.find((user) => userId === user.$id);

    if (!userFound) {
      return next(createCustomError(`No user found with id ${userId} `, 404));
    }
    if (userFound) {
      let dbUser = await UserModel.findOne({ userId });
      if (!dbUser) {
        dbUser = await UserModel.create({ name, userId, profile_pic });
>>>>>>> a829d2d (Changes)
      }
      const tokenData = {
        id: userFound.$id,
        name: userFound.name,
      };
<<<<<<< HEAD

      const token = await jwt.sign(tokenData, process.env.JWT_SECREAT_KEY, {
        expiresIn: "30d",
      });

      return res.status(200).json({
        message: "User Successfully Created",
        token: token,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

=======

      const token = await jwt.sign(tokenData, process.env.JWT_SECREAT_KEY, {
        expiresIn: "30d",
      });

      return response.status(200).json({
        message: "User Successfully Created",
        token: token,
        id: dbUser._id
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
});

>>>>>>> a829d2d (Changes)
module.exports = registerUser;
