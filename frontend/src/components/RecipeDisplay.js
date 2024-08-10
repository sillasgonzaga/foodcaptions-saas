import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const RecipeText = styled(Typography)`
  white-space: pre-wrap;
  word-break: break-word;
`;

function RecipeDisplay({ recipe }) {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Your Recipe
      </Typography>
      <RecipeText variant="body1">{recipe}</RecipeText>
    </div>
  );
}

export default RecipeDisplay;