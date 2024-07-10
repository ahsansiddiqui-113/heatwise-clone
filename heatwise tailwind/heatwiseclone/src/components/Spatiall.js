import React, { useState } from 'react';

const Spatiall = () => {
  const [numPersons, setNumPersons] = useState('');

  const handleInputChange = (e) => {
    setNumPersons(e.target.value);
  };

  return (
    <div className="flex flex-col p-8 bg-white h-screen">
      <h1 className="text-3xl font-bold mb-8">Spatial space building data</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Indication of the Number of Persons in the House</h2>
        <p className="mb-4">
          The query to the number of people is made as a fixed selection up to max. 8 persons. Specify that this query can be fulfilled via free entry.
        </p>
        <div className="flex flex-col mt-4">
          <label htmlFor="numPersons" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Persons
          </label>
          <input
            type="number"
            id="numPersons"
            value={numPersons}
            onChange={handleInputChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <p className="mt-2 text-sm text-gray-500">Free entry instead of set selection</p>
        </div>
      </div>
    </div>
  );
};

export default Spatiall;
