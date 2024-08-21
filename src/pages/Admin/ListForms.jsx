import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ListForms = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/listAllForms');
        setForms(response.data);
      } catch (error) {
        toast.error('Failed to fetch forms.');
      }
    };

    fetchForms();
  }, []);

  const handleFormClick = (id) => {
    navigate(`/admin/listSingleForm/${id}`);
  };


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl  mb-6 text-gray-800 text-center font-bold">List of Forms</h2>
      {forms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form) => (
            <div key={form._id} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
            onClick={() => handleFormClick(form._id)}
            >

              <h3 className="text-xl font-semibold mb-2 text-gray-900">{form.title}</h3>
              <p className="text-gray-700 mb-2">{form.description}</p>
              <p className={`font-medium ${form.published ? 'text-green-600' : 'text-red-600'}`}>
                Status: {form.published ? 'Published' : 'Draft'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No forms found.</p>
      )}
    </div>
  );
};

export default ListForms;
