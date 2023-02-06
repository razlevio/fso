import { lowerCase, startCase } from "lodash";

function FormSection({type, value, handleChange}) {
    const lowerType = lowerCase(type);
    const startCaseType = startCase(type);
    return (
        <div>
            <label htmlFor={lowerType} className="block mb-2 text-sm font-medium text-slate-300">{startCaseType}</label>
            <input value={value} onChange={e => handleChange(e, `new${startCaseType}`)}
            type="text"
            id="name"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
    );
};

function AddPersonForm({handleSubmit, states, handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
            <FormSection type="name" value={states.newName} handleChange={handleChange} />
            <FormSection type="tel" value={states.newTel} handleChange={handleChange} />
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">ADD</button>
        </div>
      </form>
    );
};

export default AddPersonForm;