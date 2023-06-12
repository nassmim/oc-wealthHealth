import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface Employee {
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

interface EmployeeEntity extends Employee {
  id: number
}

const initialState: EmployeeEntity[] = [
  {
    id: 1,
    firstName: 'hind',
    lastName: 'gouriach',
    startDate: '2023/01/19',
    department: 'Souscription',
    birthdate: '2023/01/19',
    street: 'rue ibnou',
    city: 'Marrakech',
    state: 'Marrakech',
    zipcode: '92345',
  },
  {
    id: 2,
    firstName: 'nassim',
    lastName: 'ezzakraoui',
    startDate: '2023/01/19',
    department: 'Actuariat',
    birthdate: '2023/01/19',
    street: 'rue ibnou',
    city: 'Casablanca',
    state: 'Casablanca',
    zipcode: '20050',
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: '2023/01/19',
    department: Math.random().toString(36).substring(2, 10),
    birthdate: '2023/01/19',
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
]

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
})

const employeesReducer = employeesSlice.reducer

export const selectEmployees = (state: RootState) => state.employees

export default employeesReducer
