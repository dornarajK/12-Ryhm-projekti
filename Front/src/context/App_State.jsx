import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from './App_Context';

const App_State = ({ children }) => {
  const url = 'http://localhost:3000/api';

  const [tuotteet, setTuotteet] = useState([]);

  const [OmaTute, setOmaTute] = useState([]);

  const [userId, setUserId] = useState("");

  const [user, setUser] = useState([]);
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
        console.log("Haetut tuotteet:", response.data);
        setTuotteet(response.data);

      } catch (err) {
        console.error("Virhe haettaessa tuotteita:", err.response?.data || err.message);

      }
    };
    fetchTuote();
    fetchOmaTute()
    TuteBykayttaja(userId)
  }, [reload, userId]);

  //* tee Tuote
  const teeTuote = async (tuoteNimi, hinta, tiedot, kuva) => {
    try {
      const yourAuthToken = localStorage.getItem('authToken');
      // console.log('Auth token:', yourAuthToken);
      if (!yourAuthToken) {
        console.error('Auth token puuttuu!');

      }


      const api = await axios.post(
        `${url}/teeTuote`,
        {
          'tuoteNimi': tuoteNimi,
          'hinta': hinta,
          'tiedot': tiedot,
          'kuva': kuva,
        },
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${yourAuthToken}`,
          },
          withCredentials: true,
        }
      );

      // console.log("Tuote lisätty onnistuneesti:", { tuoteNimi, hinta, tiedot, kuva });
      setReload(!reload);
      return api;
    } catch (error) {
      console.error("Virhe tuotteen lisäämisessä:", error);
      throw error;
    }
  };


  const fetchOmaTute = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error("Auth token puuttuu!");
      return;
    }
    try {
      const response = await axios.get(`${url}/portfolio`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Lisää token otsikkoon
        },
        withCredentials: true,
      });
      setUserId(response.data.user._id);
      setUser(response.data.user);
    } catch (error) {
      console.error("Virhe portfolio-dataa haettaessa:", error.response?.data || error.message);
    }
  };
  
  const TuteBykayttaja = async (id) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error("Auth token puuttuu!");
      return;
    }
    try {
      const response = await axios.get(`${url}/portfolio/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Lisää autentikointiotsikko
        },
        withCredentials: true,
      });
      setOmaTute(response.data);
    } catch (error) {
      console.error("Virhe käyttäjän tuotteiden haussa:", error.response?.data || error.message);
    }
  };
  

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
    <AppContext.Provider value={{
      tuoteId,
      tuotteet,
      setTuotteet,
      teeTuote,
      fetchOmaTute,
      OmaTute,
      setOmaTute,
      user,
      setUser,
      userId,
      setUserId
    }}>
      {children}
    </AppContext.Provider>

  );
};

export default App_State;
