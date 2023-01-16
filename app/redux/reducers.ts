import {combineReducers} from '@reduxjs/toolkit';
import login from './login';
import authSlice from './authSlice';
import infoSlice from './infoSlice';

const rootReducer = combineReducers({
  login,
  authSlice,
  infoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
