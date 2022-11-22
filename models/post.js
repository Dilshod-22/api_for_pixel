const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    userId:String,
    post:[{
        userId:String,        
        author:String,
        uathorProPicture:String,
        name:String,
        picture:Array,
    }]

})
module.exports = mongoose.model("Post",Schema)