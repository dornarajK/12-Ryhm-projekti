
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'

import App_State from './context/App_State';

createRoot(document.getElementById('root')).render(
  <App_State>
    <App />
  </App_State>
);


