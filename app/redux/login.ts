/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
  isAuthenticated: boolean;
  username: string;
  password: string;
}

const initialState: LoginState = {
  isLoggedIn: false,
  isAuthenticated: false,
  username: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setIsLoggedIn, setIsAuthenticated, setUsername, setPassword } = loginSlice.actions;

export default loginSlice.reducer;
