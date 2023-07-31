import { configureStore } from '@reduxjs/toolkit';

import { jSearchApi } from '../services/JSearch';
import colorModeSlice from '../slice/darkMode';

export const store = configureStore({
  reducer: {
    [jSearchApi.reducerPath]: jSearchApi.reducer,
    theme: colorModeSlice
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(jSearchApi.middleware)
});
