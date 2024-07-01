// components/CountryList.js
import React from 'react';
import Country from './Country';

const CountryList = ({ countries, markAsVisited, selectCountry }) => {
  return (
    <div className="country-list">
      <h2>Countries</h2>
      <div className="country-list-scrollable">
        {countries.map(country => (
          <Country 
            key={country.cca3} 
            country={country} 
            markAsVisited={markAsVisited} 
            selectCountry={selectCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryList;


// Lines 7-11 reasoning and explanation
// The countries array is mapped over.
// For each country, a Country component is rendered.
// Each Country component is given three props:

// key: Set to country.cca3 (unique identifier for the country)
// country: The current country object from the array
// markAsVisited: function passed from the parent component (container)