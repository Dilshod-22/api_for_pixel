const router = require("express").Router()
const People = require("../models/user")
const {inspection,inspectionLogin} = require("./function/auth")

router.get("/allUser",async(req,res)=>{
    const users = await People.find()
    res.json(users).status(200).end
})

router.post("/login",inspectionLogin,async(req,res)=>{
    const user = await People.findOne({email:req.body.email})
    res.json(user)
})

router.post("/register",inspection,async(req,res)=>{
    const user = new People(req.body)
    await user.save()
    res.json(true).status(200).end()
})





module.exports = router