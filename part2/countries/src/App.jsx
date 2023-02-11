import { useState, useEffect } from 'react'
import { getCountriesWithString, getAllCountries } from './services/services';
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Country from "./components/Country";
import Countries from "./components/Countries";
import { lowerCase } from 'lodash';

function App() {

    const [searchTerm, setSearchTerm] = useState('');
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
      getAllCountries().then(res => setCountries(res))
    }, [])
    
    function handleSearchInputChange(e) {
      // Updating the search term state
      setSearchTerm(e.target.value);

      // Creating array with all of the countries that have te search term as substring
      const filtered = countries.filter(country => {
        let name = lowerCase(country.name.common)
        return name.includes(lowerCase(searchTerm))
      });

      // Updating the state of the filtered countries
      setFilteredCountries(filtered)
      
      // Updating error messaege if needed
      const len = filteredCountries.length;
      if(len === 0) setError("No Such Country");
      else if(len === 1) setError(null);
      else if(len > 10) setError("Too many matches, specify another filter");
      else setError(null);
    }

    function renderCountries() {
        const len = filteredCountries.length;
        if(len === 1) return <Country country={filteredCountries} />
        else if(len <= 10) return <Countries countires={filteredCountries} />
        else return <></>
    };

    return (
        <div className="App">
            <Header title="🌍 Countries 🌍" />
            <Form onSearchInputChange={handleSearchInputChange}/>
            {renderCountries()}
            {error ? <Error err={error} /> : null}
        </div>
    )
}

export default App
