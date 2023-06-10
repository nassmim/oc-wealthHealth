import { createBrowserRouter } from 'react-router-dom'
import App from './App.js'
import CreateEmployeeForm from './features/CreateEmployee/CreateEmployeeForm.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <CreateEmployeeForm/>
      }
    ]
  }
])

export default router