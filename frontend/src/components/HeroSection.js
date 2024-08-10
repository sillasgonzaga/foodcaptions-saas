import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transform Cooking Videos into Recipes Instantly</h1>
        <p>Eliminate the need to watch entire videos. Get the recipe directly.</p>
        <div className="input-group">
          <input type="text" placeholder="Paste your video link..." />
          <button>Get Recipe</button>
        </div>
      </div>
      <div className="hero-image">
          <img src="x.png" alt="Cooking illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
