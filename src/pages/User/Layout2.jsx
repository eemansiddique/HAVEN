// import React from 'react';

// const Layout2 = ({ title, description, fields }) => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg max-w-4xl w-full">
//         <div className="w-full p-8 md:p-12 bg-blue-50 rounded-r-lg">
//           <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
//           <p className="text-center text-gray-500 mb-8">{description}</p>
//           <form className="grid grid-cols-2 gap-6">
//             {fields.map((field) => (
//               <div key={field._id} className="col-span-2 md:col-span-1 mb-6">
//                 <label
//                   htmlFor={field._id}
//                   className="block font-semibold text-gray-800"
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
//           </form>
//           <div className="mt-6">
//             <button
//               type="submit"
//               className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout2;


 import React from 'react';

const Layout2 = ({ title, description, fields=[] }) => {
  return (
    <div
      className="min-h-screen p-8"
      style={{
        background: 'linear-gradient(to bottom, #EBF8FF, #ffffff 80%)', // Gradient from blue to white
      }}
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-4 mt-8 pl-6">{title}</h2>
        <p className="text-gray-500 mb-2 pl-6">{description}</p>
        <form className="grid grid-cols-2 gap-4"> {/* Using grid for 2 sections with reduced gap */}
        {fields.map((field) => (
  <div key={field._id} className="mb-2 pl-6">
    <label
      htmlFor={field._id}
      className="block font-semibold text-gray-800"
    >
      {field?.name || 'Unknown'} <span className="text-red-500">*</span>
    </label>
    {field?.type === 'select' ? (
      <select
        id={field._id}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {Array.isArray(field?.options) && field.options.length > 0 ? (
          field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option>No options available</option>
        )}
      </select>
    ) : (
      <input
        type={field?.type || 'text'}
        id={field._id}
        placeholder={field?.placeholder || 'Enter value'}
        required={field?.required || false}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    )}
  </div>
))}
          <div className="mt-24"> {/* Reduced margin-top for the button */}
          <button
              type="submit"
              style={{ backgroundColor: '#338AE1' }} // Custom button color
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Layout2;
