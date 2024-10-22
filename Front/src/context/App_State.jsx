import React from 'react'
import { AppContext } from './App_Context'

const App_State = ({ children }) => {

  return (
    <AppContext.Provider value={''}>
      {children}
    </AppContext.Provider>
  );
}


export default App_State
