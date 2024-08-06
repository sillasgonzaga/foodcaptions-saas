import React from 'react';
import { useSelector } from 'react-redux';
import VideoInput from './components/VideoInput';
import RecipeDisplay from './components/RecipeDisplay';
import DonateButton from './components/DonateButton';

function App() {
  const recipe = useSelector((state) => state.recipe.text);
  const recipeStatus = useSelector((state) => state.recipe.status);

  return (
    <div className="App">
      <h1>FoodCaptions</h1>
      <VideoInput />
      {recipeStatus === 'loading' && <p>Processing video...</p>}
      {recipe && <RecipeDisplay recipe={recipe} />}
      <DonateButton />
    </div>
  );
}

export default App;