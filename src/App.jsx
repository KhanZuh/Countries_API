import {useState} from 'react';
import CountryContainer from './Containers/CountryContainer'; 
import './App.css';  


function App() {
  return (
    <div className="App">
      <h1>Country Bucket List</h1>
      <CountryContainer />
    </div>
  );
}

export default App;