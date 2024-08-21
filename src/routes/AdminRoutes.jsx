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
import {AdminProtectedRouterAuthentication } from '../pages/Admin/AdminProtectedRouter';
import NotFound from '../pages/NotFound/NotFound'
import ListForms from '../pages/Admin/ListForms';
import FormDetail from '../pages/Admin/FormDetail';





function AdminRoutes() {
 
  return (
    
    <Routes>
      <Route path="/admin/login" element={<AdminProtectedRouterAuthentication><AdminLogin /></AdminProtectedRouterAuthentication>} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      <Route path="/admin/listForms" element={<ListForms/>} />
      <Route path="/admin/listSingleForm/:id" element={<FormDetail/>} />

      <Route path='*' element={<NotFound />}/>

    </Routes>
  );
}

export default AdminRoutes;
