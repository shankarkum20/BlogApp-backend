const mongoose =require('mongoose')


const blog= new mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    Category:{
        type:String,
        require:true
    },
    Author:{
        type:String,
        require:true
    },
    Blogimage:{
        type:String,
        require:true
    },
    Content:{
        type:String,
        require:true
    },
    Tag:{
        type:String,
        require:true
    },
    Reading_Time:{
        type:String,
        require:true
    },
    Publish_Date:{
        type:Date,
        require:true
    },
    Email:{
        type:String,
        require:true
    },

})
module.exports=mongoose.model('blogs',blog)