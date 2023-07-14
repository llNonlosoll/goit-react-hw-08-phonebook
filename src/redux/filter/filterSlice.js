// import createSlice function
import { createSlice } from '@reduxjs/toolkit';

// filterSlice
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
