import './App.css'
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import ExpertRoutes from './routes/ExpertRoutes';
import ExpertLayout from './layouts/ExpertLayout';
function App() {
    return (
   <>
 
   
   {/* <UserLayout/> */}
   <AdminLayout/>
   {/* <ExpertLayout/> */}

   </>
   
  )
}



// import React from 'react';
// import console from 'console'; // Import for console logging
// import AdminLayout from './layouts/AdminLayout';
// import Layout from './layouts/Layout';

// function App() {
//   const isAdmin = true; // Replace with logic to determine user type
  
//   return (
//     <>
//       {isAdmin ? <AdminLayout /> : <Layout />}
//     </>
//   );
// }

 export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserRoutes from "./routes/userRoutes";
// import AdminRoutes from './routes/AdminRoutes';
// // import TrainerRoutes from "./Routes/trainer";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/admin/*" element={<AdminLayout />} />
//           {/* <Route path="/experts/*" element={<ExpertLayout />} /> */}
//           <Route path="/*" element={<UserLayout />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CombinedLayout from './layouts/CombinedLayout';
// import AdminLayout from './layouts/AdminLayout';
// import UserLayout from './layouts/UserLayout';
// import { useSelector } from 'react-redux';
// import Home from './pages/User/Home';
// import AdminLogin from '././pages/Admin/AdminLogin'

// function App() {
//   const userState = useSelector((state) => state.user); // Access user state from Redux store
//   const userRole = userState?.user?.role;

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<CombinedLayout />}>  {/* Shared layout for root path */}
//           <Route index element={<Home />} />  {/* Home page */}
//         </Route>
//         {userRole === 'admin' && (
//   <Route path="/admin/*" element={<AdminLayout />}>
//     <Route index element={<AdminDashboard />} />  {/* Admin dashboard */}
//     {/* Other admin-specific routes */}
//     <Route path="/admin/login" element={<AdminLogin />} />  {/* Add login route for admins */}
//   </Route>
// )}
//         {userRole === 'user' && (
//           <Route path="/user/*" element={<UserLayout />}>  {/* User routes with UserLayout */}
//             <Route index element={<UserDashboard />} />  {/* User dashboard */}
//             {/* Other user-specific routes */}
//           </Route>
//         )}
//         {/* Handle potential other routes and error handling */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;