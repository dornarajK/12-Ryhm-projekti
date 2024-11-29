
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from './App_Context';

const App_State = ({ children }) => {
  const url = 'http://localhost:3000/api';
  const [tuotteet, setTuotteet] = useState([]);
  const [reload, setReload] = useState(true);


  useEffect(() => {
    const fetchTuote = async () => {
      try {
        const response = await axios.get(`${url}/`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log('hettu data :', response.data);
        setTuotteet(response.data);
      } catch (err) {
        console.error("Virhe haettaessa tuotteita:", err);
      }
    };
    fetchTuote();
  }, [reload]);

  //* tee Tuote
  const teeTuote = async (tuoteNimi, hinta, tiedot, kuva) => {
    try {
      const yourAuthToken = localStorage.getItem('authToken');
      console.log('Auth token:', yourAuthToken);
      if (!yourAuthToken) {
        console.error('Auth token puuttuu!');
        
      }
      

      const api = await axios.post(
        `${url}/teeTuote`,
        {
          'tuoteNimi':tuoteNimi,
          'hinta':hinta,
          'tiedot':tiedot,
          'kuva':kuva,
        },
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${yourAuthToken}`,
          },
          withCredentials: true, 
        }
      );

      console.log("Tuote lisätty onnistuneesti:", { tuoteNimi, hinta, tiedot, kuva });
      setReload(!reload);
      return api;
    } catch (error) {
      console.error("Virhe tuotteen lisäämisessä:", error);
      throw error;
    }
  };


  
  //* löydä tuote id avulla 
  const tuoteId = async (id) => {
    const api = await axios.get(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return api;
  };

  return (
    <AppContext.Provider value={{ teeTuote, tuotteet, tuoteId }}>
      {children}
    </AppContext.Provider>
  );
};

export default App_State;
