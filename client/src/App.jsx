import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './component/Header'
import SignIn from './pages/SignIn'
import PrivateRoute from './component/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/sign-up' element={<SignUp/>} />
         <Route path='/sign-in' element={<SignIn/>} />
         <Route element={<PrivateRoute/>}>
             <Route path='/profile' element={<Profile/>} />
         </Route>
       
         <Route path='/about' element={<About/>} />

         
      </Routes>

    </BrowserRouter>
  )
}

export default App