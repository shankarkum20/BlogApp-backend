const mongoose =require('mongoose')
const dotenv =require('dotenv')

dotenv.config()

const MONGO_URL =process.env.MONGO_URL




const dbconect=async()=>{
    try{
        await mongoose.connect(`${MONGO_URL}`)
        console.log( `connected to ${mongoose.connection.host}`)
    }
catch(error){
console.log("Error in connecting to database",error);
}
}
 
module.exports=dbconect; 