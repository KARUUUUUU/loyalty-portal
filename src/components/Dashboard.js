// /src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import FlipCard from "../FlipCard"; // Import the FlipCard component
import "../Dashboard.css"; // Import custom styles for the dashboard

function Dashboard({ user }) {
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);

  useEffect(() => {
    // Fetch user's loyalty points from the backend
    const fetchUserPoints = async () => {
      const response = await axios.get(`http://localhost:5000/api/users/${user.uid}`);
      setLoyaltyPoints(response.data.loyaltyPoints);
    };

    if (user) fetchUserPoints();
  }, [user]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome, {user ? user.email : "Guest"}</h2>
        <p>Your Loyalty Points: {loyaltyPoints}</p>
      </div>

      <div className="flip-cards-container">
        <FlipCard
          title="Dashboard"
          description="View your loyalty points and rewards."
          path="/dashboard"
          image="https://wallpapers.com/images/featured-full/gold-iphone-chw3sgdl3jnkry9t.jpg"
        />
        <FlipCard
          title="Reservation"
          description="Make a reservation for your next visit."
          path="/reservation"
          image="https://wallpapers.com/images/featured-full/gold-iphone-chw3sgdl3jnkry9t.jpg"
        />
        <FlipCard
          title="Products"
          description="Browse available products or services."
          path="/products"
          image="https://wallpapers.com/images/featured-full/gold-iphone-chw3sgdl3jnkry9t.jpg"
        />
        <FlipCard
          title="Reviews"
          description="Submit and view customer feedback."
          path="/reviews"
          image="https://wallpapers.com/images/featured-full/gold-iphone-chw3sgdl3jnkry9t.jpg"
        />
      </div>
    </div>
  );
}

export default Dashboard;


