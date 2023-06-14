import { createBrowserRouter } from 'react-router-dom'
import App from './App.js'
import CreateEmployeeForm from './features/CreateEmployee/CreateEmployeeForm.tsx'
import ViewEmployees from './features/ViewEmployees/ViewEmployees.tsx'
import ErrorPage from './shared/pages/Error.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CreateEmployeeForm />,
      },
      {
        path: '/employees-list',
        element: <ViewEmployees />,
      },
    ],
  },
])

export default router
