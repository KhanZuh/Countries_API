// components/CountryDetail.js
import {useState} from 'react';

const CountryDetail = ({ country }) => {
    return (
      <div className="country-detail">
        <h2>{country.name.common}</h2>
        <div className="country-info">
          <div className="country-data">
            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
            <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
            <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(', ')}</p>
          </div>
          {country.flags && (
            <div className="country-flag">
              <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            </div>
          )}
        </div>
      </div>
    );
  };

export default CountryDetail;