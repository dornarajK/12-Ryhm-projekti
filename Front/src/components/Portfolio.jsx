import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/App_Context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Portfolio = () => {
  const { user, OmaTute } = useContext(AppContext);
  const navigate = useNavigate();
 

  if (!user) {
    return <h1>Ladataan käyttäjätietoja...</h1>;
  }

  useEffect(() => {
    const yourAuthToken = localStorage.getItem('authToken');
    if (!yourAuthToken) {
      console.error('Token puuttuu! Ohjataan kirjautumaan...');
      navigate('/kirjaudu');
    }
  }, [navigate]);
  return (
    <div>
      <div className="container text-center my-3">
        <h2>{user.nimi || "Tuntematon käyttäjä"}</h2>
        <h3>{user.sahkoposti}</h3>
      </div>

      {OmaTute?.length > 0 ? (
        OmaTute.map((data) => (
          <div key={data.id}>
            <div className='data-kortti' key={data._id}>
              <Link to={`/${data._id}`} className='data-linkki'>
                <img src={data.kuva} alt={data.dataNimi} />
              </Link>
                <p className='data-nimi'>{data.tuoteNimi}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Ei tuotteita näytettävänä.</p> 
      )}
    </div>
  );
};

export default Portfolio;
