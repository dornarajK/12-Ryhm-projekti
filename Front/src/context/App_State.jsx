import React, { useEffect, } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { AppContext } from './App_Context';



const App_State = ({ children }) => {

  url = 'http://localhost:3000/api/'

  useEffect(() => {
    const fetchTuote = async () => {
      const api = await axios.get(`${url}/`,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
    }
    fetchTuote()

  }, []);

  //*Tunnuts
  const Rekisteroidy = async () => {
    const api = await axios.post(`${url}/Rekisteroidy`,
      {

      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
    return api
  }


  return (
    <AppContext.Provider value={
      Rekisteroidy
    }>

      {children}
      {/* <p>{tuote}</p> */}
    </AppContext.Provider>
  );
}

export default App_State;
