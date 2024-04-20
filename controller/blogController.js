const blogmodel = require('../model/blogmodel');
const blog =require('../model/blogmodel') 

const addblog=async(req,res)=>{
    const {Title,Category,Reading_Time,Tag,Content,Blogimage,Author,Email}=req.body;
     
    if(!Title || !Category  || !Reading_Time || !Tag  || !Content || !Blogimage || !Author || ! Email ){
        return res.status(400).json({
            success:false,
            message:"Please provide all details"
        })
    }
    
        const  date=Date.now()
        const newblog =await blog.create({
            Title,Category,Publish_Date:date,Reading_Time,Tag,Content,Blogimage,Author,Email
        })
        res.status(200).json({
            success:true,
            message:"Blog Posted successful"
        })
    
    
}

const listblog=async(req,res)=>{
    const{ Email }=req.params;
    const bloglist =await blog.find({Email:Email})
    if(bloglist){
        if(bloglist.length > 0){
            res.status(200).json({
                bloglist
    })
}else{
    res.status(200).json({
        success:false,
        message:"No blog posted yet"
    })
}
        
}
 

}

const deleteblog=async(req,res)=>{
    const {userid}=req.body;
    const del =  await blog.deleteOne({_id:userid})
    if(del){
    res.json({
        success:true, 
        message:"Blog Succesfully Deleted"
    })}
    else{ 
        res.json({
            success:false,
             message:"something went wrong"
        })
    }
}

module.exports={addblog,listblog,deleteblog}