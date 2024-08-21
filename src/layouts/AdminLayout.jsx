import React from 'react'
import AdminRoutes from '../routes/AdminRoutes';
import { useLocation, useParams } from 'react-router-dom';
const AdminLayout = () => {
    const location = useLocation();
  
   
    return (
      <>
     
        <main>
          <AdminRoutes/>
        </main>
      </>
    );
  }


export default AdminLayout

