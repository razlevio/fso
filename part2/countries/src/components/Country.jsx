import { useEffect, useState } from "react";

function Country({ country }) {
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const api_key = process.env.WEATHER_API_KEY
    const weatherAPIPAth = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`;
    fetch(weatherAPIPAth)
      .then((res) => res.json())
      .then((data) => setWeather(processWeather(data)))
      .catch((error) => setError(error));
  }, []);

  function processWeather(weather) {
    return {
      name: country.name,
      temp: weather.main.temp,
      feelsLike: weather.main.feels_like,
      wind: weather.wind.speed,
    };
  }

  if (country && weather) {
    return (
      <div className="country flex justify-center items-center m-5">
        <div className="flex flex-col gap-5">
          <p className="text-5xl font-bold">{country.name}</p>
          <p className="text-xl">
            <strong>Capital: </strong>
            {country.capital}
          </p>
          <p className="text-xl">
            <strong>Languages: </strong>
          </p>
          <ul className="list-disc list-inside">
            {Object.values(country.languages).map((language) => (
              <li key={Math.random()} className="text-xl">
                {language}
              </li>
            ))}
          </ul>
          <img className="w-80 self-center" src={country.flag}></img>
          <p className="text-xl font-bold">Weather in {country.capital}:</p>
          <p>
            <strong>Temperature: </strong>
            {weather.temp} Celcius
          </p>
          <p>
            <strong>Wind speed: </strong>
            {weather.wind}
          </p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Country;
