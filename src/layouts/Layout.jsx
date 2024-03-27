import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'
import { useLocation } from 'react-router-dom';
function Layout() {
  const location = useLocation();

  // Define an array of paths where you don't want to show the header
  const noHeaderPaths = ['/login', '/signup'];

  // Check if the current path is in the noHeaderPaths array
  const showHeader = !noHeaderPaths.includes(location.pathname);
  return (
    <>
    {/* <Header/> */}
    {showHeader && <Header />}      
    <main>
        <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout