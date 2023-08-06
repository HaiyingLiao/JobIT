import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Senior User Experience Designer',
  location: 'South Korea',
  radius: '100',
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
