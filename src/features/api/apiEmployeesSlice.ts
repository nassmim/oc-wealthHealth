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
      /**
       * Optimitic update of the cached list of employees, adding the new one to it
       * @param {Employee} employee representing the employee created
       * @param {dispatch: ThunkDispatch, Promise }
       */
      async onQueryStarted(employee, { dispatch, queryFulfilled }) {
        const employeesUpdated = dispatch(
          apiEmployeesSlice.util.updateQueryData(
            'getEmployees',
            undefined,
            // Draft represents here the cached state
            (draft) => {
              draft.push(employee)
            }
          )
        )
        // Runs the Promise
        try {
          queryFulfilled
        } catch {
          // If it fails, then the employee is removed from the cached list
          employeesUpdated.undo()
        }
      },
    }),
  }),
})

export const { useLazyGetEmployeesQuery, useAddEmployeeMutation } =
  apiEmployeesSlice
