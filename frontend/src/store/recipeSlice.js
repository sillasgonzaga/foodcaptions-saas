import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const processVideo = createAsyncThunk(
  'recipe/processVideo',
  async (url) => {
    const response = await axios.post('http://localhost:5000/process_video', { url });
    return response.data.recipe;
  }
);

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    text: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(processVideo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(processVideo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.text = action.payload;
      })
      .addCase(processVideo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;