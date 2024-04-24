

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../../store/adminSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const user = useSelector((state) => state.user);
//   const { loading, error } = user;

const { loading, error, isAdmin } = useSelector((state) => state.admin); 
// const admin = useSelector((state) => state.admin); // Select admin state instead of user
//   const { loading, error } = admin; // Access loading and error from admin state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    let adminCredentials = {
      email,
      password
    };
    dispatch(loginAdmin(adminCredentials)).then((result) => {
      console.log("Login dispatch result:", result);
      if (result.payload) {
        console.log("Login successful, navigating to admin dashboard");
        setEmail('');
        setPassword('');
        navigate('/admin/dashboard');
      }
    });
  };

  return (
    <div className="login_session min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3FCFA] to-[#26ABA2] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Admin Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                  />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="relative">
                  <button onClick={handleLoginEvent} className="bg-[#26ABA2] text-white rounded-md px-2 py-1">{loading ? 'Loading....' : 'Login'}</button>
                  {error && (
                    <div className='alert alert' role='alert'>{error}</div>
                  )}
                </div>             
                <div className="text-gray-600 text-center">
                  <p>If you don't have an account?</p>
                  <Link to='/signup'>
                    <button className="text-[#26ABA2] font-semibold hover:underline">Register</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
