import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing';
import UseContexdata from './compnets/hooks/useContex/useContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <UseContexdata.Provider value={"This is the value from the useContexdata"}>
    <Routing />
   </UseContexdata.Provider>

  </BrowserRouter>
);


