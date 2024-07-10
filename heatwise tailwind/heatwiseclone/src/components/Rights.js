import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const Rights = () => {
  const [editingMode, setEditingMode] = useState(false);
  const [adminVisibility, setAdminVisibility] = useState('nein');
  const [employeeVisibility, setEmployeeVisibility] = useState('nein');

  const handleEditClick = () => {
    setEditingMode(true);
  };

  const handleCancelClick = () => {
    setEditingMode(false);
  };

  const handleSaveClick = () => {
    setEditingMode(false);
  };

  const handleAdminVisibilityChange = (e) => {
    setAdminVisibility(e.target.value);
  };

  const handleEmployeeVisibilityChange = (e) => {
    setEmployeeVisibility(e.target.value);
  };

  return (
    <div className="flex flex-col p-8 bg-white h-screen">
      <h1 className="text-3xl font-bold mb-8">Rights</h1>

      <div className="mb-8 flex items-center">
        <h2 className="text-2xl font-semibold mr-4">Visibility</h2>
        {!editingMode ? (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        ) : (
          <>
            <button
              onClick={handleCancelClick}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg">Lead requests visible to administrators only</p>
          <select
            value={adminVisibility}
            onChange={handleAdminVisibilityChange}
            disabled={!editingMode}
            className="border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="nein">Nein</option>
            <option value="ja">Ja</option>
          </select>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-lg">Employees can only view their own projects</p>
          <select
            value={employeeVisibility}
            onChange={handleEmployeeVisibilityChange}
            disabled={editingMode}
            className="border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="nein">Nein</option>
            <option value="ja">Ja</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Rights;
