import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import Profile from './pages/Profile'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/sign-up' element={<SignUp/>} />
         <Route path='/sign-out' element={<SignOut/>} />
         <Route path='/profile' element={<Profile/>} />
         <Route path='/about' element={<About/>} />

         
      </Routes>

    </BrowserRouter>
  )
}

export default App