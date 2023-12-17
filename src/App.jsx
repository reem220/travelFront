import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Login from './pages/Login'
export default function App() {
  const users = JSON.parse(localStorage.getItem('user'))

  return (
<>

<BrowserRouter>

<Routes>

{/* <Route   path="/" 
              element={users ? <Login/> : <Navigate to="/login" />} 
            /> */}
            

</Routes>


</BrowserRouter>



<Navbar/>
<Home/>
<Main/>
<Footer/> 

</>

    )
}
