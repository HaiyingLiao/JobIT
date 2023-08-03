import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobId: '',
};

export const JobDetailsById = createSlice({
  name: 'jobDetailId',
  initialState,
  reducers: {
    fetchJobDetailId: (state, action) => {},
  },
});
