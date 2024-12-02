<<<<<<< HEAD
import React from 'react';
import { BiSolidDoorOpen } from "react-icons/bi";
import Style from '../Style/Navbar.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
=======
import React from 'react'
import { BiSolidDoorOpen } from 'react-icons/bi'
import Style from '../Style/Navbar.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar() {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("authToken"); // Poista token
		console.log("User logged out");
		navigate("/kirjaudu"); // Ohjaa kirjautumissivulle
	};
	return (
		<div>
			<nav
				className='navbar navbar-expand-lg border-body'
				style={{ backgroundColor: '#6c63ff' }}
				data-bs-theme='dark'
			>
				<div className='container-fluid'>
					<Link to='/' className={`navbar-brand  ${Style.tes}`}>
						ReMarket
					</Link>
>>>>>>> main

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Poista token
    console.log("User logged out");
    navigate("/kirjaudu"); // Ohjaa kirjautumissivulle
  };

  return (
    <div>
      <nav
        className='navbar navbar-expand-lg border-body'
        style={{ backgroundColor: '#6c63ff' }}
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <Link to='/' className={`navbar-brand  ${Style.tes}`}>
            ReMarket
          </Link>
 
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
 
          <div className='collapse navbar-collapse' id='navbarColor01'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  to='/portfolio'
                  className={`text-decoration-none nav-link ${Style.navLink} `}
                >
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/teeTuote'
                  className={`text-decoration-none nav-link ${Style.navLink}`}
                >
                  Sell
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className={`text-decoration-none nav-link ${Style.navLink}`}
                >
                  About
                </Link>
              </li>
            </ul>
 
            <Link to='/kirjaudu' className={`btn ${Style.loginBtn} me-2`}>
              Kirjaudu Sisään
            </Link>
 
            <Link
              to='/Rekisteroidy'
              className={`btn ${Style.registerBtn} me-2`}
            >
              Rekisteroidy
            </Link>

<<<<<<< HEAD
            <button
              className={`btn ${Style.logoutBtn}`}
              type="button"
              onClick={handleLogout}
            >
              Ulos <BiSolidDoorOpen />
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
=======
						<Link to='/kirjaudu' className={`btn ${Style.loginBtn} me-2`}>
							Kirjaudu Sisään
						</Link>

						<Link
							to='/Rekisteroidy'
							className={`btn ${Style.registerBtn} me-2`}
						>
							Rekisteroidy
						</Link>

						<button
							className={`btn ${Style.logoutBtn}`}
							type="button"
							onClick={handleLogout}
						>
							Ulos <BiSolidDoorOpen />
						</button>
					</div>
				</div>
			</nav>	
		</div>
	)
>>>>>>> main
}





export default Navbar;



