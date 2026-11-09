const User=reuire("../models/User");



//create user
exports.createUser=async(req,res)=>{
    try {
        const user=await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
// READ ALL
exports.getAllUsers= async(req,res)=>{
    const users=await User.find();
    res.json(users);
}
// READ ONE BY ID
exports.getOneUser=async(req,res)=>{
    const user=await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    res.json(user)
}

// UPDATE USER
exports.updateUser= async(req,res)=>{
    const user=await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
     res.json(user);
}

//Delete User
exports.deleteUser=async (req,res)=>{
    const deletedUser=await User.findByIdAndDelete(req.params.id);
    if(!deletedUser){
        return res.status(404).json({message:"User not found"})
    }
    res.json({message:"User deletd successfully"})
}