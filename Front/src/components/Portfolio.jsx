import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/App_Context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Style/profiili.css';

const Portfolio = () => {
  const { user, OmaTute, setOmaTute, poista } = useContext(AppContext);
  const navigate = useNavigate();

 
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      console.error('Token puuttuu! Ohjataan kirjautumaan...');
      navigate('/kirjaudu');
    }
  }, [navigate]);

  // Poista tuote
  const poistaTuote = async (id) => {
    try {
      await poista(id);
      setOmaTute((prevTuotteet) => prevTuotteet.filter((tuote) => tuote._id !== id)); // Päivitä lista
      console.log('Tuote poistettu onnistuneesti.');

    window.location.reload();
    } catch (error) {
      console.error('Virhe tuotteen poistamisessa:', error);
    }
  };


  if (!user) {
    return <h1>Ladataan käyttäjätietoja...</h1>;
  }

  return (
    <div className='profiili'>
      
      <div className='container text-center my-3'>
        <h2>{user.nimi || 'Tuntematon käyttäjä'}</h2>
        <h3>{user.sahkoposti}</h3>
      </div>

      <div className='tuotelista'>
        {OmaTute && OmaTute.length > 0 ? (
          OmaTute.map((tuote) => (
            <div className='tuote-kortti' key={tuote._id}>
              <Link to={`/${tuote._id}`} className='tuote-linkki'>
                <img
                  src={tuote.kuva}
                  alt={`Kuva tuotteesta ${tuote.tuoteNimi}`}
                />
                <p className='tuote-nimi'>{tuote.tuoteNimi}</p>
                <p className='tuote-hinta'>{tuote.hinta}€</p>
              </Link>
              <button
                className='tuote-poista'
                onClick={() => poistaTuote(tuote._id)} 
              >
                Poista tuote
              </button>
            </div>
          ))
        ) : (
          <p className='ei-tuotteita'>Ei tuotteita näytettävänä.</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
