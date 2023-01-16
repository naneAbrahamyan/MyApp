import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isLoggedin: boolean | null;
  email: string | null;
  password: string | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedin: null,
  email: null,
  password: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
      }>,
    ) => {
      state.email = action.payload.email;
      state.isLoggedin = true;
      state.password = action.payload.password;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.email = null;
      state.password = null;
      state.isLoggedin = false;
      state.error = action.payload;
    },
  },
});

export const {loginSuccess, loginFailure} = authSlice.actions;

export default authSlice.reducer;
