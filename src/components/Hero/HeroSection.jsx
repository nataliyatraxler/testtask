import React from 'react';
import camperImage from '../../assets/images/campers.jpeg';
import './HeroSection.css';

const HeroSection = () => (
  <div className="hero-container">
    <img src="/src/assets/images/campers.jpeg" alt="Campers of your dreams" class="hero-image" />

    <div className="hero-text">
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <button 
        className="view-now-button" 
        onClick={() => window.location.href = '/catalog'}
      >
        View Now
      </button>
    </div>
  </div>
);

export default HeroSection;
