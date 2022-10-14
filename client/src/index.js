import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//importing the auth provider this will work with the context , validates variables for all pages
import {AuthProvider} from '../src/Authentication/AuthContext'
// to make it work we need to import the following from react-router-dom this is from react router v6 - Rdiaz 2022 
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //  <BrowserRouter>
  //   {/* Wrapped in authProvier so context can enter into effect for all pages */}
  //     <AuthProvider>
  //       <Routes>
  //         <Route path="/*" element={ <App />}/>
  //       </Routes>    
  //     </AuthProvider>
  //   </BrowserRouter>
  // </React.StrictMode>
  
  <BrowserRouter>
   {/* Wrapped in authProvier so context can enter into effect for all pages */}
     <AuthProvider>
       <Routes>
         <Route path="/*" element={ <App />}/>
       </Routes>    
     </AuthProvider>
   </BrowserRouter>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
