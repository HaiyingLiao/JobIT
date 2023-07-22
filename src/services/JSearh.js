import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const jSearchApiKey = process.env.REACT_APP_JSEARCH_KEY;

export const jSearchApi = createApi({
  reducerPath: 'jSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
});
