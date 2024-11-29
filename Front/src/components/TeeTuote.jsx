
// export default MyyTuote;
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/tee_tuote.css';
import { AppContext } from '../context/App_Context';

function MyyTuote() {
  const { teeTuote } = useContext(AppContext);
  const [formData, setFormData] = useState({
    tuoteNimi: '',
    hinta: '',
    tiedot: '',
    kuva: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const yourAuthToken = localStorage.getItem('authToken');
    if (!yourAuthToken) {
      console.error('Token puuttuu! Ohjataan kirjautumaan...');
      navigate('/kirjaudu'); // Ohjaa kirjautumissivulle, jos tokenia ei löydy
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "kuva" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, kuva: reader.result }));
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("testi");
    
    const { tuoteNimi, hinta, tiedot, kuva } = formData;

    try {
      const result = await teeTuote(tuoteNimi, hinta, tiedot, kuva);
      if (result) {
        setFormData({ tuoteNimi: '', hinta: '', tiedot: '', kuva: null });
        setPreviewImage(null);
        console.log("Tuote julkaistu onnistuneesti!");
      }
    } catch (error) {
      console.error('Virhe tuotetta julkaistaessa:', error);
    }
  };


  
  return (
    <div className='tee'>
      <h1>Myytävä tuote</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <h6>Tuote nimi</h6>
          <input
            type='text'
            placeholder='Tuote nimi'
            name='tuoteNimi'
            value={formData.tuoteNimi}
            onChange={handleChange}
          />
        </div>
        <div>
          <h6>Hinta</h6>
          <input
            type='number'
            placeholder='Hinta'
            name='hinta'
            value={formData.hinta}
            onChange={handleChange}
            min={1}
          />
        </div>
        <div className='kuvaus'>
          <h6>Kuvaus</h6>
          <textarea
            placeholder='tiedot'
            name='tiedot'
            value={formData.tiedot}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className='valitsee'>
            <span className='btn btn-primary btn-file'>
              Hae kuva
              <input
                type='file'
                name='kuva'
                accept='image/*'
                onChange={handleChange}
              />
            </span>
          </div>
          {previewImage && (
            <div>
              <img
                src={previewImage}
                alt='Esikatselu'
                style={{
                  width: '200px',
                  height: 'auto',
                  marginTop: '10px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
          )}
        </div>
        <div>
          <button type='submit'>Julkaise tuote!</button>
        </div>
      </form>
    </div>
  );
}

export default MyyTuote;
