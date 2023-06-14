import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { FormData } from '../CreateEmployee/models/formData'

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
  employees: Employee[]
  hasBeenFetched: boolean
} = {
  employees: [],
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

export const selectEmployees = (state: RootState) => state.employees

export const { employeesFetched } = employeesSlice.actions

export default employeesReducer
