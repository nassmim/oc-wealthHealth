import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/Employees/employeesSlice'

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
})

export default store
