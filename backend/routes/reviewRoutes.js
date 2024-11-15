// /server/routes/reviewRoutes.js
const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

// Post a review
router.post("/", async (req, res) => {
  const { review, rating, productId } = req.body;
  const newReview = new Review({ review, rating, productId });

  try {
    await newReview.save();
    res.status(201).json({ message: "Review submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting review" });
  }
});

module.exports = router;
