// /server/routes/productRoutes.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const router = express.Router();

// Define the path to the CSV file
const csvFilePath = path.join(__dirname, "../data/hotel_loyalty_products.csv");

// Get all products
router.get("/", (req, res) => {
  const products = [];
  
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on("data", (row) => {
      products.push(row);
    })
    .on("end", () => {
      res.status(200).json(products);
    })
    .on("error", (error) => {
      res.status(500).json({ error: "Error reading CSV file" });
    });
});

module.exports = router;

