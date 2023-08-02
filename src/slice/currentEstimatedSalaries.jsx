import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Project Manager',
  location: 'New York',
  radius: '30',
};

export const estimatedSalaries = createSlice({
  name: 'estimatedSalaries',
  initialState,
  reducers: {
    fetchEstimatedSalaries: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { fetchEstimatedSalaries } = estimatedSalaries.actions;

export default estimatedSalaries.reducer;
