import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import VideoInput from './components/VideoInput';
import RecipeDisplay from './components/RecipeDisplay';
import DonateButton from './components/DonateButton';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200EA',
    },
    secondary: {
      main: '#03DAC6',
    },
  },
});

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const GlassmorphismCard = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2rem;
  width: 80%;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

function App() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleVideoSubmit = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/process_video', { url });
      setRecipe(response.data.recipe);
    } catch (err) {
      setError('An error occurred while processing the video. Please try again.');
      console.error('Error processing video:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlassmorphismCard>
          <VideoInput onSubmit={handleVideoSubmit} />
        </GlassmorphismCard>
        <GlassmorphismCard>
          {loading ? (
            <LoadingWrapper>
              <CircularProgress />
            </LoadingWrapper>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <RecipeDisplay recipe={recipe} />
          )}
        </GlassmorphismCard>
        <DonateButton />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
