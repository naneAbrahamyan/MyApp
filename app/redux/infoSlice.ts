/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InfoSlice {
  hasViewed: boolean;
}

const initialState: InfoSlice = {
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
