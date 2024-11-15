// /src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ReservationForm from "./components/ReservationForm";
import ProductListing from "./components/ProductListing";
import ReviewSection from "./components/ReviewSection";
import './styles/global.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = sessionStorage.getItem("user");
    if (currentUser) setUser(JSON.parse(currentUser));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/reservation" element={<ReservationForm />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/reviews" element={<ReviewSection />} />
          <Route path="/" element={<Login setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



