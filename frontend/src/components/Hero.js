import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import heroImage from '../assets/hero-image.jpg';
const API_URL = process.env.REACT_APP_API_URL;

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
  width: 80%;
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;


const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
  box-sizing: border-box;
  text-align: left;
  font-size: 1rem;
`;

const RecipeText = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
`;



const CloseButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

function Hero() {
  const [url, setUrl] = useState('');
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setRecipe('');

    try {
      const response = await axios.post(`${API_URL}/process_video`, { url });
      setRecipe(response.data.recipe);
      setIsModalOpen(true); // Open the modal when the recipe is received
    } catch (err) {
      setError('An error occurred while processing the video. Please try again.', err);
      console.error('Error processing video:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Transform Cooking Videos into Recipes Instantly</HeroTitle>
        <HeroSubtitle>Easily turn your favorite cooking videos into written recipes in just one click.</HeroSubtitle>
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
      </HeroContent>
      <HeroImageWrapper>
        <HeroImg src={heroImage} alt="Person cooking while watching a video" />
      </HeroImageWrapper>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <h3>Generated Recipe:</h3>
            <RecipeText>{recipe}</RecipeText>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </HeroWrapper>
  );
}

export default Hero;
