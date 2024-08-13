import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Success from './components/Success';
import Cancel from './components/Cancel';

const AppWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #fcf7f0;
`;

// function App() {
// return (
//    <AppWrapper>
//      <Header />
//      <Hero />
//      <HowItWorks />
//      <Footer />
//    </AppWrapper>
//  );
//}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HowItWorks />
            </>
          } />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;