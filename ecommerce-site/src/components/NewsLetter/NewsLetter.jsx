import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with the latest trends and offers!</p>
      <div className="input-container">
        <input type="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
