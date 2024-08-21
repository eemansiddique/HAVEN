import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";  

  const AdminProtectedRouter = ({ children }) => {
    const [admin,setAdmin] = useState();

    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchData = async () => {
  
        const storedUser= localStorage.getItem("admin");
        console.log(storedUser);
  
        if (storedUser) {
     
  
          const storedUser1 = JSON.parse(storedUser);
          console.log(storedUser1);
  
          setAdmin(storedUser1);
  
         
        } else {
          navigate('/admin/login');
          
        }
      };
  
      fetchData();
    }, []);
  
    if(admin){
      return children
    }
    return null
    
  };


  const AdminProtectedRouterAuthentication = ({ children }) => {
    const [admin, setAdmin] = useState();

    const navigate = useNavigate();
  
    useEffect(() => {
      
      const storedUser = localStorage.getItem("admin");
      console.log(JSON.stringify(storedUser));
  
      if (storedUser) {
        const storedUser1 = JSON.parse(storedUser);
        setAdmin(storedUser1);
        
        navigate('/admin/dashboard');
      }
    }, [navigate]);
    if (!admin) {
      console.log("return children");
      return children;  
    } 
      return null;
    
  };


export  { AdminProtectedRouter,AdminProtectedRouterAuthentication };