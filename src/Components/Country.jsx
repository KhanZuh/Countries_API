import React from 'react';

const Country = ({ country, markAsVisited, selectCountry, isVisited }) => {
  return (
    <div>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0]}</p>     {/* This shows the country's capital. The ?. is the optional chaining operator, used in case the capital property is undefined. It accesses the first element of the capital array if it exists. */}
      <p>Region: {country.region}</p>
      {/* conditional render to show the button only if isVisited is false. When clicked, it calls the markAsVisited function with the country object as an argument.*/}
      {!isVisited && (
        <>
        <button onClick={() => markAsVisited(country)}>Mark as Visited</button> 
        <button onClick={() => selectCountry(country)}>View Details</button>
        </>
      )}
    </div>
  );
};

export default Country;


