import React, { useEffect, } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { AppContext } from './App_Context';



const App_State = ({ children }) => {

  const url = 'http://localhost:3000/api';
  const [tuotteet, setTuotteet] = useState([]);

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
          console.log('hettu data :',response.data)
        setTuotteet(response.data);
      }
      catch (err) {
        console.error("Virhe haettaessa tuotteita:", err);
      }
    };
    fetchTuote()

  }, []);

// !
  //*Rekisteroidy
  const Rekisteroidy = async (nimi, sahkoposti, salasana) => {
    const api = await axios.post(`${url}/Rekisteroidy`,
      {
        nimi,
        sahkoposti,
        salasana
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
    return api
  }
  //* kirjaudu
  const Kirjaudu = async (sahkoposti, salasana) => {
    const api = await axios.post(`${url}/kirjaudu`,
      {
        sahkoposti,
        salasana
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
    return api
  }
  //!

  //* tee Tuote

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
    <AppContext.Provider value={{teeTuote,tuotteet, setTuotteet,tuoteId }}>
      {children}
    </AppContext.Provider>
  );
}

export default App_State;
