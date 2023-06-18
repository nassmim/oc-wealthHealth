import { apiSlice } from './apiSlice'

export const apiGenericSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStates: builder.query({
      query: () => '/states',
      keepUnusedDataFor: 24 * 60 * 60,
    }),
  }),
})

export const { useGetStatesQuery } = apiGenericSlice
