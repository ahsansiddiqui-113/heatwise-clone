import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline'; 

const Facilities = () => {
  const [isHeatPumpExpanded, setIsHeatPumpExpanded] = useState(false);
  const [isCustomerPortalExpanded, setIsCustomerPortalExpanded] = useState(false);
  const [activeButton, setActiveButton] = React.useState(null);

const handleButtonClick = (button) => {
  setActiveButton(button);
};

const buttonClass = (button) =>
  `text-xl mb-4 font-semibold ${
    activeButton === button ? 'text-blue-500 border-b-2 border-blue-500' : 'text-black'
  }`;

  const handleToggleHeatPump = () => {
    setIsHeatPumpExpanded(!isHeatPumpExpanded);
  };

  const handleToggleCustomerPortal = () => {
    setIsCustomerPortalExpanded(!isCustomerPortalExpanded);
  };

  return (
    <div className="flex flex-col flex-1 p-8">
        <div className="w-full md:w-1/2">
        <button
          className={buttonClass('myProjects')}
          onClick={() => handleButtonClick('myProjects')}
        >
          Facilities
        </button>
        <div className="bg-white rounded shadow"></div>
      </div>
      
      <div className="mb-8">
        <p className="text-xl mb-4">Set up your heat pump check</p>
        <div className="bg-white rounded shadow p-4 cursor-pointer" onClick={handleToggleHeatPump}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg">Add your heat pump check to your website</h2>
            <button className="text-blue-500" onClick={handleToggleHeatPump}>
              {isHeatPumpExpanded ? 'Hide' : 'Show'}
              <ChevronDownIcon className="h-4 w-4 inline-block ml-2" />
            </button>
          </div>
          {isHeatPumpExpanded && (
            <div className="mt-4">
              <p>In the following step, we would like to show you how to integrate the heat pump check on your website. We have a step-by-step guide for you. Alternatively, we will set up the heat pump check together with you in a video conference.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Start</button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-xl mb-4">Set up your customer portal</p>
        <div className="bg-white rounded shadow p-4 cursor-pointer" onClick={handleToggleCustomerPortal}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg">Set up your customer portal</h2>
            <button className="text-blue-500" onClick={handleToggleCustomerPortal}>
              {isCustomerPortalExpanded ? 'Hide' : 'Show'}
              <ChevronDownIcon className="h-4 w-4 inline-block ml-2" />
            </button>
          </div>
          {isCustomerPortalExpanded && (
            <div className="mt-4">
              <p>Set up your customer portal individually for your business. In a few minutes you can share projects with your customer and receive data sorted through your customer portal.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Start</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
