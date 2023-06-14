import { apiSlice } from './apiSlice'

export const apiEmployeesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => '/employees',
      keepUnusedDataFor: 24 * 60 * 60,
    }),
  }),
})

export const { useLazyGetEmployeesQuery } = apiEmployeesSlice
