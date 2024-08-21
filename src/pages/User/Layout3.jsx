import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Layout3 = ({ title, description, fields = [], imageUrl }) => {
  console.log("Fields:", fields);
  console.log("Title:", title);
  console.log("Description:", description);
  console.log("Image URL:", imageUrl);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-[#1B76BB] p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-semibold">KEDDA EXPO</h1>
        <a href="/" className="text-sm font-semibold text-white flex items-center">
          <FaArrowLeft className="text-white text-sm mr-2" />
          Back to Home
        </a>
      </nav>

      {/* Main content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left side image section */}
        <div className="w-full md:w-1/4 overflow-hidden">
          <img
            src={imageUrl || '/default-image.jpg'} // Fallback image URL
            alt="Banner"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right side form section */}
        <div className="w-full md:w-3/4 p-8 md:p-12 bg-white">
          <div>
            <h2 className="text-3xl font-semibold mb-4">{title || 'Title'}</h2>
            <p className="text-gray-600 mb-6">{description || 'Description'}</p>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
              {fields.length > 0 ? (
                fields.map((field) => (
                  <div key={field._id} className="mb-4">
                    <label
                      htmlFor={field._id}
                      className="block font-semibold text-gray-800"
                    >
                      {field.name || 'Field Name'} <span className="text-blue-600">*</span>
                    </label>
                    {field.type === 'select' ? (
                      <select
                        id={field._id}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        {field.options && field.options.length > 0 ? (
                          field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))
                        ) : (
                          <option value="">No options available</option>
                        )}
                      </select>
                    ) : (
                      <input
                        type={field.type || 'text'}
                        id={field._id}
                        placeholder={field.placeholder || 'Placeholder'}
                        required={field.required || false}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p>No fields available</p>
              )}

              {/* Submit button */}
              <div className="col-span-1 md:col-span-2 mt-6 text-left">
                <button
                  type="submit"
                  className="w-full md:w-auto py-2 px-4 bg-[#338AE1] text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout3;
