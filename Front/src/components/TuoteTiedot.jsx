import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/App_Context';
import { Link, useLocation } from 'react-router-dom'
import { RiArrowGoBackFill } from "react-icons/ri";
const TuoteTiedot = () => {
  
  const { id } = useParams(); 
  const { tuoteId } = useContext(AppContext); 
  const [tuote, setTuote] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTuote = async () => {
      try {
        const response = await tuoteId(id); 
        setTuote(response.data); 
      } catch (error) {
        console.error('Virhe tuotteen hakemisessa:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchTuote();
  }, [id, tuoteId]);

  if (loading) {
    return <p>Ladataan tuotteen tietoja...</p>;
  }

  if (!tuote) {
    return <p>Tuotetta ei löytynyt.</p>;
  }

  return (
    <div className="tuote-tiedot">
      <Link to={"/"} className='btn h-50 '><RiArrowGoBackFill />Etusivulle</Link>
      <h1>{tuote.tuoteNimi}</h1>
      <img src={tuote.kuva} alt={tuote.tuoteNimi} style={{ width: '300px', height: 'auto' }} />
      <p>{tuote.tiedot}</p>
      <p>kayttaja:</p><p>{tuote.kayttaja}</p>
      
      <p><strong>Hinta:</strong> {tuote.hinta}€</p>
    </div>
  );
};

export default TuoteTiedot;
