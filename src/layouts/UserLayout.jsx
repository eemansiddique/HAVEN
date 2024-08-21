
import React from 'react';
import UserRoutes from '../routes/UserRoutes';
import { useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();


  return (
    <>
      <main>
        <UserRoutes />
      </main>
    </>
  );
}

export default Layout;

