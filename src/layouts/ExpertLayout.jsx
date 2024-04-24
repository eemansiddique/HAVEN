import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ExpertRoutes from '../routes/ExpertRoutes';
import ExpertHeader from "../components/ExpertHeader/ExpertHeader"

const ExpertLayout = () => {
    // const location = useLocation();
  
    // // Define an array of paths where you don't want to show the header and footer
    // const noHeaderFooterPaths = [];
  
    // // Check if the current path is in the noHeaderFooterPaths array
    // const showHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);
  
  
    return (
      <>
     
         <ExpertHeader />
        <main>
          <ExpertRoutes/>
        </main>
         {/* <Footer /> */}
      </>
    );
  }


export default ExpertLayout
