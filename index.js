const express = require('express')
const app = express()
const cors = require('cors')
const blogs = require('./api/blogsData.json');
const dotenv = require('dotenv');
const dbconect = require('./database/DbConnect');
const path =require("path");
const multer =require("multer")
const mongoose =require("mongoose")

dotenv.config()

const port = process.env.PORT || 5000;

const MONGO_URL =process.env.MONGO_URL

// middleware
app.use(cors())
app.use(express.json())

const db=async()=>{

  try{
  await   mongoose.connect(`${MONGO_URL}`)
   console.log( `connected to ${mongoose.connection.host}`)
 }
 catch(error){
 console.log("Error in connecting to database",error);
 }

}

db();



//image storage engine
const storage =multer.diskStorage({
  destination:'./upload/Blogimage', 
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload =multer({storage:storage})

//create upload endpoint for image
app.use('/Blogimage',express.static('upload/Blogimage'))

app.post("/upload",upload.single('Blogimage'),(req,res)=>{
  res.json({
    success:true,
    image_url:`htttp://localhost:${port}/Blogimage/${req.file.filename}`
  })
})
 



app.use("/api/v1",require("./router/userRouter"))
app.use("/api/v1",require("./router/blogroute"))
app.get('/', (req, res) => {
    res.send("Blog server is running!")
});

app.get('/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id)
  const blog = blogs.filter(b => b.id === id);
  // console.log(blog)
  res.send(blog)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})