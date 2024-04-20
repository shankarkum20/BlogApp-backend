const mongoose =require('mongoose')

const dbconect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log( `connected to ${mongoose.connection.host}`)
    }
catch(error){
console.log("Error in connecting to database",error);
}
}
 
module.exports=dbconect; 