import React, { useState, useEffect } from 'react';
import CountryList from '../Components/CountryList';
import VisitedCountryList from '../Components/VisitedCountryList';

// manages the state and logic for countries and visited countries
const CountryContainer = () => { 
  // useState hook to manage the state of countries and visited countries
  const [countries, setCountries] = useState([]); // countries will store all countries fetched from the API
  const [visitedCountries, setVisitedCountries] = useState([]);   // visitedCountries will store the countries marked as visited

  useEffect(() => {   // useEffect hook to fetch countries when the component mounts
    fetchCountries();
  }, []); // Empty dependency array means this effect runs once on mount

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const markAsVisited = (country) => {
    // Add the country to visited list
    const newVisitedList = [...visitedCountries, country]; // This creates a new array with all the current visited countries plus the new one. || // ... is the spread operator, which expands the current array.
    setVisitedCountries(newVisitedList); // This updates the state with the new list of visited countries.
  
    // Remove the country from the main list
    const updatedCountries = countries.filter(c => c.name.common !== country.name.common); // This creates a new array of countries, excluding the one that was just visited. || filter keeps only the countries where the condition is true. || The condition c.name.common !== country.name.common checks if the country name is different from the visited country's name.
    setCountries(updatedCountries);
  };

  return (
    <div>
      <CountryList countries={countries} markAsVisited={markAsVisited} /> {/* Render the CountryList component, passing countries array and markAsVisited function as props */}
      <VisitedCountryList visitedCountries={visitedCountries} />  {/* Render the VisitedCountryList component, passing the visitedCountries array as a prop */}

    </div>
  );
};

export default CountryContainer;