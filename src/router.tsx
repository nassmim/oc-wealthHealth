import { createBrowserRouter } from 'react-router-dom'
import App from './App.js'
import CreateEmployeeForm from './features/CreateEmployee/CreateEmployeeForm.tsx'
import Employees from './features/Employees/Employees.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <CreateEmployeeForm />,
      },
      {
        path: '/employees-list',
        element: <Employees />,
      },
    ],
  },
])

export default router
