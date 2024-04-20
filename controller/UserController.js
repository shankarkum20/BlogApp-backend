const user =require("../model/user")
const bcrypt =require("bcrypt") 
const jwt =require("jsonwebtoken")

const userRegister = async(req,res)=>{
    const {FirstName,LastName,Phone,Email,Password}=req.body
    if(!FirstName || !LastName || !Phone || !Email || !Password){
        return  res.status(400).json({
            success:false,
            message:"Please field all Field"
        })
    } 
     const check= await user.findOne({Email})
     if(check){
         res.status(400).json({
            success:false,
            message:"Email already registered please login!!"
        })
     }
      else
    {  //hashing password
    var salt =bcrypt.genSaltSync(10);
    const hashedpassword =await bcrypt.hash(Password,salt)
    
    const nusers = await user.create({
        FirstName,LastName,Phone,Email,Password:hashedpassword
   }); 
   
   const data={
    user:{
        id:user._id
    }
   }

   const token =jwt.sign(data,'secret_blog')
    
    res.status(200).json({
    success:true,  
    message:"User registered Successfully!!",
    token,
    })}
     
   
}

const userLogin= async(req,res)=>{
 const {Email,Password} =req.body;

 if(!Email || !Password){
    return  res.status(400).json({
        success:false, 
        message:"Please fill all field "
        
    })
 }

  const Luser =await user.findOne({Email})
  if(Luser){
    const match = await bcrypt.compare(Password,Luser.Password)
     if(match){
        const user={
                name:`${Luser.FirstName} ${Luser.LastName}`,
                Email:Luser.Email
            }
        
        res.status(200).json({
            success:true,
            message:"Logged in successfully ",
            user,
        })
     } else{
        res.json({
            success:false,message:"Wrong Password"
        })
     }   
    }
    else{
        res.json({success:false,message:"User not found Please Registered"})
    }
  }

  
  
  







module.exports={userRegister,userLogin}