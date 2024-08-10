import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0 20px 20px 0;
`;

const HeroImage = styled.div`
  /* You'll need to add the actual image here */
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
  margin-top: 2rem;
`;

function Hero() {
  return (
    <HeroWrapper>
      <HeroTitle>Transform Cooking Videos into Recipes Instantly</HeroTitle>
      <HeroSubtitle>Easily turn your favorite cooking videos into written recipes in just a few clicks.</HeroSubtitle>
      <InputWrapper>
        <Input type="text" placeholder="Paste YouTube link..." />
        <Button>Get Recipe</Button>
      </InputWrapper>
      <HeroImage />
    </HeroWrapper>
  );
}

export default Hero;