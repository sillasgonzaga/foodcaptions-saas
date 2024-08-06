import React from 'react';

function RecipeDisplay({ recipe }) {
  return (
    <div className="recipe">
      <h2>Recipe</h2>
      <pre>{recipe}</pre>
    </div>
  );
}

export default RecipeDisplay;