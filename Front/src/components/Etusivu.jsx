import React, { useState, useEffect } from 'react';
import '../Style/etusivu.css';
import { useContext } from 'react';
import { AppContext } from '../context/App_Context';
import { Link } from 'react-router-dom'; // Import Link

const HomePage = () => {
  const { tuotteet } = useContext(AppContext);

  console.log('etusivu', tuotteet);

  const slides = tuotteet.map((tuote) => ({
    src: tuote.kuva,
    alt: tuote.tuoteNimi,
  }));

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='home-page'>
      <div className='slideshow-container'>
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '77vh' }} />
            <div className='caption'>{slide.caption}</div>
          </div>
        ))}

        <button className='prev' onClick={prevSlide}>
          ❮
        </button>
        <button className='next' onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {tuotteet && tuotteet.length > 0 ? (
          tuotteet.map((tuote) => (
            <div
            key={tuote._id} 
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '8px',
              width: '200px',
              textAlign: 'center',
            }}
          >
            <Link to={`/${tuote._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src={tuote.kuva}
                alt={tuote.tuoteNimi}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <p>{tuote.tuoteNimi}</p>
              <p><span>{tuote.hinta}</span>€</p>
            </Link>
          </div>
          
          ))
        ) : (
          <p>Tuotteita ei löytynyt.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
