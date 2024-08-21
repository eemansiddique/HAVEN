import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you are using react-router-dom for navigation

const HomePage = () => {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen flex flex-col">
      <nav className="w-full bg-[#1B76BB] p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-semibold">KEDDA EXPO</h1>
      </nav>
      <div className="flex-grow flex flex-col justify-center items-center text-center p-5">
        <h1 className='text-3xl font-bold mb-4'>Welcome to Our Form Builder</h1>
        <Link 
          to="/forms" // Adjust the route path as needed
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          See Forms
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
