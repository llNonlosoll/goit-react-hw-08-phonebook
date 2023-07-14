import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleAuthRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleAuthLogin = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleAuthLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleAuthRefreshPending = state => {
  state.isRefreshing = true;
};

const handleAuthRefreshFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleAuthRefreshRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleAuthRegister)
      .addCase(logIn.fulfilled, handleAuthLogin)
      .addCase(logOut.fulfilled, handleAuthLogout)
      .addCase(refreshUser.pending, handleAuthRefreshPending)
      .addCase(refreshUser.fulfilled, handleAuthRefreshFulfilled)
      .addCase(refreshUser.rejected, handleAuthRefreshRejected),
});

export const authReducer = authSlice.reducer;
