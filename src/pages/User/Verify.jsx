import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link
import axios from 'axios';

const Verify = () => {
  const { id, token } = useParams(); // Access the parameters from the URL

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user/${id}/verify/${token}`);
        if (response.data.message === 'success') {
          // Handle success scenario, e.g., show a success message
          console.log('Email verified successfully');
        } else {
          // Handle failure scenario, e.g., show an error message
          console.log('Email verification failed');
        }
      } catch (error) {
        console.error('Error verifying email:', error);
      }
    };

    verifyEmail();
  }, [id, token]);

  return (
    <div className="verify_session flex justify-center items-center h-screen">
      {/* Message indicating that the email is verified */}
      {/* <div className='h-60 w-dvw  absolute inset-0 bg-gradient-to-r from-[#F3FCFA] to-[#26ABA2] shadow-lg transform  sm:rounded-3xl'> */}
      <div className="text-center">
        <p className="text-4xl font-bold mb-4">Your email is verified.</p> {/* Increased font size and bold */}
        <p className="text-lg mb-4">You can now proceed to <Link to="/login" className="underline">login</Link>.</p> {/* Added underline to the login link */}
      {/* </div> */}
      </div>
    </div>
  );
}

export default Verify;

// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// const Verify = () => {
//   const { id, token } = useParams();
//   const [verificationStatus, setVerificationStatus] = useState('');

//   useEffect(() => {
//     const verifyEmail = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/user/${id}/verify/${token}`);
//         if (response.data.message === 'success') {
//           setVerificationStatus('Your email is verified.');
//           // Update the state for isEmailVerified here
//           // Example: setIsEmailVerified(true);
//         } else {
//           setVerificationStatus('Email verification failed.');
//           // Handle failure scenario
//         }
//       } catch (error) {
//         console.error('Error verifying email:', error);
//         setVerificationStatus('Error verifying email. Please try again later.'); // Corrected this line
//       }
//     };

//     verifyEmail();
//   }, [id, token]);

//   return (
//     <div className="verify-session flex justify-center items-center h-screen">
//       <div className="text-center">
//         <p className="text-2xl font-bold mb-4">{verificationStatus}</p>
//         {verificationStatus === 'Your email is verified.' && (
//           <p className="text-lg mb-4">You can now proceed to <Link to="/login" className="underline">login</Link>.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Verify;
