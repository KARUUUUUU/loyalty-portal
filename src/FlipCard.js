// /src/components/FlipCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FlipCard.css'; // Import the CSS file for flip cards

const FlipCard = ({ title, description, path, image }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundImage: `url(${image})` }}>
          <div className="card-title">{title}</div>
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
          <Link to={path}>Go to Page</Link>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

