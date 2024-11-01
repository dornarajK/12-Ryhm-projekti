import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './components/Singup'
import Login from './components/Login'
// import Home from './Home'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
       {/* <Route path='/home' element={<Home />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App








/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <h1>ReMarket</h1>
    </>
  )
}

export default App*/
