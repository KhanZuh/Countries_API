import {useState} from 'react';
import Country from './Country';

const VisitedCountryList = ({ visitedCountries }) => {
  return (
    <div>
      <h2>Visited Countries</h2>
      {visitedCountries.map(country => (
        <Country 
          key={country.cca3} 
          country={country} 
          isVisited={true} 
        />
      ))}
    </div>
  );
};

export default VisitedCountryList;


// The visitedCountries array is mapped over.
// For each country, a Country component is rendered.
// Each Country component is given three props:

// key: Set to country.cca3 
// country: The current country object from the array
// isVisited: Set to true for all countries in this list