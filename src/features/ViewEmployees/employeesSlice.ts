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

export interface EmployeeEntity extends FormData {
  id: string
}

const initialState: EmployeeEntity[] = []

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
})

const employeesReducer = employeesSlice.reducer

export const selectEmployees = (state: RootState) => state.employees

export default employeesReducer
