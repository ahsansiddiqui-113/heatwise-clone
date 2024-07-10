import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeamMembers = () => {
  const [activeMember, setActiveMember] = useState(null);

  const members = [
    {
      name: 'Ahsan Siddiqui',
      role: 'Admin',
      email: 'example@gmail.com',
    },
  ];

  const handleMemberClick = (member) => {
    setActiveMember(member);
  };

  return (
    <div className="flex flex-col flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Team Members</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Invite a Team Member</button>
      </div>
      <div className="mb-8">
        <p>Invite more people to your account</p>
      </div>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Active members</h2>
          <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {members.map((member, index) => (
              <li
                key={index}
                className="cursor-pointer p-4 hover:bg-gray-50"
                onClick={() => handleMemberClick(member)}
              >
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl font-semibold mr-4">
                    {member.name[0]}
                  </div>
                  <div>
                    <div className="text-lg font-medium text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-500">{member.role}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Further information</h2>
          <p className="text-gray-500 mb-4">Click on active members and view further information</p>
          {activeMember && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-xl font-semibold mr-4">
                  {activeMember.name[0]}
                </div>
                <div>
                  <div className="text-xl font-medium text-gray-900">{activeMember.name}</div>
                  <div className="text-sm text-gray-500">{activeMember.email}</div>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">Roles and access rights</h3>
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{activeMember.role}</span>
                  <button className="text-gray-500 hover:text-gray-700">
                    <i className="fa fa-pencil"></i>
                  </button>
                </div>
              </div>
              <div className="text-red-500 cursor-pointer">Deleting Profile</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
