import { createSlice } from '@reduxjs/toolkit'

export interface Employee {
  firstName: string
  lastName: string
  startDate: string
  department: string
  birthdate: string
  street: string
  city: string
  state: string
  zipcode: string
}

const initialState: {
  hasBeenFetched: boolean
} = {
  hasBeenFetched: false,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    employeesFetched: (state) => {
      state.hasBeenFetched = true
    },
  },
})

const employeesReducer = employeesSlice.reducer
export const { employeesFetched } = employeesSlice.actions

export default employeesReducer
