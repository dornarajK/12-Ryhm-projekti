import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Rekisteroidy from './components/Rekisteroidy'
import Login from './components/Login'
import Etusivu from './components/Etusivu'
import MyyTuote from './components/TeeTuote'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import About from './components/About'
import './App.css';
function App() {

  return (
    <>
      <Navbar />
      <div className='bodydiv'>
        <Routes>
          <Route path="/Rekisteroidy" element={<Rekisteroidy />} />
          <Route path="/kirjaudu" element={<Login />} />
          <Route path="/" element={<Etusivu />} />
          <Route path="/teeTuote" element={<MyyTuote />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>

    </> 
  )
}

export default App
