import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/ViewEmployees/employeesSlice'
import { apiSlice } from '../features/api/apiSlice'

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
