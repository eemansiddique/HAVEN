

// import React from 'react';
// import Layout1 from './Layout1';
// import Layout2 from './Layout2';
// import Layout3 from './Layout3';
// import formImg1 from '../../assets/images/formImg1.png'


// const FormLayout = ({ layoutType, title, description, fields }) => {
//     // Check for duplicates and ensure each field has a unique ID
//     const uniqueFields = fields.filter(
//       (field, index, self) => index === self.findIndex((f) => f._id === field._id)
//     );
  
//     // Separate the fields into left and right columns based on their index
//     const leftFields = [];
//     const rightFields = [];
  
//     uniqueFields.forEach((field, index) => {
//       if (index < 5) {
//         leftFields.push(field);
//       } else {
//         rightFields.push(field);
//       }
//     });
  
//     return (
//       <div>
//         {layoutType === 'label1' && (
//           <Layout1
//             title={title}
//             description={description}
//             leftFields={leftFields}
//             rightFields={rightFields}
//           />
//         )}
//         {layoutType === 'label2' && (
//           <Layout2
//             title={title}
//             description={description}
//             fields={uniqueFields}
//           />
//         )}
//         {/* Add more layout types here if needed */}
//         <Layout3
//           title={title}
//           description={description}
//           fields={uniqueFields}
//           imageUrl={formImg1}
//           />
//       </div>
//     );
//   };
  
//   export default FormLayout;


import React from 'react';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import formImg1 from '../../assets/images/formImg1.png';

const FormLayout = ({ layoutType, title, description, fields }) => {
    // Check for duplicates and ensure each field has a unique ID
    const uniqueFields = fields.filter(
        (field, index, self) => index === self.findIndex((f) => f._id === field._id)
    );

    // Separate the fields into left and right columns based on their index
    const leftFields = uniqueFields.slice(0, 5);
    const rightFields = uniqueFields.slice(5);

    // Render layout based on layoutType
    switch (layoutType) {
        case 'label1':
            return (
                <Layout1
                    title={title}
                    description={description}
                    leftFields={leftFields}
                    rightFields={rightFields}
                />
            );
        case 'label2':
            return (
                <Layout2 
                title={title}
                description={description}
                fields={fields} 
              />
            );
        case 'label3':
            return (
                <Layout3
                    title={title}
                    description={description}
                    fields={uniqueFields}
                    imageUrl={formImg1}
                />
            );
        default:
            // Handle unexpected layoutType
            return (
                <div>
                    <h2>Unknown Layout</h2>
                    <p>Layout type "{layoutType}" is not supported.</p>
                </div>
            );
    }
};

export default FormLayout;
