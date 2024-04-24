import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import seedlingIcon from '../../assets/images/seedling-solid.svg';
import userImg from '../../assets/images/avatar-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAdmin } from '../../../store/adminSlice'; // Import logout action from adminSlice

const navlinks = [
  {
    path: '/admin/dashboard',
    display: 'Home'
  },
  {
    path: '/admin/listExperts',
    display: 'Experts'
  },
  {
    path: '/admin/users',
    display: 'Users'
  },
  {
    path: '/profile',
    display: 'Profile'
  }
];

const AdminHeader = () => {
  const admin = useSelector(state => state.admin.admin); // Access admin state from Redux
  const dispatch = useDispatch();

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu');
  };

  const handleLogout = () => {
    dispatch(logoutAdmin()); // Dispatch the logout action from adminSlice
    navigate('/admin/login');
  };

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container px-16'>
        <div className='flex items-center justify-between'>
          {/* =======logo========  */}
          <div className="flex items-center">
            <img src={seedlingIcon} alt="Seedling Icon" className="h-6 w-6" />
            <h1 className="text-xl font-extrabold">HAVEN</h1>
          </div>

          {/* =======menu=========  */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive
                    ? "text-[#26ABA2] text-[16px] leading-7 font-[600]"
                    : "text-textColor text-[16px] leading-7 font-[500] hover:text-[#26ABA2]"}>{link.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* =======navright=========  */}
          <div className='flex items-center gap-4'>
            {admin ? (
              <button onClick={handleLogout} className='bg-[#26ABA2] py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Logout</button>
            ) : (
              <Link to='/login'>
                <button className='bg-[#26ABA2] py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
              </Link>
            )}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
