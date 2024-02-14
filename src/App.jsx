import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Pricing from './components/Pricing'
import Error from './components/Error'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Table from './components/Table'
import Login from './components/Login'
import LoggedIn from './components/LoggedIn'
import Protected from './components/Protected'
import Registration from './components/Registration'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('tokenId')
    if (token == 'QpwL5tke4Pnpja7X4') {
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  })
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path='/' element={<><Home /></>} />
          <Route path='/about' element={<><About /></>} />
          <Route path='/pages' element={<><Outlet /></>}>
            <Route path='pricing' element={<><Pricing /></>} />
            <Route path='error' element={<><Error /></>} />
          </Route>
          <Route path='/projects' element={<Protected isLoggedIn={isLoggedIn}><Projects /></Protected>} />
          <Route path='/table' element={<Protected isLoggedIn={isLoggedIn}><Table /></Protected>} />
          <Route path='/contact' element={<><Contact /></>} />
          <Route path='/login' element={<><Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /></>} />
          <Route path='/loggedin' element={<><LoggedIn setIsLoggedIn={setIsLoggedIn} /></>} />
          <Route path='/registration' element={<><Registration isLoggedIn={isLoggedIn}/></>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
