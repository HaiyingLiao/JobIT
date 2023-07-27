import { configureStore } from '@reduxjs/toolkit';

import { jSearchApi } from '../services/JSearch';

export const store = configureStore({
  reducer: {
    [jSearchApi.reducerPath]: jSearchApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jSearchApi.middleware),
});
