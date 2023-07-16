// Redux Toolkit's createSlice function
import { createSlice } from '@reduxjs/toolkit';

// Create the filterSlice using createSlice function from Redux Toolkit
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    // Reducer function for setting the filter value
    setFilter: (_, { payload }) => payload,
  },
});

// Export the action creator
export const { setFilter } = filterSlice.actions;
// Export the reducer
export const filterReducer = filterSlice.reducer;
