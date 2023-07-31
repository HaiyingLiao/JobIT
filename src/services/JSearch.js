import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const jSearchApiKey = import.meta.env.VITE_APP_JSEARCH_KEY;

const jobTitle = 'NodeJs Developer'; // dummy variable
const location = 'New York, NY, USA'; // dummy variable
const radius = '100';

export const jSearchApi = createApi({
  reducerPath: 'jSearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsearch.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', jSearchApiKey);
      headers.set('X-RapidAPI-Host', 'jsearch.p.rapidapi.com');
    },
  }),
  endpoints: (builder) => ({
    getJobListings: builder.query({
      query: (query) =>
        `search?query=${query.query}&page=${query.page}&num_pages=${query.num_pages}`,
    }),
    getEstimatedSalaries: builder.query({
      query: (query) =>
        `estimated-salary?job_title=${jobTitle}}&location=${location}&radius=${radius}`,
    }),

    // Hi Team do the needfull query from here. I made a sample query above.
  }),
});

export const { useGetJobListingsQuery, useGetEstimatedSalaries } = jSearchApi;
