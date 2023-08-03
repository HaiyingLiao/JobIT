import { configureStore } from '@reduxjs/toolkit';

import { jSearchApi } from '../services/JSearch';
import estimatedSalariesReducer from '../slice/currentEstimatedSalaries';

export const store = configureStore({
  reducer: {
    [jSearchApi.reducerPath]: jSearchApi.reducer,
    searchSlice,
    currentEstimatedSalaries: estimatedSalariesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jSearchApi.middleware),
});
