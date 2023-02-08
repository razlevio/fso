function Phonebook({filter, filteredPersons, persons, handleRemove}) {
    return (
        <div>
            <table className="table-auto">
                <tbody>
                    {filter ? filteredPersons.map((person) => (
                        <tr key={person.name} className="text-slate-300 text-xl">
                            <td className="p-5">{person.name}</td>
                            <td className="p-5">{person.tel}</td>
                            <td><button onClick={e => handleRemove(e, person.id)} className="p-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">REMOVE</button></td>
                        </tr>
                    )) : persons.map(person => (
                        <tr key={person.name} className="text-slate-300 text-xl">
                            <td className="p-5">{person.name}</td>
                            <td className="p-5">{person.tel}</td>
                            <td><button onClick={e => handleRemove(e, person.id)} className="p-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">REMOVE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Phonebook;