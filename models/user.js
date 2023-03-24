const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        tel: {
            type:Number
        },
        
    },
    {
        timestamp: true,
        versionKey: false
    }
)

module.exports = mongoose.model("users", UserScheme)