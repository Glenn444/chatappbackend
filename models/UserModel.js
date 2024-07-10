const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "provide name"],
    },
<<<<<<< HEAD
profile_pic:{
    type: String,
}
  
},{
    timestamps : true
})
=======
    profile_pic: {
      type: String,
    },
    userId: {
        type: String,
        required: [true, "provide userId"],
    }
  },
  {
    timestamps: true,
  }
);
>>>>>>> a829d2d (Changes)

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
