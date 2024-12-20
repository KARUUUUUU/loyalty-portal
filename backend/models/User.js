// /server/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  loyaltyPoints: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
