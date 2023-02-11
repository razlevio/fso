import axios from "axios";
import fs from "fs";

const API_PATH = "https://restcountries.com/v3.1/all";

async function getCountriesToJson() {
  try {
    const response = await axios.get(API_PATH);
    let countries = response.data;
    let modifiedCountries = countries.map((country) => {
      return { name: country.name, capital: country.capital, languages: country.languages, flag: country.flags.png };
    });
    let dataInJson = JSON.stringify(modifiedCountries, null, 4);
    fs.writeFile("../assets/countries.json", dataInJson, "utf8", (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

function getAllCountries() {
    let req = axios.get(API_PATH);
    return req.then(res => {
        let modifiedCountries = res.data.map((country) => {
            return { name: country.name, capital: country.capital, languages: country.languages, flag: country.flags.png };
          });
        return modifiedCountries
    });
}

function getCountriesWithString(string) {
    let req = axios.get(`https://restcountries.com/v3.1/name/${string}`)
    return req.then(res => {
        let modifiedCountries = res.data.map((country) => {
            return { name: country.name, capital: country.capital, languages: country.languages, flag: country.flags.png };
          });
        return modifiedCountries
    });
}

export {getCountriesWithString, getAllCountries}