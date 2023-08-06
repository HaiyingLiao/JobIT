import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'programmer',
  jobLocation: 'United States',
  jobType: 'FULLTIME',
  currentPage: 1,
  experience: '',
  isRemote: false
};

export const searchBar = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setSearchBarValue: (state, action) => {
      const {
        title,
        jobLocation,
        jobType,
        currentPage,
        experience,
        isRemote
      } = action.payload;

      state.title = title;
      state.jobLocation = jobLocation;
      state.jobType = jobType;
      state.currentPage = currentPage;
      state.experience = experience;
      state.isRemote = isRemote;
    }
  }
});

export const { setSearchBarValue } = searchBar.actions;

export default searchBar.reducer;
