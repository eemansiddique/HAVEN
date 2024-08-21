// import React, { useEffect, useState } from 'react';
// import FormLayout from './FormLayout';
// import axios from 'axios';

// const FormPage = () => {
//     const [forms, setForms] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       console.log('useEffect called');
//       const fetchForms = async () => {
//         console.log('Fetching forms...');
//         try {
//             const response = await axios.get('http://localhost:3000/admin/forms/publishforms');
//             console.log('API response:', response);
//             setForms(response.data.forms);
//         } catch (error) {
//             console.error('Error fetching forms:', error.response ? error.response.data : error.message);
//         } finally {
//             setLoading(false);
//         }
//     };
  
//       fetchForms();
//     }, []);
  
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;
  
//     return (
//       <div>
//         {forms.map((form) => (
//           <FormLayout
//             key={form._id}
//             layoutType={form.layout}
//             title={form.title}
//             description={form.description}
//             fields={form.fields}
//           />
//         ))}
//       </div>
//     );
//   };
  
// export default FormPage;
import React, { useEffect, useState } from 'react';
import FormLayout from './FormLayout';
import axios from 'axios';

const FormPage = () => {
    const [forms, setForms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      console.log('useEffect called');
      const fetchForms = async () => {
        console.log('Fetching forms...');
        try {
            const response = await axios.get('http://localhost:3000/admin/forms/publishforms');
            console.log('API response:', response);
            setForms(response.data.forms);
        } catch (error) {
            console.error('Error fetching forms:', error.response ? error.response.data : error.message);
            setError('Error fetching forms'); // Set error state to display to user
        } finally {
            setLoading(false);
        }
    };
  
      fetchForms();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
    return (
      <div>
        {forms.map((form) => (
          <FormLayout
            key={form._id}
            layoutType={form.layout}
            title={form.title}
            description={form.description}
            fields={form.fields}
          />
        ))}
      </div>
    );
  };
  
export default FormPage;


