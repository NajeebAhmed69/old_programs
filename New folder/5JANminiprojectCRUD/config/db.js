const mongoose=require("mongoose")


const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MONGODB CONNECTED SUCCESSFULLY');
        
    } catch (error) {
        console.error("MONGODB CONNECTION FAILED",error.message)

    }
};
module.exports=connectDB;