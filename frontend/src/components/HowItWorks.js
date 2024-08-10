import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <img src="step1-icon.png" alt="Step 1" />
          <h3>Paste Your Video Link</h3>
          <p>Simply paste the video link and get the recipe.</p>
        </div>
        <div className="step">
          <img src="step2-icon.png" alt="Step 2" />
          <h3>No Extra Effort Required</h3>
          <p>The service extracts the recipe for you instantly.</p>
        </div>
        <div className="step">
          <img src="step3-icon.png" alt="Step 3" />
          <h3>Support Us with a Donation</h3>
          <p>Help us keep the service running with a small donation.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
