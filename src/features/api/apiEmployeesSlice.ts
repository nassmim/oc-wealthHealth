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
      async onQueryStarted(employee, { dispatch, queryFulfilled }) {
        const employeesUpdated = dispatch(
          apiEmployeesSlice.util.updateQueryData(
            'getEmployees',
            undefined,
            (draft) => {
              draft.push(employee)
            }
          )
        )
        try {
          queryFulfilled
        } catch {
          employeesUpdated.undo()
        }
      },
    }),
  }),
})

export const { useLazyGetEmployeesQuery, useAddEmployeeMutation } =
  apiEmployeesSlice
