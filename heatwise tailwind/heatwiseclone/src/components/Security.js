import React, { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

const Security = () => {
  const [currentEmail, setCurrentEmail] = useState('user@example.com'); 
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = () => {
    alert('Email address updated successfully.');
  };

  return (
    <div className="flex flex-col p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Security</h1>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Current Email Address</label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="text"
            value={currentEmail}
            disabled
            className="block w-full pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">New Email Address</label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="block w-full pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm by Password</label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pr-10 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4 self-center"
        onClick={handleEmailChange}
      >
        Adjust Email Address
      </button>
    </div>
  );
};

export default Security;
