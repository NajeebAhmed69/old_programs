const mongoose = require("mongoose")
mongoose.connect(`mongodb://127.0.0.1:27017/userDB`)


const userShema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  age: { type: Number, min: 18 }
}, { timestamp: true })

module.exports = mongoose.model("User", userShema)