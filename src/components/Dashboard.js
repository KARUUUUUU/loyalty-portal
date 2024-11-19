// /src/components/Dashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import FlipCard from "../FlipCard"; // Ensure FlipCard is imported
import "../Dashboard.css";

function Dashboard({ user = {}, onLogout = () => console.warn("onLogout function not provided") }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      onLogout(); // Executes the provided logout function
      navigate("/login"); // Redirects to the login page
    }
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1 className="hotel-title">Aire Hotel</h1>
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="dashboard-divider" />

      {/* Welcome Message */}
      <div className="dashboard-intro">
        <h2>Welcome, {user?.email || "Guest"}</h2>
        <p>
          Your dashboard is your one-stop destination for managing reservations,
          tracking loyalty points, and exploring services. Make the most of your experience!
        </p>
      </div>

      {/* Flip Cards Section */}
      <div className="flip-cards-container">
        <FlipCard
          title="Dashboard"
          description="View your loyalty points and rewards."
          path="/loyalty-points" // Update path for Loyalty Points page
          image="https://wallpapers.com/images/featured-full/gold-iphone-chw3sgdl3jnkry9t.jpg"
        />
        <FlipCard
          title="Reservation"
          description="Make a reservation for your next visit."
          path="/reservation" // Update path for Reservation page
          image="https://wallpapers.com/images/featured-full/gold-iphone-chw3sgdl3jnkry9t.jpg"
        />
        <FlipCard
          title="Products"
          description="Browse available products or services."
          path="/products" // Update path for Products page
          image="https://wallpapers.com/images/featured-full/gold-iphone-chw3sgdl3jnkry9t.jpg"
        />
        <FlipCard
          title="Reviews"
          description="Submit and view customer feedback."
          path="/reviews" // Update path for Reviews page
          image="https://wallpapers.com/images/featured-full/gold-iphone-chw3sgdl3jnkry9t.jpg"
        />
      </div>
    </div>
  );
}

export default Dashboard;






