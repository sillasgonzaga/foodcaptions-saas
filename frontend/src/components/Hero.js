import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import heroImage from '../assets/x.png';

const HeroWrapper = styled.div`
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: left;
  padding-right: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
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

const HeroImageWrapper = styled.div`
  flex: 1;
  max-width: 50%;
`;

const HeroImg = styled.img`
  width: 100%;
  height: auto;
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px 0;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const RecipeOutput = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: left;
`;

function Hero() {
  const [url, setUrl] = useState('');
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setRecipe('');

    try {
      const response = await axios.post('http://localhost:5000/process_video', { url });
      setRecipe(response.data.recipe);
    } catch (err) {
      setError('An error occurred while processing the video. Please try again.');
      console.error('Error processing video:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Transform Cooking Videos into Recipes Instantly</HeroTitle>
        <HeroSubtitle>Easily turn your favorite cooking videos into written recipes in just a few clicks.</HeroSubtitle>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input 
              type="text" 
              placeholder="Paste YouTube link..." 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button type="submit">Get Recipe</Button>
          </InputWrapper>
        </form>
        {isLoading && <LoadingSpinner />}
        {error && <p style={{color: 'red'}}>{error}</p>}
        {recipe && (
          <RecipeOutput>
            <h3>Generated Recipe:</h3>
            <pre>{recipe}</pre>
          </RecipeOutput>
        )}
      </HeroContent>
      <HeroImageWrapper>
        <HeroImg src={heroImage} alt="Person cooking while watching a video" />
      </HeroImageWrapper>
    </HeroWrapper>
  );
}

export default Hero;