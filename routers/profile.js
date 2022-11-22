const router = require("express").Router();
const People = require("../models/user")
const upload = require("./function/multer")


router.post("/addProPicture/:id",upload.array("img"),async(req,res)=>{
    const user = await People.findById(req.params.id)
    let obekt =await cloudinarye(image)
    user.profilePicture = obekt
    user.save()
    res.status(200).end
})


router.post("/addBio/:id",async(req,res)=>{
    const user = await People.findById(req.params.id)
    user.bio = req.body.bio
    user.save()
    res.json(true).status(200).end
})


router.post("/addNickName/:id",async(req,res)=>{
    const user = await People.findById(req.params.id)
    user.nickName = req.body.nickName
    user.save()
    res.json(true).status(200).end
})


module.exports = router