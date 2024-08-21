import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faGlobe, faBuilding, faMicrophone, faParagraph, faHashtag, faList, faCalendar, faClock, faSlidersH, faStar, faUpload, faSignature } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const PopUp = ({ isOpen, closePopup, onFieldSelect }) => {
  const [savedFields, setSavedFields] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);

  // Fetch fields from the database when component mounts
  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/listfields'); // Add your API endpoint here
        setSavedFields(response.data.fields);
      } catch (error) {
        console.error('Error fetching fields:', error);
      }
    };

    fetchFields();
  }, []);

  if (!isOpen) return null;

  const handleFieldClick = (field) => {
    const { type, label, placeholder } = field;
    const newField = { type, name: label, placeholder };
    setSelectedFields((prevFields) => [...prevFields, newField]);
  };

  const handleInsertFields = () => {
    console.log('Selected fields:', selectedFields);
    onFieldSelect(selectedFields);
    closePopup();
  };

  // Render fields based on the type
  const renderField = (field) => {
    const { type, label } = field;

    switch (type) {
      case 'text':
      case 'textarea':
      case 'number':
      case 'date':
      case 'time':
      case 'file':
      case 'signature':
        return (
          <div
            key={label}
            className="flex items-center justify-center border-gray-300 p-2 rounded h-16 cursor-pointer hover:bg-gray-100"
            onClick={() => handleFieldClick(field)}
          >
            <FontAwesomeIcon icon={faParagraph} />
            <span className="ml-2">{label}</span>
          </div>
        );
      case 'select':
        return (
          <div
            key={label}
            className="flex items-center justify-center  border-gray-300 p-2 rounded h-16 cursor-pointer hover:bg-gray-100"
            onClick={() => handleFieldClick(field)}
          >
            <FontAwesomeIcon icon={faList} />
            <span className="ml-2">{label}</span>
          </div>
        );
      case 'slider':
        return (
          <div
            key={label}
            className="flex items-center justify-center  border-gray-300 p-2 rounded h-16 cursor-pointer hover:bg-gray-100"
            onClick={() => handleFieldClick(field)}
          >
            <FontAwesomeIcon icon={faSlidersH} />
            <span className="ml-2">{label}</span>
          </div>
        );
      case 'rating':
        return (
          <div
            key={label}
            className="flex items-center justify-center  border-gray-300 p-2 rounded h-16 cursor-pointer hover:bg-gray-100"
            onClick={() => handleFieldClick(field)}
          >
            <FontAwesomeIcon icon={faStar} />
            <span className="ml-2">{label}</span>
          </div>
        );
      case 'choice':
        return (
          <div
            key={label}
            className="flex items-center justify-center  border-gray-300 p-2 rounded h-16 cursor-pointer hover:bg-gray-100"
            onClick={() => handleFieldClick(field)}
          >
            <FontAwesomeIcon icon={faUpload} />
            <span className="ml-2">{label}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Insert Fields</h2>
      <div className="grid gap-4 border-t border-b border-gray-300 py-4">
        <div className="space-y-2">
          <h3 className="font-semibold">Quick Fields</h3>
          <div className="grid grid-cols-5 gap-4">
            {savedFields.map((field, index) => (
              <div key={index} className="h-[100px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100">
                {renderField(field)}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
            <h3 className="font-semibold">Custom Fields</h3>
            <div className="grid grid-cols-5 gap-4">
              {/* Custom fields */}
              <div
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"  
              // onClick={() => handleFieldClick({ type: 'text', label: 'Email', placeholder: 'Enter email here' })}
              onClick={() => handleFieldClick('textarea', 'Text Input')}
              >
                <FontAwesomeIcon icon={faParagraph} />
                <span className="ml-2">Text Input</span>
              </div>
              <div 
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"               onClick={() => handleFieldClick('textarea', 'Text Area')}
              >
                <FontAwesomeIcon icon={faParagraph} />
                <span className="ml-2">Text Area</span>
              </div>
              <div 
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"               onClick={() => handleFieldClick('number', 'Number')}
              >
                <FontAwesomeIcon icon={faHashtag} />
                <span className="ml-2">Number</span>
              </div>
              <div 
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"               onClick={() => handleFieldClick('dropdown', 'Dropdown')}
              >
                <FontAwesomeIcon icon={faList} />
                <span className="ml-2">Dropdown</span>
              </div>
              <div 
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"               onClick={() => handleFieldClick('date', 'Date')}
              >
                <FontAwesomeIcon icon={faCalendar} />
                <span className="ml-2">Date</span>
              </div>
              <div 
               className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"               onClick={() => handleFieldClick('time', 'Time')}
              >
                <FontAwesomeIcon icon={faClock} />
                <span className="ml-2">Time</span>
              </div>
              <div 
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"               onClick={() => handleFieldClick('slider', 'Slider')}
              >
                <FontAwesomeIcon icon={faSlidersH} />
                <span className="ml-2">Slider</span>
              </div>
              <div
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"               onClick={() => handleFieldClick('rating', 'Rating')}
              >
                <FontAwesomeIcon icon={faStar} />
                <span className="ml-2">Rating</span>
              </div>
              <div 
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"               onClick={() => handleFieldClick('file', 'File Upload')}
              >
                <FontAwesomeIcon icon={faUpload} />
                <span className="ml-2">File Upload</span>
              </div>
              <div 
               className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"              onClick={() => handleFieldClick('signature', 'E-Signature')}

              >
                <FontAwesomeIcon icon={faSignature} />
                <span className="ml-2">E-Signature</span>
              {/* ... other custom fields */}
            </div>
            <div 
             className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"            onClick={() => handleFieldClick('choice', 'Single Choice')}

            >
                <FontAwesomeIcon icon={faUpload} />
                <span className="ml-2">Single Choice</span>
              </div>
              <div 
              className="h-[80px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"              onClick={() => handleFieldClick('choice', 'Multiple Choice')}

              >
                <FontAwesomeIcon icon={faUpload} />
                <span 
                className="h-[100px] flex items-center justify-center border border-gray-300 rounded cursor-pointer hover:bg-gray-100"                >Multiple Choice</span>
              </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button onClick={closePopup} className="bg-gray-500 text-white rounded px-4 py-2">Cancel</button>
        <button onClick={handleInsertFields} className="bg-blue-500 text-white rounded px-4 py-2">Insert Fields</button>
      </div>
    </div>
  </div>
  
  
  

  );
};

export default PopUp;
