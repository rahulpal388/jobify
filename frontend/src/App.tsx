import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from './pages/landing'
import { Login } from './pages/login'
import { Register } from './pages/register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
