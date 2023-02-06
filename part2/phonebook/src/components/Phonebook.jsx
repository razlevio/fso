function Phonebook({filter, filteredPersons, persons}) {
    return (
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
    );
};

export default Phonebook;