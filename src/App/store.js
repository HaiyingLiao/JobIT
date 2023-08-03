import { configureStore } from '@reduxjs/toolkit';

import { jSearchApi } from '../services/JSearch';
import colorModeSlice from '../slice/darkMode';
import estimatedSalariesReducer from '../slice/currentEstimatedSalaries';

export const store = configureStore({
  reducer: {
    [jSearchApi.reducerPath]: jSearchApi.reducer,
    theme: colorModeSlice,
    currentEstimatedSalaries: estimatedSalariesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jSearchApi.middleware),
});
