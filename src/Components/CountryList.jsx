import Country from './Country';

const CountryList = ({ countries, markAsVisited }) => {
  return (
    <div>
      <h2>Countries</h2>
      {countries.map(country => ( 
        <Country 
          key={country.cca3} 
          country={country} 
          markAsVisited={markAsVisited} 
        />
      ))}
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