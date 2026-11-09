const express=reuire("express");
const dotenv=reuire("dotenv")
const connectDB=require("./config/db")

dotenv.config()
connectDB()
const app=express()
app.use(expressjson())

app.use('/api', requires('./routes/userRoutes'))

const PORT= process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    
})