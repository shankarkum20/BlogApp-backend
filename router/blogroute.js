const {addblog,listblog, deleteblog} = require("../controller/blogController")
const express =require("express")


const router =express.Router()

router.post("/blog/addnew",addblog);
router.get("/blog/:Email",listblog)
router.post("/blog/delete",deleteblog)

module.exports =router 