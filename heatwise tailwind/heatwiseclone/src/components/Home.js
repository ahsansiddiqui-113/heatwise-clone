import React from 'react';
import { Line } from 'react-chartjs-2';
import { InformationCircleIcon, FolderIcon, ArrowUpIcon, ChatIcon, ChartBarIcon, ChartPieIcon } from '@heroicons/react/outline';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['Mai', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Projects',
      data: [7, 8, 3],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Number of Projects',
      },
      min: 0,
      max: 10,
    },
  },
};

const Home = () => {
  return (
    <main className="py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl">Welcome back, Ahsan Siddiqui</h1>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                <InformationCircleIcon className="h-5 w-5 mr-2" /> Help
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Ahsan Siddiqui</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl mb-4">Your projects</h2>
              <p className="text-3xl font-bold">32</p>
              <Line data={chartData} options={chartOptions} />
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl mb-4">Open projects</h2>
              <div className="flex justify-between mb-4">
                <span>Total number</span>
                <span>11</span>
              </div>
              <ul className="list-none p-0">
                <li className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
                  <span className="flex items-center">
                    <FolderIcon className="h-5 w-5 mr-2" /> SF electric...
                  </span>
                  <span>06.05.2024</span>
                </li>
                <li className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
                  <span className="flex items-center">
                    <FolderIcon className="h-5 w-5 mr-2" /> SF electric...
                  </span>
                  <span>25.04.2024</span>
                </li>
                <li className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
                  <span className="flex items-center">
                    <FolderIcon className="h-5 w-5 mr-2" /> Test prosk...
                  </span>
                  <span>23.04.2024</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl mb-4">Installations</h2>
              <div className="flex justify-between mb-4">
                <span>Installations this month</span>
                <span>1</span>
              </div>
              <ul className="list-none p-0">
                <li className="flex justify-between items-center bg-gray-100 p-4 mb-2 rounded">
                  <span>Schönaic...</span>
                  <span>30.06.2024</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 bg-white p-6 rounded shadow">
              <h2 className="text-xl mb-4">Service</h2>
              <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
                <ArrowUpIcon className="h-5 w-5 mr-2" /> Give feedback
              </button>
            </div>
            <button className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full flex items-center justify-center">
              <ChatIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
