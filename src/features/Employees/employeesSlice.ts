import { createSlice } from '@reduxjs/toolkit'

type Employee = {
  firstName: string
  lastName: string
  startDate: Date
  department: string
  birthdate: Date
  street: string
  city: string
  state: string
  zipcode: string
}

const initialState: ({ id: number } & Employee)[] = [
  {
    id: 1,
    firstName: 'hind',
    lastName: 'gouriach',
    startDate: new Date(2023, 7, 1),
    department: 'Souscription',
    birthdate: new Date(1994, 1, 19),
    street: 'rue ibnou',
    city: 'Marrakech',
    state: 'Marrakech',
    zipcode: '92345',
  },
  {
    id: 2,
    firstName: 'nassim',
    lastName: 'ezzakraoui',
    startDate: new Date(2023, 4, 1),
    department: 'Actuariat',
    birthdate: new Date(1989, 2, 4),
    street: 'rue ibnou',
    city: 'Casablanca',
    state: 'Casablanca',
    zipcode: '20050',
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
    street: Math.random().toString(36).substring(2, 10),
    city: Math.random().toString(36).substring(2, 10),
    state: Math.random().toString(36).substring(2, 10),
    zipcode: Math.random().toString(36).substring(2, 5),
  },
  {
    id: Math.floor(Math.random() * 30) + 1,
    firstName: Math.random().toString(36).substring(2, 10),
    lastName: Math.random().toString(36).substring(2, 10),
    startDate: new Date(2023, 7, 1),
    department: Math.random().toString(36).substring(2, 10),
    birthdate: new Date(1994, 1, 19),
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

export default employeesReducer