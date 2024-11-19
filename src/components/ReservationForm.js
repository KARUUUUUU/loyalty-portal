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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/reservations");
        setReservations(response.data);
      } catch (err) {
        console.error("Error fetching reservations:", err.response?.data || err.message);
        setError("Failed to load reservations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before submission

    // Check for empty fields
    if (!reservationDetails.name || !reservationDetails.date || !reservationDetails.time) {
      setError("All fields are required.");
      return;
    }

    const newReservation = {
      userEmail: user?.email || "guest", 
      name: reservationDetails.name,
      date: reservationDetails.date,
      time: reservationDetails.time,
    };

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/reservations", newReservation);

      if (response.status === 201) {
        // Add the new reservation to the state
        setReservations([response.data, ...reservations]);
        setReservationDetails({ name: "", date: "", time: "" }); // Clear the form
      }
    } catch (err) {
      console.error("Error submitting reservation:", err.response?.data || err.message);
      setError(
        err.response?.data?.error || "Failed to submit reservation. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Reservation Form */}
      <div className="reservation-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={reservationDetails.name}
            onChange={(e) =>
              setReservationDetails({ ...reservationDetails, name: e.target.value })
            }
            required
          />
          <input
            type="date"
            value={reservationDetails.date}
            onChange={(e) =>
              setReservationDetails({ ...reservationDetails, date: e.target.value })
            }
            required
          />
          <input
            type="time"
            value={reservationDetails.time}
            onChange={(e) =>
              setReservationDetails({ ...reservationDetails, time: e.target.value })
            }
            required
          />
          <button type="submit" className="submit-reservation-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Reservation"}
          </button>
        </form>
      </div>

      {/* Existing Reservations */}
      <div className="existing-reservations">
        <h3>Existing Reservations</h3>
        {loading && reservations.length === 0 ? (
          <p>Loading reservations...</p>
        ) : reservations.length > 0 ? (
          <div className="reservations-list">
            {reservations.map((reservation) => (
              <div key={reservation._id} className="reservation-card">
                <h4>{reservation.name}</h4>
                <p>
                  {reservation.date} - {reservation.time}
                </p>
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



