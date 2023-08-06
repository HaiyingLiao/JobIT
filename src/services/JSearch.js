// src > services > JSearch.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const jSearchApiKey = import.meta.env.VITE_APP_JSEARCH_KEY;

export const jSearchApi = createApi({
  reducerPath: 'jSearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsearch.p.rapidapi.com/',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', jSearchApiKey);
      headers.set('X-RapidAPI-Host', 'jsearch.p.rapidapi.com');
    }
  }),
  endpoints: builder => ({
    getJobListings: builder.query({
      query: query =>
        `search?query=${query.query}&page=${query.page}&num_pages=${query.num_pages}`
    }),
    getEstimatedSalaries: builder.query({
      query: ({ title, location, radius }) => {
        if (title && location && radius) {
          return `estimated-salary?job_title=${title}&location=${location}&radius=${radius}`;
        }
      }
    }),

    getSearch: builder.query({
      query: ({ name, currentPage, employmentTypes }) => {
        return `search?query=${name}&page=${currentPage}&employment_types=${employmentTypes}`;
      }
    }),
    getCompanyDetail: builder.query({
      query: companyMame => {
        return `search?query=${companyMame}&page=1&num_pages=1`;
      }
    })
  })
});

export const {
  useGetJobListingsQuery,
  useGetEstimatedSalariesQuery,
  useGetSearchQuery,
  useGetCompanyDetailQuery,
  useGetJobsByCompanyQuery
} = jSearchApi;
