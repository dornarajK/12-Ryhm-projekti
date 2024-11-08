import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import App_State from './context/App_State';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 


createRoot(document.getElementById('root')).render(
  <App_State>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </App_State>
);
