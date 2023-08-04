import { configureStore } from '@reduxjs/toolkit';

import { jSearchApi } from '../services/JSearch';
import colorModeSlice from '../slice/darkMode';
import estimatedSalariesReducer from '../slice/currentEstimatedSalaries';
import searchSlice from '../slice/searchSlice'

export const store = configureStore({
  reducer: {
    [jSearchApi.reducerPath]: jSearchApi.reducer,
    theme: colorModeSlice,
    currentEstimatedSalaries: estimatedSalariesReducer,
    searchSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jSearchApi.middleware),
});
