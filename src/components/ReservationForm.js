// /src/components/Reservation.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Reservation.css"; // Import styles for the reservation page

function Reservation({ user }) {
  const [reservations, setReservations] = useState([]);
  const [reservationDetails, setReservationDetails] = useState({
    name: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    // Fetch existing reservations from the backend
    const fetchReservations = async () => {
      const response = await axios.get("http://localhost:5000/api/reservations");
      setReservations(response.data);
    };

    fetchReservations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit reservation details
    const newReservation = {
      userEmail: user.email,
      name: reservationDetails.name,
      date: reservationDetails.date,
      time: reservationDetails.time,
    };

    const response = await axios.post("http://localhost:5000/api/reservations", newReservation);
    if (response.status === 200) {
      setReservations([response.data, ...reservations]);
      setReservationDetails({ name: "", date: "", time: "" });
    }
  };

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>

      {/* Reservation Form */}
      <div className="reservation-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={reservationDetails.name}
            onChange={(e) => setReservationDetails({ ...reservationDetails, name: e.target.value })}
            required
          />
          <input
            type="date"
            value={reservationDetails.date}
            onChange={(e) => setReservationDetails({ ...reservationDetails, date: e.target.value })}
            required
          />
          <input
            type="time"
            value={reservationDetails.time}
            onChange={(e) => setReservationDetails({ ...reservationDetails, time: e.target.value })}
            required
          />
          <button type="submit" className="submit-reservation-btn">Submit Reservation</button>
        </form>
      </div>

      {/* Existing Reservations */}
      <div className="existing-reservations">
        <h3>Existing Reservations</h3>
        {reservations.length > 0 ? (
          <div className="reservations-list">
            {reservations.map((reservation) => (
              <div key={reservation._id} className="reservation-card">
                <h4>{reservation.name}</h4>
                <p>{reservation.date} - {reservation.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No existing reservations.</p>
        )}
      </div>
    </div>
  );
}

export default Reservation;


