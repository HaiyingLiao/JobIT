import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false
};

export const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    toggleMode: state => {
      state.value = !state.value;
    }
  }
});

export const { toggleMode } = colorModeSlice.actions;
export default colorModeSlice.reducer;
