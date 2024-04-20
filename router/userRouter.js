const{ userRegister,userLogin} = require("../controller/UserController")
const express =require("express")


const router =express.Router()

router.post("/user/register",userRegister)
router.post("/user/Login",userLogin)

module.exports =router
   