function SearchForm({ currentFilter, handleChange }) {
  return (
    <form>
      <label
        htmlFor="filter"
        className="block mb-2 text-sm font-medium text-slate-300"
      >
        Filter
      </label>
      <input
        value={currentFilter}
        onChange={handleChange}
        type="text"
        id="filter"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </form>
  );
}

export default SearchForm;
