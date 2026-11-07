const express=require("express")

const app=express()







app.get("/",(req,res)=>{
    res.send("Hello world")
})


// CREATE USER
// app.get("/create", async(req,res)=>{
// let createdUser=await userModel.create({
    //     name:"NAJEEB AHMED",
    //     age:22,
//     city:"HYDERABAD",
//     email:"najeebahmed"
// })
// res.send(createdUser)

// })

const usermodel = require("./usermodel")
// app.use(express.json())
// CREATE USER
app.get("/create", async(req,res)=>{
let createdUser=await usermodel.create({
    name:"Najeeb Ahmed",
    email:"najeebahmed@example.com",
    age:22
})
res.send(createdUser)
})


//UPDATE USER
// app.get("/updated", async(req,res)=>{
// let updatedUser=await userModel.findOneAndUpdate({name:"NAJEEB AHMED"},{name:"Najeeb Ahmed Ghori"},{new:true})
// res.send(updatedUser)

// })


//Get All: await User.find()
// app.get("/read", async(req,res)=>{
// let allUser=await userModel.find();
// res.send(allUser)
// console.log(allUser);
//})

// //Get One
// Get All: await User.find()
// app.get("/read", async(req,res)=>{
// let allUser=await userModel.find({name:"Najeeb Ahmed"});
// res.send(allUser)
// console.log(allUser);
// })
// DELETE USER
// app.get("/delete",async(req,res)=>{
//     let deletedUser=await userModel.findOneAndDelete({name:"Najjeb Ahmed Ghori"})
//     res.send(deletedUser)
//     console.log(deletedUser);
    
// })

app.listen(3000)
