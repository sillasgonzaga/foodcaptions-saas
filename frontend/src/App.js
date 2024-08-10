import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import DonationSection from './components/DonationSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorks />
      <DonationSection />
    </div>
  );
}

export default App;
