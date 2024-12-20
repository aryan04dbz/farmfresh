import React, { useState } from 'react';
import './index.css';

const Search = () => {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

const MapPin = () => {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.653 16.224s-4.4-4.4-6.84-3.588l-2.976 1.864 1.464-1.964-8.136-3.588-6.216 4.312 6.18 6.096-1.136-1.864 8.132-5.416z"
      />
    </svg>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-emerald-700 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold">Freshfarm</div>
          <button className="text-white px-4 py-2 rounded hover:bg-emerald-600">
            Explore
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white bg-emerald-600 px-4 py-2 rounded hover:bg-emerald-500">
            Start selling on Freshfarm
          </button>
          <div className="text-white">
            <button className="p-2 rounded-full hover:bg-emerald-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
          <div className="text-white">
            <button className="p-2 rounded-full hover:bg-emerald-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src="./src/assets/hero.webp"
            alt="Farm background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-white space-y-6">
          <h1 className="text-5xl font-bold">Shop your local farms</h1>
          <div className="w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="What farm are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <p className="text-lg">At least 98% of your purchase goes back to the farm</p>
          <a href="#" className="text-lg hover:underline">
            Are you a farmer? Start selling on Freshfarm
          </a>
        </div>
      </div>
      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold">Farms selling near</h2>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
            <MapPin className="w-5 h-5" />
            <span>Explore on a map</span>
          </button>
        </div>
        {/* Seller Info Card */}
        <div className="mt-8 bg-purple-900 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 text-white md:w-2/3">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl"></span>
                <h3 className="text-2xl font-bold">Keeping Small Farms in Business</h3>
              </div>
              <p className="mb-6">
                Sell directly to customers, set your own schedule, and increase sales. 
                We are the only cooperatively-owned app for farm sales in the world.
              </p>
              <button className="bg-white text-purple-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Start selling
              </button>
            </div>
            <div className="md:w-1/3">
              <img
                src="/api/placeholder/600/400"
                alt="Farmers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;