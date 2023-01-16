/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InfoState {
  hasViewed: boolean;
}

const initialState: InfoState = {
  hasViewed: false,

};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setHasViewed: (state, action: PayloadAction<boolean>) => {
      state.hasViewed = action.payload;
  },
},
});

export const { setHasViewed } = infoSlice.actions;

export default infoSlice.reducer;
