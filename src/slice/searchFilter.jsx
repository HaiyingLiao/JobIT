import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobTitle: '',
  location: '',
  jobType: '',
};

export const searchFilter = createSlice({
  name: 'searchFilter',
  initialState,
  reducers: {
    fetchsearchFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { fetchSearchFilter } = searchFilter.actions;

export default searchFilter.reducer;
