import React, { useEffect,} from 'react';
import { useState } from 'react';
import axios from 'axios';

import { AppContext } from './App_Context';

const App_State = ({ children }) => {
  const [kaikkiTuote, setKaikkiTuote] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/api/kaikkituote")
      .then((res) => setKaikkiTuote(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);



  let tuote = kaikkiTuote.map((item) => {
    return <li key={item.id}>{item.tuoteNimi}</li>;
  });

  return (
    <AppContext.Provider value="">
      {children}
      {/* <p>{tuote}</p> */}
    </AppContext.Provider>
  );
}

export default App_State;
