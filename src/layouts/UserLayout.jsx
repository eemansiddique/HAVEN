// import React from 'react'
// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'
// import Routers from '../routes/Routers'
// import { useLocation } from 'react-router-dom';
// function Layout() {
//   const location = useLocation();

//   // Define an array of paths where you don't want to show the header
//   const noHeaderPaths = ['/login', '/signup'];

//   // Check if the current path is in the noHeaderPaths array
//   const showHeader = !noHeaderPaths.includes(location.pathname);
//   return (
//     <>
//     {/* <Header/> */}
//     {showHeader && <Header />}      
//     <main>
//         <Routers/>
//     </main>
//     <Footer/>
//     </>
//   )
// }

// export default Layout

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import UserRoutes from '../routes/UserRoutes';
import { useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  // Define an array of paths where you don't want to show the header and footer
  const noHeaderFooterPaths = ['/login', '/signup'];

  // Check if the current path is in the noHeaderFooterPaths array
  const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  // Check if the current path is the verify page
  const isVerifyPage = location.pathname.includes('/userId/') && location.pathname.includes('/verify/');

  console.log('Current path:', location.pathname);
  console.log('Show Header Footer:', showHeaderFooter);
  console.log('Is Verify Page:', isVerifyPage);

  return (
    <>
      {showHeaderFooter && <Header />}
      <main>
        <UserRoutes />
      </main>
      {showHeaderFooter && !isVerifyPage && <Footer />}
    </>
  );
}

export default Layout;

// import React from 'react';
// import CombinedLayout from './CombinedLayout';
// import Header from '../components/Header/Header'; // Optional header for users

// function UserLayout({ children }) {
//   return (
//     <CombinedLayout>
//       { /* Conditionally render UserHeader if available */}
//       {Header && <Header />}
//       {children}
//     </CombinedLayout>
//   );
// }

// export default UserLayout;