import { useState}  from "react";
import Country from "./Country";

function Countries({ countires, setSearchTerm }) {
  const [specificCountry, setSpecificCountry] = useState(null);

  function handleClick(country) {
    setSpecificCountry(country)
  };

  function render() {
    if(specificCountry) {
        return <Country country={specificCountry} />
    }
    if(countires) {
        return countires.map((country) => {
            return (
              <div key={country.name} className="flex justify-between items-center gap-5">
                <li className="text-xl">{country.name}</li>
                <button onClick={() => handleClick(country)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">show</button>
              </div>
            );
          })
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <ul className="list-disc list-inside flex flex-col gap-3">
        {render()}
      </ul>
    </div>
  );
}

export default Countries;
