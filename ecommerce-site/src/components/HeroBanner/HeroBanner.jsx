// Hero.jsx

import React from 'react';
import './HeroBanner.css';
import handImg from '../assets/hand_icon.png';
import arrowImg from '../assets/arrow.png';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <>
      <div className="heroBanner">
        <div className="left">
          <h2>Discover Your Style</h2>
          <div>
            <div className="hand-icon">
              <p>explore</p>
              <img src={handImg} alt="" />
            </div>
            <p>the latest</p>
            <p>fashion trends</p>
          </div>
          <div className="hero-btn">
            <div>Shop Now</div>
            <img src={arrowImg} alt="" />
          </div>
        </div>
        <div className="right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
