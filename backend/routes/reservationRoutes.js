// /server/routes/reservationRoutes.js
const express = require("express");
const Reservation = require("../models/Reservation");
const router = express.Router();

// Create reservation
router.post("/", async (req, res) => {
  const { name, date, roomType } = req.body;
  const newReservation = new Reservation({ name, date, roomType });

  try {
    await newReservation.save();
    res.status(201).json({ message: "Reservation created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating reservation" });
  }
});

module.exports = router;
