import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [activeButton, setActiveButton] = React.useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttonClass = (button) =>
    `text-xl mb-4 font-semibold ${
      activeButton === button ? 'text-blue-500 border-b-2 border-blue-500' : 'text-black'
    }`;

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName); 
  };


  return (
    <div className="flex flex-col flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Projects</h1>
      </div>
      <div className="mb-8 flex">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded-l w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Create Project
        </button>
      </div>

      <div className="mb-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2">
        <button
          className={buttonClass('myProjects')}
          onClick={() => handleButtonClick('myProjects')}
        >
          My Projects
        </button>
        <div className="bg-white rounded shadow"></div>
      </div>

      <div className="w-full md:w-1/2">
        <button
          className={buttonClass('projectsFromOperations')}
          onClick={() => handleButtonClick('projectsFromOperations')}
        >
          Projects from Operations
        </button>
        <div className="bg-white rounded shadow"></div>
      </div>
    </div>
      <hr className="my-4" />

      <div className="flex space-x-4 mb-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          All
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          Archived
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          Completed
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          In Progress
        </button>
      </div>

      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Under
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Project Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td
                className="px-6 py-4 whitespace-nowrap cursor-pointer"
                onClick={() => handleProjectClick('Project Gamma')}
              >
                Project Gamma
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Ahsan</td>
              <td className="px-6 py-4 whitespace-nowrap">Archived</td>
              <td className="px-6 py-4 whitespace-nowrap">01-03-2023</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </MenuButton>
                  </div>
                  <MenuItems
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => console.log('Edit clicked')}
                          className={`${active ? 'bg-gray-100' : ''
                            } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                        >
                          Edit
                        </button>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <button
                          onClick={() => console.log('Delete clicked')}
                          className={`${active ? 'bg-gray-100' : ''
                            } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                        >
                          Delete
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {selectedProject && (
        <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">{selectedProject}</h2>
          <p>Project details and content would go here...</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
