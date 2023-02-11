function Country({country}) {
    return (
        <div className="country">
            <p className="text-4xl font-bold">{country.name.common}</p>
            <p>Capital: {country.capital}</p>
            <p>Languages:</p>
            <ul>
                {Object.values(country.languages).map(language => <li>{language}</li>)}
            </ul>
            <img src={country.flag}></img>
        </div>
    )
};

export default Country;