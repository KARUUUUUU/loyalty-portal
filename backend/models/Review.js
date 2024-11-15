// /server/models/Review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  rating: { type: Number, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
