import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Style from '../Style/Navbar.module.css'

function Footer() {
  return (
    <footer style={{ width: '100vw', backgroundColor: '#6c63ff', color: 'white', margin: '0', padding: '0' }}>
      <div className="container p-4 text-center">
        <h3 className={`${Style.tes}`}>ReMarket</h3>
        <br />
        <section className="mb-4">
          <p>
            ReMarket on yhteisön vetämä markkinapaikka, jossa käyttäjät voivat myydä omia tuotteitaan ja löytää upeita tuotteita muilta. Liity mukaan edistämään kestävää kehitystä jakamisen ja laadukkaiden tuotteiden kierrättämisen kautta.
          </p>
        </section>

    
        <section>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <p className="text-uppercase">Kodirov Abdumumin</p>
              <ul className="list-unstyled mb-0">
                <li><a className="btn btn-outline btn-floating m-1" target='_blank' href="https://github.com/Ak0773" role="button"><FaGithub style={{ color: 'white' }} /></a></li>
                <li><a className="btn btn-outline btn-floating m-1" target='_blank' href="https://www.linkedin.com/in/abdumumin-kodirov-86219b261/" role="button"><FaLinkedinIn style={{ color: 'white'}} /></a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <p className="text-uppercase">Marai Khaled</p>
              <ul className="list-unstyled mb-0">
                <li><a className="btn btn-outline btn-floating m-1" target='_blank' href="https://github.com/Khaleddamascene" role="button"><FaGithub style={{ color: 'white' }} /></a></li>
                <li><a className="btn btn-outline btn-floating m-1" target='_blank' href="https://www.linkedin.com/in/khaled-damascene-2338001b9/" role="button"><FaLinkedinIn style={{ color: 'white' }} /></a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <p className="text-uppercase">Kharal Dornaraj</p>
              <ul className="list-unstyled mb-0">
                <li><a className="btn btn-outline btn-floating m-1" href="https://github.com/dornarajK" target='_blank' role="button"><FaGithub style={{ color: 'white' }} /></a></li>
                <li><a className="btn btn-outline btn-floating m-1" href="https://www.linkedin.com/in/dornaraj-kharal-905baa322/" target='_blank' role="button"><FaLinkedinIn style={{ color: 'white' }} /></a></li>
              </ul>
            </div>
          </div>
        </section>

        <br />
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="#"> ReMarket</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
