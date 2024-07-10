
const UserModel = require("../models/UserModel")

async function updateUserDetails(request,response){
    try {
   
        const { profile_pic, id } = request.body

        await UserModel.updateOne({ _id : id },{
            profile_pic
        })

        return response.json({
            message : "user update successfully",
           
            success : true
        })


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = updateUserDetails