import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'yellow' : 'white' }}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'Visited done' : 'Not visited'}
            <hr />
            <CountryDetails
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetails>
        </div>
    );
};

export default Country;