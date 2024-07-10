import React from 'react';
import { SearchIcon, DotsVerticalIcon } from '@heroicons/react/solid';

const Products = () => {

  const [activeButton, setActiveButton] = React.useState(null);

const handleButtonClick = (button) => {
  setActiveButton(button);
};

const buttonClass = (button) =>
  `text-xl mb-4 font-semibold ${
    activeButton === button ? 'text-blue-500 border-b-2 border-blue-500' : 'text-black'
  }`;

  return (
    <div className="flex flex-col flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>
      <div className="mb-8 flex items-center">
        <div className="relative w-1/2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">Create Project</button>
      </div>

      <div className="mb-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full">
          <div className="w-full md:w-1/2">
        <button
          className={buttonClass('myProjects')}
          onClick={() => handleButtonClick('myProjects')}
        >
          Products
        </button>
        <div className="bg-white rounded shadow"></div>
      </div>
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4">Built</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Article Number</th>
                <th className="py-2 px-4">Recit</th>
                <th className="py-2 px-4">Update</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">image</td>
                <td className="py-2 px-4 border-b">Monobloc</td>
                <td className="py-2 px-4 border-b">12345</td>
                <td className="py-2 px-4 border-b">01-03-2023</td>
                <td className="py-2 px-4 border-b">01-03-2026</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-gray-500 hover:text-gray-700">
                    <DotsVerticalIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
