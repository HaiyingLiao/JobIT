import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  jobLocation: '',
  jobType: '',
  currentPage: 1
};

export const searchBar = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setSearchBarValue: (state, action) => {
      const { title, jobLocation, jobType, currentPage } = action.payload;

      state.title = title;
      state.jobLocation = jobLocation;
      state.jobType = jobType;
      state.currentPage = currentPage;
    }
  }
});

export const { setSearchBarValue } = searchBar.actions;

export default searchBar.reducer;
