const router = require("express").Router();
const People = require("../models/user")



router.post("/follow/:id",async(req,res)=>{
    const users = await People.findById(req.body.userId).select({yourLike:0,savedPost:0,password:0,email:0})
    const creatives = await People.findById(req.params.id).select({yourLike:0,savedPost:0,password:0,email:0})
    const user = await People.findById(req.body.userId)
    const creative = await People.findById(req.params.id)
    await creative.updateOne({ $push: { follower: users } });
    await user.updateOne({ $push: { following: creatives } });
    res.json(true).end()
})



router.post("/unfollow/:id",async(req,res)=>{
    const users = await People.findById(req.body.userId).select({yourLike:0,savedPost:0,password:0,email:0})
    const creatives = await People.findById(req.params.id).select({yourLike:0,savedPost:0,password:0,email:0})
    const user = await People.findById(req.body.userId)
    const creative = await People.findById(req.params.id)
    let ob = user.following
    let ob2 = creative.follower
    let result = ob.findIndex(item => item._id == req.params.id)
    result >=0 ? ob.pop(result) : res.json("bunday post mavjud emas");
    let result2 = ob2.findIndex(item => item._id == req.body.userId)
    result2 >=0 ? ob2.pop(result) : res.json("bunday post mavjud emas");
    creative.save()
    user.save()
    // await creative.updateOne({ $pull: { follower: users } });
    // await user.updateOne({ $pull: { following: creatives } });
    res.json(true).end()    
})



module.exports = router