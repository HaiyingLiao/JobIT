import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  jobLocation: '',
  jobType: ''
};

export const searchBar = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setSearchBarValue: (state, action) => {
      const { title, jobLocation, jobType } = action.payload;

      state.title = title;
      state.jobLocation = jobLocation;
      state.jobType = jobType;
    }
  }
});

export const { setSearchBarValue } = searchBar.actions;

export default searchBar.reducer;
