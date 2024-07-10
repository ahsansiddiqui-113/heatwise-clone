import React from 'react';

const Subscription = () => {
  return (
    <div className="flex flex-col p-8 bg-white h-screen">
      <h1 className="text-3xl font-bold mb-8">Subscription</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Subscription Details</h2>
        
        <div className="mb-4">
          <p className="font-semibold">Subscription Plan:</p>
          <p>Premium</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Subscription Status:</p>
          <p>Active</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Remaining Runtime of the Test Phase:</p>
          <p>0 Tage – Probezeit ist abgelaufen</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Customer ID:</p>
          <p>123456789</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Start Date of the Subscription:</p>
          <p>June 1, 2024</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold">Date of Subscription:</p>
          <p>May 15, 2024</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p>Manage subscription</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Manage
        </button>
      </div>
    </div>
  );
};

export default Subscription;
