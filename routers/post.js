const router = require("express").Router()
const Post = require("../models/post")
const cloudinarye = require("./function/cloudinary")
const upload = require("./function/multer")
const People = require("../models/user")

router.post("/savedpost/:id",async(req,res)=>{
    let id = req.body.userId
    let user = await People.findById(id)
    let savePost = await Post.findById(req.params.id)    
    let allpost = savePost.post
    let result = allpost.findIndex(item => item._id === req.params.id)
    result ? user.savedPost.push(result) : res.json("bunday post mavjud emas")  
})


router.post("/savedpostDelete/:id",async(req,res)=>{
    let id = req.body.userId
    let user = await People.findById(id)
    let savePost = await Post.findOne({userId:id})    
    let allpost = savePost.post
    let result = allpost.findIndex(item => item._id === req.params.id)
    result ? user.savedPost.push(result) : res.json("bunday post mavjud emas")  
})



router.post("/newPost",upload.array("img"),async(req,res)=>{
    let image = req.files;
    let obekt =await cloudinarye(image)
    const id = req.body.userId
    const user = await Post.findOne({userId:id})
    if(!user){
        const newPost = new Post({
            userId:req.body.userId,
            post:[{
                userId:req.body.userId,
                author:req.body.author,
                name:req.body.name,
                picture:obekt
            }]
        })
        await newPost.save()
    }else{
        const post = {
            author:req.body.author,
            name:req.body.name,
            picture:obekt
        }
        user.post.push(post)
        user.save()
    }
    res.json(true).end()
})





router.delete("/deletePost/:id",async(req,res)=>{
    const user = req.body.userId;
    const post = await Post.findOne({userId:user})
    let ob=post.post
    let result = ob.findIndex(item => item._id === req.params.id)
    result ? post.post.pop(result) : res.json("bunday post mavjud emas")
    post.save()
    res.json(true).end()
})



module.exports = router