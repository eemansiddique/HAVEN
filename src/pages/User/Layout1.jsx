// import React from 'react';
// import logoform from '../../assets/images/logoform.png';
// import formImg from '../../assets/images/formImg.png';
// import { FaArrowLeft } from 'react-icons/fa';

// const Layout1 = ({ title, description, leftFields, rightFields }) => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       {/* Navbar with white background */}
//       <div className="w-full bg-white ">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <img
//               src={logoform}
//               alt="Logo"
//               className="w-12 h-12 object-contain"
//             />
//           </div>
//           <div className="flex items-center">
//             <a href="/" className="text-sm font-semibold text-blue-600 flex items-center">
//               <FaArrowLeft className="text-blue-600 text-sm mr-2" />
//               Back to Home
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Banner Image with padding */}
//       <div className="w-full max-w-6xl mx-auto px-4">
//         <img
//           src={formImg}
//           alt="Banner"
//           className="w-full"
//           style={{ width: '100%', height: 'auto' }}
//         />
//       </div>
//       <div className="relative w-full max-w-4xl bg-white rounded-lg p-6">
//         <div className="text-left">
//           <h2 className="text-2xl font-semibold mb-6">{title}</h2>
//           <p className="text-gray-600 mb-8">{description}</p>
//         </div>
//         <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {/* Left Column - First 5 Fields */}
//           <div className="space-y-6">
//             {leftFields.map((field) => (
//               <div key={field._id} className="mb-6">
//                 <label
//                   htmlFor={field._id}
//                   className="block font-semibold text-black"
//                 >
//                   {field.label} <span className="text-blue-600">*</span>
//                 </label>
//                 {field.type === 'select' ? (
//                   <select
//                     id={field._id}
//                     className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   >
//                     {field.options.map((option) => (
//                       <option key={option} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 ) : (
//                   <input
//                     type={field.type}
//                     id={field._id}
//                     placeholder={field.placeholder}
//                     required={field.required}
//                     className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//           {/* Right Column - Remaining Fields */}
//           <div className="space-y-6">
//             {rightFields.map((field) => (
//               <div key={field._id} className="mb-6">
//                 <label
//                   htmlFor={field._id}
//                   className="block font-semibold text-black"
//                 >
//                   {field.label} <span className="text-blue-600">*</span>
//                 </label>
//                 {field.type === 'select' ? (
//                   <select
//                     id={field._id}
//                     className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   >
//                     {field.options.map((option) => (
//                       <option key={option} value={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </select>
//                 ) : (
//                   <input
//                     type={field.type}
//                     id={field._id}
//                     placeholder={field.placeholder}
//                     required={field.required}
//                     className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </form>
//         <div className="mt-6">
//           <button
//             type="submit"
//             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

//  export default Layout1;


import React from 'react';
import logoform from '../../assets/images/logoform.png';
import formImg from '../../assets/images/formImg.png';
import { FaArrowLeft } from 'react-icons/fa';

const Layout1 = ({ title, description, leftFields = [], rightFields = [] }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Navbar with white background */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logoform}
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="flex items-center">
            <a href="/" className="text-sm font-semibold text-blue-600 flex items-center">
              <FaArrowLeft className="text-blue-600 text-sm mr-2" />
              Back to Home
            </a>
          </div>
        </div>
      </div>
      {/* Banner Image with padding */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <img
          src={formImg}
          alt="Banner"
          className="w-full"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="relative w-full max-w-4xl bg-white rounded-lg p-6">
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-6">{title}</h2>
          <p className="text-gray-600 mb-8">{description}</p>
        </div>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left Column - Fields */}
          <div className="space-y-6">
            {leftFields.map((field) => (
              <div key={field._id} className="mb-6">
                <label
                  htmlFor={field._id}
                  className="block font-semibold text-black"
                >
                  {field.name} <span className="text-blue-600">*</span>
                </label>
                {field.type === 'select' ? (
                  <select
                    id={field._id}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {/* Ensure field.options exists and is an array */}
                    {Array.isArray(field.options) ? (
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
                    type={field.type}
                    id={field._id}
                    placeholder={field.placeholder}
                    required={field.required || false}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                )}
              </div>
            ))}
          </div>
          {/* Right Column - Fields */}
          <div className="space-y-6">
            {rightFields.map((field) => (
              <div key={field._id} className="mb-6">
                <label
                  htmlFor={field._id}
                  className="block font-semibold text-black"
                >
                  {field.name} <span className="text-blue-600">*</span>
                </label>
                {field.type === 'select' ? (
                  <select
                    id={field._id}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {/* Ensure field.options exists and is an array */}
                    {Array.isArray(field.options) ? (
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
                    type={field.type}
                    id={field._id}
                    placeholder={field.placeholder}
                    required={field.required || false}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                )}
              </div>
            ))}
          </div>
        </form>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
