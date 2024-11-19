// /src/components/LoyaltyPoints.js
import React, { useEffect } from "react";
import "../LoyaltyPoints.css"; // Import custom styling

function LoyaltyPoints() {
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const carousel = document.getElementById("carousel");
      if (carousel) {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000); // Change every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="loyalty-points-container">
      {/* Image Carousel */}
      <div className="carousel" id="carousel">
        <img
          className="carousel-image"
          src="https://c4.wallpaperflare.com/wallpaper/8/48/971/caesars-palace-indoor-interior-mosaic-sculpture-paintings-desktop-wallpaper-widescreen-2560%C3%971440-wallpaper-preview.jpg"
          alt="Hotel 1"
        />
        <img
          className="carousel-image"
          src="https://example.com/hotel-image2.jpg"
          alt="Hotel 2"
        />
        <img
          className="carousel-image"
          src="https://example.com/hotel-image3.jpg"
          alt="Hotel 3"
        />
        <img
          className="carousel-image"
          src="https://example.com/hotel-image4.jpg"
          alt="Hotel 4"
        />
      </div>

      {/* Loyalty Program Text */}
      <div className="loyalty-program-title">
        <h2>Loyalty Program</h2>
      </div>

      {/* Three Sections: Sign Up, Earn Points, Redeem Rewards */}
      <div className="loyalty-sections">
        <div className="loyalty-section">
          <h3>Sign Up</h3>
          <p>Join our Loyalty Program and start earning points today! Sign up is quick and free.</p>
        </div>

        <div className="loyalty-section">
          <h3>Earn Points</h3>
          <p>Earn points for every stay and purchase. The more you stay, the more you earn!</p>
        </div>

        <div className="loyalty-section">
          <h3>Redeem Rewards</h3>
          <p>Use your points for amazing rewards, discounts, and exclusive offers. Your points have value!</p>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyPoints;
