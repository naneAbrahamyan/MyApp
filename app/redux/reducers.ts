import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import infoSlice from './infoSlice';

const rootReducer = combineReducers({
  authSlice,
  infoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
