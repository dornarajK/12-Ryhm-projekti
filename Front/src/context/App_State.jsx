import React, { useEffect, } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { AppContext } from './App_Context';



const App_State = ({ children }) => {

  const url = 'http://localhost:3000/api';
  const [tuotteet, setTuotteet] = useState([])
  const [reload,setreload ] = useState(true); 


  useEffect(() => {
    const fetchTuote = async () => {
      try {
        const response = await axios.get(`${url}/`,
          {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true
          });
        setTuotteet(response.data.tuotteet);
      }
      catch (err) {
        console.error("Virhe haettaessa tuotteita:", err);
      }
    };
    fetchTuote()

  }, []);



  const teeTuote = async (tuoteNimi, hinta, tiedot, kuva) => {
    try {
      const api = await axios.post(
        `${url}/teeTuote`,
        {
          tuoteNimi,
          hinta,
          tiedot,
          kuva, // Base64-muotoinen kuva
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Tuote lisätty onnistuneesti:", { tuoteNimi, hinta, tiedot, kuva });
  
      setreload(!reload);
      return api;
    } catch (error) {
      console.error("Virhe tuotteen lisäämisessä:", error);
      throw error;
    }
  };
  
  

  //* löydä tuote id avulla 
  const tuoteId = async (id) => {
    const api = await axios.get(`${url}/${id}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
    return api
  }

  return (
    <AppContext.Provider value={{teeTuote,tuotteet,tuoteId }}>
      {children}
    </AppContext.Provider>
  );
}

export default App_State;
