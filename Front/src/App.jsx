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
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
import viteLogo from '/vite.svg'
import './App.css'
import Etusivu from './components/Etusivu'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Navbar />
      <div>
      <Routes>   
        <Route path="/" element={<Etusivu />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App*/
