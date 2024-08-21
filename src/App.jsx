



import './App.css';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log('Current path:', location.pathname);

  // Check if location starts with '/admin'
  if (location.pathname.startsWith('/admin')) {
    return <AdminLayout />;
  }
  // Check if location starts with '/experts'
  // else if (location.pathname.startsWith('/experts')) {
  //   return <ExpertLayout />;
  // }
  // Default to UserLayout for any other path
  else {
    return <UserLayout />;
  }
}

export default App;