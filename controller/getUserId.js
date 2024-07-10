const UserModel = require("../models/UserModel");


const getUserId = async(req, res)=>{
    try {
        const {id} = req.params;
        const checkUser = await UserModel.findOne({userId : id});
        if (checkUser){
           
        return res.status(200).json(checkUser._id);
        }else{
            return res.status(404).json({ message: "User not found" });
        }
        
    } catch (error) {
        console.log(error);
        //throw new Error(error);
    }

}

module.exports = getUserId;