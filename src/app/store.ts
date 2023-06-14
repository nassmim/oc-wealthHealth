import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/ViewEmployees/employeesSlice'
import { apiSlice } from '../features/api/apiSlice'
import {
  Spinner,
  pendingTasksReducer,
  pendingTask,
  begin,
  end,
} from 'react-redux-spinner'
import { Reducer } from 'react'

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    pendingTasks: pendingTasksReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
