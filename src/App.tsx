import { Outlet } from 'react-router-dom'
import './css/App.css'
import Header from './shared/components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
