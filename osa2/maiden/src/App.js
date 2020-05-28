import React, {useState, useEffect} from 'react';
import ShowCountry from './components/ShowCountry';
import axios from 'axios';


const App = () => {

  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [isClicked, setClick] = useState(false);
  const [header, setHeader] = useState('');
  const [capitalInfo, setCapitalInfo] = useState('');
  const [populationInfo, setPopulationInfo] = useState('');
  const [languagesInfo, setLanguagesInfo] = useState('');
  const [flagInfo, setFlagInfo] = useState('');
 
  
  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      }
  )}, []) 
  return (
    <div>
      <ShowCountry search={search} setSearch={setSearch} 
        countries={countries} isClicked={isClicked} setClick={setClick}
        header={header} setHeader={setHeader} capitalInfo={capitalInfo} setCapitalInfo={setCapitalInfo}
        populationInfo={populationInfo} setPopulationInfo={setPopulationInfo} languagesInfo={languagesInfo}
        setLanguagesInfo={setLanguagesInfo} flagInfo={flagInfo} setFlagInfo={setFlagInfo}
      />
    </div>
  )
}

export default App;
