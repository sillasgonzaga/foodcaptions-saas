import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const makeDonation = createAsyncThunk(
  'donation/makeDonation',
  async (amount) => {
    const response = await axios.post('http://localhost:5000/donate', { amount });
    return response.data;
  }
);

const donationSlice = createSlice({
  name: 'donation',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(makeDonation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(makeDonation.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(makeDonation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default donationSlice.reducer;