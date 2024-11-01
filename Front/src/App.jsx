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

export default App
