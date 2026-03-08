import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing';
import App from './App';
import UseStatehw from './compnets/hooks/useStatehw';
import useEffecthw from './compnets/hooks/useEffecthw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
     {/* <Routing /> */}
  </BrowserRouter>
  // tree app - node 
);


