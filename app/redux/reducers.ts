import {combineReducers} from '@reduxjs/toolkit';
import login from './login';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  login,
  authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
