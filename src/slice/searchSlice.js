import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchValue: (state, action) => {
      const { data } = action.payload;
      state.value = data;
    }
  }
});

export const { getSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
