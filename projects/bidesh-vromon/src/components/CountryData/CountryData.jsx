const CountryData = ({ country, handleVisitedCountry, handleVisitedFlags }) => {

    console.log('inside country data', country, handleVisitedCountry, handleVisitedFlags);

    return (
        <div>
            <p><small>Country Data: <br />
                Name: {country.name.common} <br />
                Official Name: {country.name.official} <br />
                Capital: {country.capital} <br />
                Region: {country.region}
            </small></p>
        </div>
    );
};

export default CountryData;