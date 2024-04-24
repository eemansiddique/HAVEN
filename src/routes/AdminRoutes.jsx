// import React from 'react'
// import {Routes,Route} from 'react-router-dom'
// import AdminLogin from '../pages/admin/AdminLogin'
// import AdminDashboard from '../pages/admin/AdminDashboard'
// import AdminUsers from "../pages/admin/AdminUsers"
// const AdminRoutes = () => {
//   return (
//   <Routes>
//      <Route path="/adminLogin" element={<AdminLogin/>} />
    
//     <Route path='/dashboard' element={<AdminDashboard/>}/>
//     <Route path='/listusers' element={<AdminUsers/>}/>
//   </Routes>
//   )
// }

// export default AdminRoutes

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminUsers from '../pages/Admin/AdminUsers';
import ExpertLists from '../pages/Admin/ExpertLists';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/listExperts" element={<ExpertLists />} />
    </Routes>
  );
}

export default AdminRoutes;
