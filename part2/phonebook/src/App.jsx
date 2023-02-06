import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", tel: "0506460330" }]);
  const [filteredPersons, setFilteredPersons] = useState([...persons]);
  const [states, setStates] = useState({newName: "", newTel: ""});
  const [filter, setFilter] = useState("");

  function uniqueName(name) {
    let lowerName = name.toLowerCase();
    let unique = persons.find(person => person.name.toLowerCase() === lowerName);
    if(unique === undefined) return true;
    else return false;
  }

  function uniqueTel(tel) {
    let unique = persons.find(person => person.tel === tel);
    if(unique === undefined) return true;
    else return false;
  };

  function telCorrectFormat(tel) {
    return (/^\d+$/.test(tel))
  }

  function addPerson(e) {
    e.preventDefault();

    if (states.newName !== "" && states.newTel !== "") {
      if(uniqueName(states.newName) && uniqueTel(states.newName) && telCorrectFormat(states.newTel)) {
        setPersons([...persons, { name: states.newName, tel: states.newTel}]);
        setStates({newName: "", newTel: ""});
      } else setStates({newName: "", newTel: ""});
    } else setStates({newName: "", newTel: ""});
  }

  function filtering(e) {
    setFilter(e.target.value);
    const filtered = persons.filter(person => person.name.includes(filter));
    setFilteredPersons([...filtered]);
  };
 
  return (
    <div className="flex flex-col gap-16 justify-center items-center p-5">
      <h2 className="text-6xl font-bold text-slate-300">Phonebook</h2>
      <form>
      <label htmlFor="filter" className="block mb-2 text-sm font-medium text-slate-300">Filter</label>
      <input value={filter} onChange={filtering}
              type="text"
              id="filter"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
      </form>
      <form onSubmit={addPerson}>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Name</label>
            <input value={states.newName} onChange={e => setStates({...states, newName: e.target.value})}
              type="text"
              id="name"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
          <label htmlFor="tel" className="block mb-2 text-sm font-medium text-slate-300">Tel</label>
            <input value={states.newTel} onChange={e => setStates({...states, newTel: e.target.value})}
              type="text"
              id="tel"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button onClick={addPerson} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">ADD</button>
        </div>
      </form>
      <h2 className="text-6xl font-bold text-slate-300">Numbers</h2>
      <div>
        <table className="table-auto">
          <tbody>
            {filter ? filteredPersons.map((person) => (
              <tr key={person.name} className="text-slate-300 text-xl">
                <td className="w-20">Name:</td>
                <td>{person.name}</td>
              </tr>
            )) : persons.map(person => (
              <tr key={person.name} className="text-slate-300 text-xl">
                <td className="w-20">Name:</td>
                <td>{person.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ...
    </div>
  );
}

export default App;
