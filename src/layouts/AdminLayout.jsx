import React from 'react'
import AdminHeader from '../components/AdminHeader/AdminHeader';
import Footer from '../components/Footer/Footer';
import AdminRoutes from '../routes/AdminRoutes';
import { useLocation, useParams } from 'react-router-dom';
const AdminLayout = () => {
    const location = useLocation();
  
    // Define an array of paths where you don't want to show the header and footer
    const noHeaderFooterPaths = ['/adminLogin'];
  
    // Check if the current path is in the noHeaderFooterPaths array
    const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);
  
  
    return (
      <>
     
        {showHeaderFooter && <AdminHeader />}
        <main>
          <AdminRoutes/>
        </main>
        {showHeaderFooter &&  <Footer />}
      </>
    );
  }


export default AdminLayout

