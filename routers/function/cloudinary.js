const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary")



cloudinary.config({ 
    cloud_name: 'dqfe2cmwl', 
    api_key: '533348461479987', 
    api_secret: '-_kUpNdAo_3U11Hhe04efq3p4Rc' 
});




const cloudinarye = async(image)=>{
    let obekt = []
    for(var i=0;i<image.length;i++){
        if(image[i]){
            const result =await cloudinary.uploader.upload(image[i].path);
            obekt.push(result.secure_url)
        }
        else{
            obekt.push()
        }
    }
    return obekt
}



// Multer config
module.exports = cloudinarye