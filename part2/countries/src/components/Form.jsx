function Form({ onSearchInputChange }) {
    return (
        <div className="flex justify-center items-center m-8">
            <input type="text" onChange={onSearchInputChange} placeholder={"Search for a country..."} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
    );
}

export default Form;