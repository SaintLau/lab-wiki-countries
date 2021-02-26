
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
      <div>
          <Navbar />
          <div className="container">
          <div className="row"> 
            <CountriesList />
          
          <Route path='/:cca3' component={CountryDetails} />
       </div>
     </div>  
   </div>
  );
}

export default App;
