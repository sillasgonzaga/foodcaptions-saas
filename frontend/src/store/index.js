import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeSlice';
import donationReducer from './donationSlice';

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    donation: donationReducer,
  },
});