import React from 'react';
import styled from 'styled-components';
import { FaLink, FaFileAlt, FaDollarSign } from 'react-icons/fa';

const HowItWorksWrapper = styled.div`
  padding: 4rem 2rem;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Step = styled.div`
  text-align: center;
  width: 200px;
`;

const StepIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

function HowItWorks() {
  return (
    <HowItWorksWrapper>
      <Title>How It Works</Title>
      <StepsContainer>
        <Step>
          <StepIcon><FaLink /></StepIcon>
          <StepTitle>Paste Your Video Link</StepTitle>
          <p>Simply copy and paste the YouTube video URL</p>
        </Step>
        <Step>
          <StepIcon><FaFileAlt /></StepIcon>
          <StepTitle>No Extra Info Required</StepTitle>
          <p>Our AI does all the work for you</p>
        </Step>
        <Step>
          <StepIcon><FaDollarSign /></StepIcon>
          <StepTitle>Support me?</StepTitle>
          <p>
            Unfortunately, FoodCaptions is not free for me to keep it running.
            Help me keep this free service online.
            </p>
            <p>  
            <a href="https://buy.stripe.com/7sI2aG5S575maoodQQ" target="_blank" rel="noopener noreferrer">
               Donate here
            </a>
          </p>
        </Step>
      </StepsContainer>
    </HowItWorksWrapper>
  );
}

export default HowItWorks;