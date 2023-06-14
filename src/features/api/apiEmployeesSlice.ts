import { Employee } from '../ViewEmployees/employeesSlice'
import { apiSlice } from './apiSlice'

export const apiEmployeesSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => '/employees',
      keepUnusedDataFor: 24 * 60 * 60,
    }),

    addEmployee: builder.mutation({
      query: (data: Employee) => ({
        url: '/employees',
        method: 'POST',
        body: data,
      }),
      // transformResponse: (response: Employee[]) => response
    }),
  }),
})

export const { useLazyGetEmployeesQuery, useAddEmployeeMutation } =
  apiEmployeesSlice
