import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/solid';

const Integration = () => {
  return (
    <div className="flex flex-col flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Integration</h1>
      </div>

      <div className="mb-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3">
          <button className="text-xl font-semibold mb-4">Apps</button>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              {/* Table content for Apps */}
            </table>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <button className="text-xl font-semibold mb-4">API</button>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              {/* Table content for API */}
            </table>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <button className="text-xl font-semibold mb-4">Webhooks</button>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full">
              {/* Table content for Webhooks */}
            </table>
          </div>
        </div>
      </div>
      
      <hr className="my-4" />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Key
              </th>
              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="py-2 px-4">Project Gamma</td>
              <td className="py-2 px-4">Ahsan</td>
              <td className="py-2 px-4">01-03-2023</td>
              <td className="py-2 px-4">Archived</td>
              <td className="py-2 px-4">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                      <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm`}
                            >
                              Edit
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              } block px-4 py-2 text-sm`}
                            >
                              Delete
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Integration;
