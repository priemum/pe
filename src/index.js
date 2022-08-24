import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom' 
import Contexts from './contexts/Contexts';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Contexts>
  <Router>
    <App />
  </Router>
    </Contexts>
  </React.StrictMode>
);
