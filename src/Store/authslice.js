// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
  },
});

export const { login, logout, setError, clearError, register } = authSlice.actions;

export default authSlice.reducer;
