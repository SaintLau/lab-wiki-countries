import React from 'react';
//import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends React.Component {
    state = {
        name: '',
        capital: '',
        area: '',
        borders: '',
        loaded: false
    }

    componentDidMount() {
        const cca3 = this.props.match.params.cca3; 
       
        const foundCountry = countries.find((country) => { 
            return country.cca3 === cca3;
        });

        this.setState({
            name: foundCountry.name.common,
            capital: foundCountry.capital,
            area: foundCountry.area,
            borders: foundCountry.borders,
            loaded: true
        })
    }

    render() {
        const { name, capital, area, borders, loaded } = this.state
        return loaded ? (
            <div>
                <h1>{name}</h1>
                <table className="table">
                    <thead></thead>
                        <tbody>
                             <tr>
                                <td>
                                     <h5>Capital</h5>
                                </td>  
                                <td>
                                     <h5>{capital}</h5>

                                </td> 
                             </tr>
                             <tr>
                                <td>
                                   <h5>Area {area}</h5>  
                                </td>  
                             </tr>
                             <tr>
                                <td>
                                    <h5>Borders</h5>
                                </td>    
                                <td>
                                    <ul>
                                    {borders.map(item => {
                                        return <p>{item}</p> 
                                    })}
                                    </ul>
                                </td>    
                             </tr>  
                        </tbody>
             </table>  
  
        </div>
                
        ) : <p>Loading</p>
    }
}

export default CountryDetails;