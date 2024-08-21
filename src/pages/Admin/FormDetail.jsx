// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

// const FormDetail = () => {
//   const { id } = useParams(); // Extract ID from URL
//   const [form, setForm] = useState(null);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     const fetchForm = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/admin/forms/${id}`);
//         setForm(response.data);
//       } catch (error) {
//         toast.error('Failed to fetch form details.');
//         console.error('Error fetching form:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchForm();
//   }, [id]);

//   const handlePublishClick = async () => {
//     try {
//       const response = await axios.post(`http://localhost:3000/admin/forms/${id}/publish`);
//       if (response.status === 200) {
//         toast.success('Form published successfully!');
//         setForm((prevForm) => ({ ...prevForm, published: true }));
//       }
//     } catch (error) {
//       toast.error('Failed to publish form.');
//       console.error('Error publishing form:', error);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-700">Loading...</p>;

//   if (!form) return <p className="text-center text-gray-700">No form found.</p>;

//   return (
//     <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
//       <ToastContainer />
//       <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 max-w-3xl w-full text-center">
//         <h2 className="text-3xl font-semibold mb-6 text-gray-800">{form.title}</h2>
//         <p className="text-gray-700 mb-6">{form.description}</p>
//         <p className={`text-xl font-medium mb-6 ${form.published ? 'text-green-600' : 'text-red-600'}`}>
//           Status: {form.published ? 'Published' : 'Draft'}
//         </p>

//         <div className="mb-6">
          
//           {form.fields && form.fields.length > 0 ? (
//             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {form.fields.map((field, index) => (
//                 <div key={index} className="text-left">
//                   <label className="block text-gray-800 font-medium mb-2">
//                     {field.name}
//                   </label>
//                   <input
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                     placeholder={field.placeholder}
//                     disabled // Make inputs disabled for view-only purposes
//                   />
//                 </div>
//               ))}
//             </form>
//           ) : (
//             <p className="text-gray-600">No fields available for this form.</p>
//           )}
//         </div>

//         <button
//           className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300"
//           onClick={handlePublishClick}
//           disabled={form.published} // Disable button if the form is already published
//         >
//           {form.published ? 'Already Published' : 'Publish Form'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FormDetail;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const FormDetail = () => {
  const { id } = useParams(); // Extract ID from URL
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate(); // Add navigate for redirection

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/forms/${id}`);
        setForm(response.data);
      } catch (error) {
        toast.error('Failed to fetch form details.');
        console.error('Error fetching form:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [id]);

  // const handlePublishClick = async () => {
  //   try {
  //     const response = await axios.post(`http://localhost:3000/admin/forms/${id}/publish`);
  //     if (response.status === 200) {
  //       toast.success('Form published successfully!');
  //       setForm((prevForm) => ({ ...prevForm, published: true }));
  //     }
  //   } catch (error) {
  //     toast.error('Failed to publish form.');
  //     console.error('Error publishing form:', error);
  //   }
  // };
  const handlePublishClick = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/admin/forms/${id}/publish`);
      if (response.status === 200) {
        toast.success('Form published successfully!');
  
        // Set the form state to published
        setForm((prevForm) => ({ ...prevForm, published: true }));
  
        // Delay navigation to allow the toast message to be shown
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 2000); // 2-second delay before redirecting to form/dashboard
      }
    } catch (error) {
      toast.error('Failed to publish form.');
      console.error('Error publishing form:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/admin/deleteForms/${id}`);
      console.log(id,"dleteid")
      if (response.status === 200) {
        toast.success('Form deleted successfully!');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 2000); // 2-second delay before redirection
      } // Redirect to the form list page after deletion
      
    } catch (error) {
      toast.error('Failed to delete form.');
      console.error('Error deleting form:', error);
    }
  };

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;

  if (!form) return <p className="text-center text-gray-700">No form found.</p>;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 max-w-3xl w-full text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">{form.title}</h2>
        <p className="text-gray-700 mb-6">{form.description}</p>
        <p className={`text-xl font-medium mb-6 ${form.published ? 'text-green-600' : 'text-red-600'}`}>
          Status: {form.published ? 'Published' : 'Draft'}
        </p>

        <div className="mb-6">
          {form.fields && form.fields.length > 0 ? (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {form.fields.map((field, index) => (
                <div key={index} className="text-left">
                  <label className="block text-gray-800 font-medium mb-2">
                    {field.name}
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder={field.placeholder}
                    disabled // Make inputs disabled for view-only purposes
                  />
                </div>
              ))}
            </form>
          ) : (
            <p className="text-gray-600">No fields available for this form.</p>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300"
            onClick={handlePublishClick}
            disabled={form.published} // Disable button if the form is already published
          >
            {form.published ? 'Already Published' : 'Publish Form'}
          </button>

          <button
            className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 transition-all duration-300"
            onClick={handleDeleteClick}
          >
            Delete Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormDetail;
