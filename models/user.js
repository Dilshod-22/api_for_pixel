const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    profilePicture:String,
    bio:String,
    nickName:String,
    savedPost:[{
        item:String
    }],
    yourLike:[{
        item:String
    }],
    following:[{
    }],
    follower:[{
    }],
    downloaded:String
})
module.exports = mongoose.model("People",Schema)