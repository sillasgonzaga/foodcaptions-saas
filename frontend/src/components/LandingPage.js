// LandingPage.js
import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import HowItWorks from './HowItWorks';

const LandingPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  flex: 1;
`;

function LandingPage() {
  return (
    <LandingPageWrapper>
      <Section>
        <Hero />
      </Section>
      <Section>
        <HowItWorks />
      </Section>
    </LandingPageWrapper>
  );
}

export default LandingPage;