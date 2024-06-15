// Offer.jsx

import React from 'react';
import exclusive from '../assets/ex.jpg';
import './Offer.css'

const Offer = () => {
  return (
    <div className="offers">
      <div className="content">
        <div className="left">
          <h1>Exclusive Offer</h1>
          <h1>Just for You</h1>
          <p>Get up to 50% off on</p>
          <p>Best Sellers Products</p>
          <button>Shop Now</button>
        </div>
        <div className="right">
          <img src={exclusive} alt="Exclusive Offer" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
