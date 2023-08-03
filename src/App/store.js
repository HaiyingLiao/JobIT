import { configureStore } from '@reduxjs/toolkit';

import { jSearchApi } from '../services/JSearh.js';
// import estimatedSalariesReducer from '../slice/currentEstimatedSalaries';
import searchSlice from '../slice/searchSlice.js';

export const store = configureStore({
  reducer: {
    [jSearchApi.reducerPath]: jSearchApi.reducer,
    // currentEstimatedSalaries: estimatedSalariesReducer,
    searchSlice
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jSearchApi.middleware),
});
