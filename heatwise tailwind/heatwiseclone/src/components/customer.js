import React from 'react';
import { PlusIcon } from '@heroicons/react/outline';

const Customers = () => {

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
        <h1 className="text-2xl">Customers</h1>
      </div>
      <div className="mb-8 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded w-1/2"
        />
        <button className="ml-4 flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded">
          <PlusIcon className="h-5 w-5 text-white mr-2" /> Create Customer
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <button
          className={buttonClass('myProjects')}
          onClick={() => handleButtonClick('myProjects')}
        >
          All Customers
        </button>
        <div className="bg-white rounded shadow"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Projects</th>
              <th className="py-2 px-4">Customer Number</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Ahsan Siddiqui</td>
              <td className="py-2 px-4 border-b">Ahsan@example.com</td>
              <td className="py-2 px-4 border-b">5</td>
              <td className="py-2 px-4 border-b">12345</td>
              <td className="py-2 px-4 border-b">01-01-2023</td>
              <td className="py-2 px-4 border-b">
                <button className="text-gray-500">
                  <i className="fa fa-ellipsis-h"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
