const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Allow cross-origin requests from frontend
app.use(express.json()); // Parse incoming JSON requests

// Serve static files (like images or CSV files) from the "public" folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Route to serve hotel_loyalty_products.csv
app.get("/hotel_loyalty_products.csv", (req, res) => {
  console.log("Serving products.csv...");
  res.sendFile(path.join(__dirname, "public", "hotel_loyalty_products.csv"), (err) => {
    if (err) {
      console.error("Error sending CSV file:", err);
      res.status(500).send("Server Error: Unable to fetch the CSV file.");
    }
  });
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Exit if unable to connect to MongoDB
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
