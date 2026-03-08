import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routing';
<<<<<<< HEAD
import App from './App';
import UseStatehw from './compnets/hooks/useStatehw';
import useEffecthw from './compnets/hooks/useEffecthw';
=======
import UseContexdata from './compnets/hooks/useContex/useContex';
>>>>>>> b202250e3e942166fdd0d794dad04616e0109b7c

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<<<<<<< HEAD
    <App />
     {/* <Routing /> */}
=======
   <UseContexdata.Provider value={"This is the value from the useContexdata"}>
    <Routing />
   </UseContexdata.Provider>

>>>>>>> b202250e3e942166fdd0d794dad04616e0109b7c
  </BrowserRouter>
);


