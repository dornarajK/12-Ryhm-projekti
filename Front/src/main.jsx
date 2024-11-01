import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import App_State from './context/App_State';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <App_State>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </App_State>
);
