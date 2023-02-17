import dotenv from "dotenv"
import { useState, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary';

import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Country from "./components/Country";
import Countries from "./components/Countries";

import { lowerCase } from 'lodash';

dotenv.config()

function App() {

    const PHASES = {idle: "idle", noMatch: "nomatch", oneMatch: "onematch", oneToTenMatches: "onetoten", moreThanTen: "morethanten"}

    const [searchTerm, setSearchTerm] = useState(null);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [status, setStatus] = useState(PHASES.idle);
    const [error, setError] = useState(null);

    function proccessCountries(countries) {
      const proccessed = countries.map(country => {
        return {name: country.name.common, capital: country.capital, languages: country.languages, flag: country.flags.png}
      });
      return proccessed;
    }

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
          const proccessed = proccessCountries(data);
          const len = proccessed.length;
          setCountries(proccessed);
        })
        .catch(error => setError(error))
    } ,[])
    
    function handleSearchInputChange(e) {
      // Updating the search term state
      setSearchTerm(e.target.value);

      // Clear previous error message
      setError(null);
      
      // Creating array with all of the countries that have te search term as substring
      const filtered = countries.filter(country => {
        let name = lowerCase(country.name)
        return name.includes(lowerCase(searchTerm))
      });

      // Updating the state of the filtered countries
      setFilteredCountries(filtered)
      
      // Updating error messaege if needed
      const len = filtered.length;

      if (len === 0) setStatus(PHASES.noMatch);
      else if (len === 1) setStatus(PHASES.oneMatch);
      else if (len <= 10) setStatus(PHASES.oneToTenMatches);
      else if (e.target.value === "") setStatus(PHASES.idle)
      else setStatus(PHASES.moreThanTen);
    }

    function RenderCountries({errorHandler}) {
        if (status === PHASES.noMatch) {
          setError("No such country");
          return null
        }
        else if (status === PHASES.oneMatch) return <Country country={filteredCountries[0]} />
        else if (status === PHASES.oneToTenMatches) return <Countries countires={filteredCountries} />
        else if (status === PHASES.moreThanTen) {
          setError("Too many matches, specify another filter");
          return null
        }
        else if (status === PHASES.idle) return <></>
    };

    return (
        <div className="App">
            <Header title="🌍 Countries 🌍" />
            <Form onSearchInputChange={handleSearchInputChange} />
            <RenderCountries />
            {error ? <Error err={error} /> : null}
        </div>
    )
}

export default App
