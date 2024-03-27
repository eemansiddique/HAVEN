import React from 'react'
import { useEffect,useRef } from 'react';
import { NavLink,Link } from 'react-router-dom';
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from "react-icons/bi"
import seedlingIcon from '../../assets/images/seedling-solid.svg';

 const navlinks=[
        {
            path:'/home',
            display:'Home'
        },
        {
            path:'/experts',
            display:'Experts'
        },
        {
            path:'/community',
            display:'Community'
        },
        {
            path:'/shedules',
            display:'Shedules'
        },
        {
            path:'/profile',
            display:'Profile'
        }
    ]
const Header = () => {
  const headerRef=useRef(null)
  const menuRef=useRef(null)

  const handleStickyHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add("sticky_header")
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader()
    return ()=>window.removeEventListener('scroll',handleStickyHeader)
  })
  const toggleMenu=()=>{menuRef.current.classList.toggle('show_menu')}
   
    return (
      <header className='header flex items-center ' ref={headerRef}>
        <div className='container px-16'>
          <div className='flex items-center justify-between'>
            {/* =======logo========  */}
            <div  className="flex items-center">
           
             <img src={seedlingIcon} alt="Seedling Icon"  className="h-6 w-6 " />
                        <h1 className="text-xl  font-extrabold">HAVEN</h1>
            </div>



            {/* =======menu=========  */}
            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                <ul className='menu flex items-center gap-[2.7rem]'>
                   {
                    navlinks.map((link,index)=><li key ={index}>
                        <NavLink to={link.path} className={navClass=>navClass.isActive
                             ?"text-[#26ABA2] text-[16px] leading-7 font-[600]" 
                             :"text-textColor text-[16px] leading-7 font-[500] hover:text-[#26ABA2]"}>{link.display}</NavLink>
                    </li>)
                   }
                </ul>
            </div>
            {/* =======navright=========  */}
            <div className='flex items-center gap-4'>
            <div className='hidden'>
                <Link to='/'>
             <figure className='w-[35px] h=[35px] rounded-full curser-pointer'>
                <img src={userImg} className='w-full rounded-full'></img>
             </figure>
             </Link>
            </div >
              <Link to='/login'>
                <button className='bg-[#26ABA2] py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
              </Link>
              <span className='md:hidden' onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer"/>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
 };
  
export default Header

