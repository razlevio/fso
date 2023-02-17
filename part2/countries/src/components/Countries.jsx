function Countries({countries}) {
    return (
        <div className="countries-list">
            <ul>
                {countries ? countries.map(country => <li>{country.name.common}</li>) : <></>}
            </ul>
        </div>
    )
};

export default Countries;