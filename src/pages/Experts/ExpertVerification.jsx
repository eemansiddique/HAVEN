import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';

const ExpertVerification = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    dob: '',
    contact: '',
    city: '',
    profileImage: null,
    governmentId: null,
    profileImageFileName: '',
    governmentIdFileName: '',
  });

  const handleChange = (e) => {
    const { name, files } = e.target;

    // Extract the filename without the path
    const fileName = files ? files[0].name : '';

    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : e.target.value, // Use the file or value based on the input type
      [`${name}FileName`]: fileName, // Save the filename without the path in state
    }));
  };

  const validateFiles = (files) => {
    // Add your validation logic here
    // - Check for allowed file types (e.g., image/jpeg, image/png)
    // - Check for maximum file size (e.g., 5 MB)
    // Display error messages to the user if validation fails
    // You can use libraries like Yup or react-hook-form for validation

    // Example validation (replace with your specific requirements):
    if (files && files[0]) {
      const allowedTypes = ['image/jpeg', 'image/png'];
      const maxSize = 5 * 1024 * 1024; // 5 MB

      if (!allowedTypes.includes(files[0].type)) {
        console.error('Invalid file type. Please upload a JPEG or PNG image.');
        return false;
      }

      if (files[0].size > maxSize) {
        console.error('File size exceeds limit (5 MB). Please upload a smaller image.');
        return false;
      }
    }

    return true; // Files are valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate files before submission
    if (!validateFiles([formData.profileImage, formData.governmentId])) {
      return; // Prevent form submission if validation fails
    }

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:8000/experts/register1', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        const { expertid } = data;
        navigate(`/experts/regForm2/${expertid}`);
      } else {
        console.error('Failed to register expert');
        // Handle server errors gracefully (e.g., display error message to user)
      }
    } catch (error) {
      console.error('Error registering expert:', error);
      // Handle network errors gracefully (e.g., display error message to user)
    }
  };
  return (
    


    <>
      <section className="form expert_verify " >
        <div className="flex justify-center items-center  expert_verify">
          <div >
            <ol className="items-center w-full space-y-4 sm:flex sm:space-x-36 sm:space-y-0 mt-[-2rem]">
              <li className="flex items-center text-[#26ABA2] dark:text-blue-500 space-x-2.5 ">
                <span className="flex items-center justify-center w-8 h-8 border border-[#26ABA2] rounded-full shrink-0 dark:border-blue-500 ">1</span>
                <span>
                  <h3 className="font-medium leading-tight">User info</h3>
                  <p className="text-sm ">Step details here</p>
                </span>
              </li>
              <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">2</span>
                <span>
                  <h3 className="font-medium leading-tight">Company info</h3>
                  <p className="text-sm">Step details here</p>
                </span>
              </li>
              <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">3</span>
                <span>
                  <h3 className="font-medium leading-tight">Payment info</h3>
                  <p className="text-sm">Step details here</p>
                </span>
              </li>
            </ol>
          </div>
          {/* <div className="hidden"></div> */}
          
        </div>
        <div className="pt-10">
        <p className="text-center text-2xl font-semibold">
        <span className="text-[#26ABA2]">Haven</span> Experts Panel
         </p>
         <p className="text-gray-500 text-center pt-2">
        Thank you for considering Haven as your next growth destination.
        </p>
       </div>

       {/* form section */}
       <div className="mx-auto max-w-xl py-5">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="example1" className="mb-1 block text-sm font-bold text-gray-700">Email</label>
          <input type="email" id="example1" name="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} className="pl-3 block w-full h-12 rounded-md border-gray-400 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" required  autoComplete="email"/>
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-bold text-gray-700">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter a strong password" autoComplete="current-password" className="pl-3 block w-full h-12 rounded-md border-gray-400 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" required />
        </div>
        <div>
          <label htmlFor="example2" className="mb-1 block text-sm font-bold text-gray-700">Full Name <span>(as per government-issued ID)</span></label>
          <input type="text" id="example2" name="name" value={formData.name} onChange={handleChange} placeholder="full name" className="pl-3 block w-full h-12 rounded-md border-gray-400 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" required />
        </div>
        <div>
          <label htmlFor="example3" className="mb-1 block text-sm font-bold text-gray-700">Date of Birth</label>
          <input type="date" id="example3" name="dob" value={formData.dob} onChange={handleChange} placeholder="full name" className="pl-3 block w-full h-12 rounded-md border-gray-400 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" required />
        </div>
        <div>
          <label htmlFor="example5" className="mb-1 block text-sm font-bold text-gray-700">Contact Number</label>
          <input type="text" id="example5" name="contact" value={formData.contact} onChange={handleChange} placeholder="contact number" className="pl-3 block w-full h-12 rounded-md border-gray-400 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" required />
        </div>
        <div>
          <label htmlFor="example6" className="mb-1 block text-sm font-bold text-gray-700">City of Residence</label>
          <input type="text" id="example6" name="city" value={formData.city} onChange={handleChange} placeholder="City of Residence" className="pl-3 block w-full h-12 rounded-md border-gray-400 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" required />
        </div>
        <div>
          <label htmlFor="example4" className="mb-1 block text-sm font-bold text-gray-700">Government Id</label>
          <input type="file" id="governmentId" name="governmentId" value={formData.governmentId} onChange={handleChange} placeholder="full name" className="pl-3 block w-full h-12 rounded-md border-gray-400" />
        </div>
        <div>
          <label htmlFor="profileImage" className="mb-1 block text-sm font-bold text-gray-700">Profile Image</label>
          <input type="file" id="profileImage"  name="profileImage" value={formData.profileImage} onChange={handleChange} accept="image/*" className="pl-3 block w-full h-12 rounded-md" />
          {formData.profileImage && <p>Selected file: {formData.profileImage}</p>}

        </div>
        {/* <Link to='/experts/regForm2/id'> */}
        <button type="submit"  className="rounded-lg border border-primary-500 bg-[#26ABA2] px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Next</button>
        {/* </Link> */}
      </form>
    </div>
        </section>
    
        
    </>
 
  )
}

export default ExpertVerification