import { configureStore } from '@reduxjs/toolkit';

import { jSearchApi } from '../services/JSearch';
import estimatedSalariesReducer from '../slice/currentEstimatedSalaries';
import colorModeSlice from '../slice/darkMode';

export const store = configureStore({
  reducer: {
    [jSearchApi.reducerPath]: jSearchApi.reducer,
    currentEstimatedSalaries: estimatedSalariesReducer,
    theme: colorModeSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jSearchApi.middleware),
});
