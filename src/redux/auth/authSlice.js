// Redux Toolkit's createSlice function
import { createSlice } from '@reduxjs/toolkit';
// Async operations for authentication
import { register, logIn, logOut, refreshUser } from './operations';

// Initial Auth State
const initialState = {
  // Initial user object
  user: { name: null, email: null },
  // Initial token value
  token: null,
  // Initial login status
  isLoggedIn: false,
  // Initial refreshing status
  isRefreshing: false,
};

// Reducer function for handling successful registration
const handleAuthRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

// Reducer function for handling successful login
const handleAuthLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

// Reducer function for handling logout
const handleAuthLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

// Reducer function for handling refresh user pending
const handleAuthRefreshPending = state => {
  state.isRefreshing = true;
};

// Reducer function for handling successful user refresh
const handleAuthRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

// Reducer function for handling failed user refresh
const handleAuthRefreshRejected = state => {
  state.isRefreshing = false;
};

// Create the authSlice using createSlice function from Redux Toolkit
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleAuthRegister) // Handle successful register action
      .addCase(logIn.fulfilled, handleAuthLogin) // Handle successful login action
      .addCase(logOut.fulfilled, handleAuthLogout) // Handle successful logout action
      .addCase(refreshUser.pending, handleAuthRefreshPending) // Handle user refresh pending action
      .addCase(refreshUser.fulfilled, handleAuthRefreshFulfilled) // Handle successful user refresh action
      .addCase(refreshUser.rejected, handleAuthRefreshRejected), // Handle failed user refresh action
});

// Export the authReducer from the authSlice
export const authReducer = authSlice.reducer;
