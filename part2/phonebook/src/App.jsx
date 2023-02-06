import { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import AddPersonForm from "./components/AddPersonForm";
import Phonebook from "./components/Phonebook";
import { getAll, create, update } from "./services/phonebook";

function App() {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([...persons]);
  const [states, setStates] = useState({newName: "", newTel: ""});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getAll().then(res => setPersons(res))
  }, []);

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
        create({name: states.newName, number: states.newTel})
          .then(res => console.log(res))
        setStates({newName: "", newTel: ""});
      } else setStates({newName: "", newTel: ""});
    } else setStates({newName: "", newTel: ""});
  }

  function filtering(e) {
    setFilter(e.target.value);
    const filtered = persons.filter(person => person.name.includes(filter));
    setFilteredPersons([...filtered]);
  };

  function handleInputChange(e, key) {
    setStates({...states, [key]: e.target.value});
  };
 
  return (
    <div className="flex flex-col gap-16 justify-center items-center p-5">
      <Title title="phonebook" />
      <SearchForm currentFilter={filter} handleChange={filtering} />
      <AddPersonForm handleSubmit={addPerson} states={states} handleChange={handleInputChange} />
      <Title title="numbers" />
      <Phonebook filter={filter} filteredPersons={filteredPersons} persons={persons} />
    </div>
  );
}

export default App;
