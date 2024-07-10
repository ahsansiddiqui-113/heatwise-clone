import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Account</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal settings.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Profile</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/profile">Profile</Link>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Notifications</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/notification">Notifications</Link>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Security</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/security">Security</Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Companies</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Settings for the company.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">General</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/general">General</Link>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Rights</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/rights">Rights</Link>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Integrations</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/integration">Integrations</Link>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Subscription</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/subscription">Subscription</Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Products</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Settings for products.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Heat pump check</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/heat">Heat pump check</Link>
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Techn. Feasibility analysis</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/tech">Techn. Feasibility analysis</Link>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Spatial space building data</dt>
                <dd className="mt-1 text-sm text-blue-500 sm:mt-0 sm:col-span-2">
                  <Link to="/space">Spatial space building data</Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
