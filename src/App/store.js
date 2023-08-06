import { configureStore } from '@reduxjs/toolkit';

import { jSearchApi } from '../services/JSearch';
import colorModeSlice from '../slice/darkMode';
import estimatedSalariesReducer from '../slice/currentEstimatedSalaries';
import searchSlice from '../slice/searchSlice';
import searchBar from '../slice/searchBar';

export const store = configureStore({
  reducer: {
    [jSearchApi.reducerPath]: jSearchApi.reducer,
    theme: colorModeSlice,
    currentEstimatedSalaries: estimatedSalariesReducer,
    searchSlice,
    searchBar
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jSearchApi.middleware)
});
