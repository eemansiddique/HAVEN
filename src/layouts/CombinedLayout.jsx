// import React from 'react';
// import Footer from '../components/Footer/Footer';
// import Header from '../components/Header/Header';
//  import AdminHeader from '../components/AdminHeader/AdminHeader'; // Optional
//  import AdminFooter from '../components/AdminFooter/AdminFooter'; // Optional

// function CombinedLayout({ children, isAdmin }) {
//   return (
//     <>
//       {isAdmin ? <AdminHeader /> : <Header />}
//       <main>{children}</main>
//       {isAdmin ? <AdminFooter /> : <Footer />}
//     </>
//   );
// }

// export default CombinedLayout;

import React from 'react';
import Header from '../components/Header/Header'; // Common header
import Footer from '../components/Footer/Footer';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import AdminFooter from '../components/AdminFooter/AdminFooter';

function CombinedLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default CombinedLayout;