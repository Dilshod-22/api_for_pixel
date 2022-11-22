const People = require("../../models/user")

const inspection = async(req,res,next)=>{
    const email = req.body.email;
    const user = await People.findOne({email:email})
    user ? res.json("bu emaildan foydalanilgan") : next()
}


const inspectionLogin = async(req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    const user = await People.findOne({email:email})
    user ? (user.password==password ? next() : res.json("parolhato")) : res.json("bunday foydalanuvchi mavjud emas")
}


module.exports = {inspection,inspectionLogin}