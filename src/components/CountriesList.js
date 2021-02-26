import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends React.Component {
    state = {
        countries: countries,
    }

    render() {
        const { countries } = this.state;
        return countries.length > 0 
        ? (
            <div>
                <ul>
                    {countries.map((country) => {
                       return (
                           <div key={country.cca3}>
                             <Link to={`/${country.cca3}`}>{country.name.common}</Link>
                           </div>
                         )
                })}
                </ul>   
            </div>
        ) :
        <div>Loading...</div>
    }
}

export default CountriesList;