const express = require("express")
const app = express()
const bodyParser = require("body-parser");
const authRouter = require("./routers/auth")
const postRouter = require("./routers/post")
const actionRouter = require("./routers/action")
const mongoose = require("mongoose")


mongoose.connect("mongodb://127.0.0.1:27017/chatmongodb+srv://moxirbek:dilshodbek0422@cluster0.fp1t4.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connect to mongoose");
})
.catch((err)=>{
    console.log("wrong connect to mongoose");
})

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("views engine","ejs")

app.use("/",(req,res)=>{
    res.send("this api for pixel wallpaper")
})
app.use("/auth",authRouter)
app.use("/post",postRouter)
app.use("/action",actionRouter)



const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log("server is runnig");
})