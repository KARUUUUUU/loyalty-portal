// /server/models/Reservation.js
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  roomType: { type: String, required: true },
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
