import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #fcf7f0;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Hero />
      <HowItWorks />
      <Footer />
    </AppWrapper>
  );
}

export default App;