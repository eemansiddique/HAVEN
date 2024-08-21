import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faCaretDown ,faInfoCircle,faSliders,faEnvelope,faReply,faPlus,faStar} from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup'; // Import the Popup component
import 'reactjs-popup/dist/index.css'; // Ensure the popup styles are imported
import PopUp from './PopUp'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
   


const fieldTypes = {
  text: {
    component: (placeholder) => <input type="text" placeholder={placeholder} />,
  },
  textarea: {
    component: (placeholder) => <textarea placeholder={placeholder} />,
  },
  number: {
    component: (placeholder) => <input type="number" placeholder={placeholder} />,
  },
  dropdown: {
    component: (options) => (
      <select>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ),
  },
  date: {
    component: (placeholder) => <input type="date" placeholder={placeholder} />,
  },
  time: {
    component: (placeholder) => <input type="time" placeholder={placeholder} />,
  },
  slider: {
    component: (placeholder) => <input type="range" />,
  },
  rating: {
    component: (placeholder) => <input type="number" min="1" max="5" />,
  },
  file: {
    component: (placeholder) => <input type="file" />,
  },
  signature: {
    component: (placeholder) => <input type="text" placeholder="Signature" />,
  },
  choice: {
    component: (placeholder) => (
      <div>
        <input type="radio" id="choice1" name="choice" value="choice1" />
        <label htmlFor="choice1">Choice 1</label>
        <input type="radio" id="choice2" name="choice" value="choice2" />
        <label htmlFor="choice2">Choice 2</label>
      </div>
    ),
  },
};


const AdminDashboard = () => {
  const [showFields, setShowFields] = useState(false);
  const [visibility, setVisibility] = useState('published'); // Default to published
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 const [formTitle, setFormTitle] = useState('Feedback Form');
 const [formDescription, setFormDescription] = useState('This is sample description');
 const [selectedFields, setSelectedFields] = useState([]);
 const [selectedFieldProperties, setSelectedFieldProperties] = useState(null);// for saving  properties of field
 const [isRequired, setIsRequired] = useState(false); // Moved here
 const [isVisible, setIsVisible] = useState(true);

 //for properties live updation
 const [fields, setFields] = useState([]);
 const [selectedFieldIndex, setSelectedFieldIndex] = useState(null);




const handleFieldSelect = (field) => {
  //new line added for properties live updation
  setSelectedFieldIndex(fields.length); // Set index of the newly added field
  setSelectedFields(prevFields => [...prevFields, ...field]);
};

 //new function added for properties live updation
// Update field properties
// Handle property change for the selected field
const handlePropertyChange = (property, value) => {
  setFields(prevFields => {
    const updatedFields = [...prevFields];
    if (selectedFieldIndex !== null) {
      updatedFields[selectedFieldIndex] = {
        ...updatedFields[selectedFieldIndex],
        [property]: value
      };
    }
    return updatedFields;
  });
};

const handleFieldClick = (field) => {
  setSelectedFieldProperties(field);
};
// const handleFieldClick = (index) => {
//   setSelectedFieldProperties(selectedFields[index]);
// };


  const handleInformationClick = () => {
    setShowFields(!showFields);
  };
  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };
  const handleInsertFieldClick = () => {
    console.log('Popup opened'); // Add for debugging
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  };
  
  const handleDescriptionChange = (e) => {
    setFormDescription(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Form submitted');
  };
  const handleDeleteField = (index) => {
    setFields(prevFields => prevFields.filter((_, i) => i !== index));
    setSelectedFields(prevFields => prevFields.filter((_, i) => i !== index));
  };


  /*required function */
  const InputField = () => {
    const [isRequired, setIsRequired] = useState(false);
    // const [isVisible, setIsVisible] = useState(true);
  }
  return (
    <div className="container1">
     <header className="header">
      <h1 className='items-start font-bold text-xl'>{formTitle}</h1>
      <span className=' text-gray-500 text-sm'>Last Modified 1 min ago</span>
        {/* Your header content here */}
      </header>
      <div className="layout">
        <div className="layout-item ">
        
          <button className="flex justify-between  border border-gray-300 p-2 w-full"
          onClick={handleInformationClick}
          >
             <FontAwesomeIcon icon={faInfoCircle} style={{ color: 'lightgray',  }} />
          <span className="ml-2 flex-1 text-left">Information</span>
            <FontAwesomeIcon icon={faCaretDown} style={{ color: 'gray' }} />
          </button>

           {showFields && (
        <>
        <div className="px-4 py-2">
          <label className=" hee text-sm mt-5">Form Title</label>
          <input
            type="text"
            className="border border-gray-300 p-3 w-full mt-1 rounded-xl"
            placeholder="Title"
            value={formTitle}
            onChange={handleTitleChange}
          />
        </div>
      
        <div className="px-4 py-2">
          <label className=" text-sm mt-4">Description</label>
          <textarea
            className="border border-gray-300 rounded-xl p-3 w-full"
            placeholder="Description"
            value={formDescription}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
      
        <div className="px-4 py-2">
          <label className="text-sm mt-4">Visibility</label>
          <select
            className="border border-gray-300 p-3 w-full rounded-xl"
            value={visibility}
            onChange={handleVisibilityChange}
          >
            <option value="published">Published</option>
            <option value="not-published">Not Published</option>
          </select>
        </div>
      </>
      
        
         
          )}
          {/* second button */}
          <button className="flex justify-between  border border-gray-300 p-2 w-full"
          onClick={handleInformationClick}
          >
            <FontAwesomeIcon icon={faSliders} style={{ color: 'lightgray',  }} />
          <span className="ml-2 flex-1 text-left">Customization</span>
            <FontAwesomeIcon icon={faCaretDown} style={{ color: 'gray' }}  />
          </button>
          {/* third button */}
          <button className="flex justify-between  border border-gray-300 p-2 w-full"
          onClick={handleInformationClick}
          >
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'lightgray',  }} />
          <span className="ml-2 flex-1 text-left">Submissions</span>
            <FontAwesomeIcon icon={faCaretDown} style={{ color: 'gray' }} />
          </button>
          {/* fourth button */}
          <button className="flex justify-between  border border-gray-300 p-2 w-full"
          onClick={handleInformationClick}
          >
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'lightgray',  }} />

          <span  className="ml-2 flex-1 text-left">ApprovalMessaging</span>
            <FontAwesomeIcon icon={faCaretDown} style={{ color: 'gray' }} />
          </button>
          {/* fifth button */}
          <button className="flex justify-between  border border-gray-300 p-2 w-full"
          onClick={handleInformationClick}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'lightgray',  }} />
          <span className="ml-2 flex-1 text-left">Responses</span>
            <FontAwesomeIcon  icon={faCaretDown}style={{ color: 'gray' }}  />
          </button>
        </div>
        <div className="layout-item bg-gray-100">
          <button className="button flex justify-between border border-blue-500 rounded p-2 ml-6 mt-6" onClick={handleInsertFieldClick}>
            <FontAwesomeIcon className="mt-3" icon={faPlus} style={{ color: 'blue' }} />
            <span className="ml-2 mt-2 flex-1 text-left">Insert Fields</span>
          </button>
         
     
      {isPopupOpen && <PopUp closePopup={closePopup} isOpen={handleInsertFieldClick}  onFieldSelect={handleFieldSelect}  />}
        
 <div className="bg-white ml-4 mr-4 p-6 mt-6 rounded border border-gray-300">
  <div className="flex justify-between items-center relative">
    <h2 className="text-xl font-bold">{formTitle}</h2>
   
    <div className="flex flex-col items-center ">
      <button className="p-2 bg-blue-600 rounded-full text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      </button>
      <span className="ml-2 text-gray-500 text-sm">
        Type using AI
      </span>
    </div>
  </div>
  <p className="text-sm ">{formDescription}</p>
  {/* Additional form fields can go here */}



  <div className="grid grid-cols-2 gap-4 mt-6 ml-4 mr-4">
  {selectedFields.map((field, index) => (
    <div
      key={index}
      className="bg-white p-4 rounded-xl shadow-sm field-container"
      style={{ marginBottom: '1rem' }}
      onClick={() => handleFieldClick(field)}
    >
       <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={() => handleDeleteField(index)}
        />
      <label 
        htmlFor={field.name}
        className="block text-sm font-medium text-gray-700"
      >
        {field.name}*
        {/* <FontAwesomeIcon 
          icon={faStar} 
          className="text-blue-600 ml-1" 
          style={{ fontSize: '0.75rem' }} 
        /> */}
      </label>

      <div className="mt-2 field-content">
        {field.type === 'textarea' ? (
          <textarea
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        ) : field.type === 'dropdown' ? (
          <select
            id={field.name}
            name={field.name}
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
          >
            {field.options.map((option, optionIndex) => (
              <option key={optionIndex} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
          />
        )}
      </div>
    </div>
  ))}
</div>


<div className="mt-4 pb-8 clearfix">
  <button
    className="bg-black text-white rounded-xl px-4 py-2 text-lg float-right"
    onClick={handleSubmit}
    disabled={selectedFields.length === 0}
  >
    Submit
  </button>
</div>


</div>
        </div> 



      {/* //layout 3// */}
        <div className="layout-item">



          <p className='ml-4 mt-4 font-semibold'>Properties</p>
          {selectedFieldProperties && (
   <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
   <div className="mb-4">
     <label className="block text-sm font-medium text-gray-700 mb-2">
       Name <span className="text-red-500">*</span>
     </label>
     <input
     value={selectedFieldProperties.placeholder}
       type="text"
       className="block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      //  placeholder="Enter your first name"
       id="firstname_purchaser"
       required
     />
   </div>
   {/* Required Toggle */}
   <div className="mb-4 flex flex-col">
  <div className="flex items-center mb-1">
    <input
      type="checkbox"
      className="mr-2"
      checked={isRequired}
      onChange={() => setIsRequired(!isRequired)}
    />
    <label className="text-sm text-gray-700">Required</label>
  </div>
  <span className="text-gray-400 text-sm">
    Force users to fill out this field, otherwise it will be optional
  </span>
</div>


      {/* Field ID */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Field ID <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="firstname_purchaser"
          disabled
        />
      </div>


   <div className="mb-4">
     <label className="block text-sm font-medium text-gray-700">
       Description
     </label>
     <textarea
       className="block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
       placeholder="a brief description or hint to help the user fill."
       rows="4"
       maxLength="9000"
     />
   </div>

   <div className="mb-4">
     <label className="block text-sm font-medium text-gray-700 mb-2">
       Character Length <span className="text-red-500">*</span>
     </label>
     {/* <label className="block text-sm font-medium text-gray-700 mb-2 mt-15 ">
       Minimum<span className="text-red-500">*</span>
     </label>
     <label className="block text-sm font-medium text-gray-700 mb-2 text-center ">
       Maximum<span className="text-red-500">*</span>
     </label> */}
    <div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Minimum <span className="text-red-500">*</span>
    </label>
   
  </div>
  <div className="flex flex-col items-left ">
    <label className="block text-sm font-medium text-gray-700 mb-2 ">
      Maximum <span className="text-red-500">*</span>
    </label>
    
  </div>
</div>
     <div className="flex space-x-4">
       <input
         type="number"
         min="1"
         className="block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
         placeholder="Minimum"
         defaultValue="1"
       />
       <input
         type="number"
         max="150"
         className="block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
         placeholder="Maximum"
         defaultValue="150"
       />
     </div>

   <div className="mb-4">
      <div className="flex items-start mb-2 mt-3">
        <label className="text-sm text-gray-700">Visibility</label>
      </div>

      <div className="flex justify-start items-center">
        <button
          className="bg-gray-100 mx-1"
          onClick={() => setIsVisible(false)} // Hide button click
        >
          <div className="flex items-center space-x-1">
            <img
              src="https://img.icons8.com/?size=48&id=45233&format=png"
              alt="Hide Icon"
              className="w-4 h-4 opacity-50"
            />
            <span className="text-sm text-gray-400">Hide</span>
          </div>
        </button>
        <button
          className="bg-gray-100 mx-1"
          onClick={() => setIsVisible(true)} // Show button click
        >
          <div className="flex items-center space-x-1 ml-4">
            <img
              src="https://img.icons8.com/?size=48&id=85028&format=png"
              alt="Show Icon"
              className="w-4 h-4 opacity-50"
            />
            <span className="text-sm text-gray-400">Show</span>
          </div>
        </button>
      </div>

      {/* Conditionally render content based on visibility */}
      {isVisible && (
        <div className="mt-2 p-2 bg-gray-100">
          <p className='text-sm'>This content is now visible. Click "Hide" to hide it.</p>
        </div>
      )}
    </div>


   </div>
 </div>
          )}
        </div>
        {/* layout 3 end */}
       
      </div>
     
    </div>
    
   
  );
}

export default AdminDashboard; 



