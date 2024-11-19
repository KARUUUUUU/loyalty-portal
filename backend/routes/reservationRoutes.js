const express = require("express");
const Reservation = require("../models/Reservation");
const router = express.Router();

// Create a reservation
router.post("/", async (req, res) => {
  const { name, date, time, userEmail } = req.body;

  // Input validation
  if (!name || !date || !time || !userEmail) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if the reservation time is valid
  if (isNaN(new Date(date).getTime()) || !/^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/.test(time)) {
    return res.status(400).json({ error: "Invalid date or time format." });
  }

  const newReservation = new Reservation({ name, date, time, userEmail });

  try {
    const savedReservation = await newReservation.save();
    res.status(201).json({
      message: "Reservation created successfully",
      reservation: savedReservation,
    });
  } catch (error) {
    console.error("Error creating reservation:", error.message);
    res.status(500).json({ error: "Error creating reservation. Please try again later." });
  }
});

// Get all reservations (Optional date filtering)
router.get("/", async (req, res) => {
  const { date } = req.query; // Optional query parameter to filter by date

  try {
    let query = {};
    if (date) {
      query.date = date; // Filter by specific date if provided
    }

    const reservations = await Reservation.find(query).sort({ date: 1, time: 1 });
    if (reservations.length === 0) {
      return res.status(404).json({ message: "No reservations found for the specified date." });
    }
    res.status(200).json(reservations);
  } catch (error) {
    console.error("Error fetching reservations:", error.message);
    res.status(500).json({ error: "Error fetching reservations. Please try again later." });
  }
});

module.exports = router;


