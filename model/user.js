const mongoose = require("mongoose")

const user =new mongoose.Schema({
    FirstName:{
        type:String,
        require:true
    },
    LastName:{
        type:String,
        require:true,

    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Phone:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("users",user)


 