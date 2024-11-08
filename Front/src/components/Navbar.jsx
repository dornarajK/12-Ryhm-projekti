import React from 'react'
import { BiSolidDoorOpen } from "react-icons/bi";
import Style from '../Style/Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className={`navbar-brand ${Style.logo}`}>ReMarket</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <Link to="/teeTuote" className='text-decoration-none nav-link'>Tee tuote</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">?</a>
              </li>
            </ul>
            <button className="btn btn-outline-success me-2" type="button">
            <Link to="/kirjaudu" className='text-decoration-none'>Kirjaudu Sisään</Link>
              
              
            </button>
            <button className="btn btn-outline-success me-2 " type="button">
            <Link to="/Rekisteroidy" className='text-decoration-none'>Rekisteroidy</Link>
              </button>
            <button className="btn btn-outline-danger" type="button"> Ulos <BiSolidDoorOpen /></button>


          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
