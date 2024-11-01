import React, { useEffect, } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { AppContext } from './App_Context';



const App_State = ({ children }) => {
<<<<<<< HEAD

  url = 'http://localhost:3000/api/Rekisteroidy'
=======
  let url = 'http://localhost:3000/api';
  const [tuotteet, setTuotteet] = useState([])
>>>>>>> main

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

  //* tee Tuote
  const teeTuote = async (tuoteNimi, hinta, tiedot, kuva) => {
    const api = await axios.post(`${url}/teeTuote`, {
      tuoteNimi,
      hinta,
      tiedot,
      kuva
    },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
    return api

  }

  //* löydä tuote id avulla 
  const tuoteId = async (id) => {
    const api = await axios.get(`${url}/${id}`,
      {
        headers:{
            "Content-Type": "application/json"
        },
        withCredentials: true
      })
      return api
  }






  return (
<<<<<<< HEAD
    <AppContext.Provider value="">
=======
    <AppContext.Provider value={""}>
>>>>>>> main

      {children}
      
    </AppContext.Provider>
  );
}

export default App_State;
