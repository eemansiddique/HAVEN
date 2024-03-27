import React from 'react'
import { Link } from 'react-router-dom'
import testImg from '../assets/images/testImg.png'
 import  mask from '../assets/images/mask.png'

const Home = () => {
  return (
  <>
  {/* =============== hero section ===================== */}
 
  <section className='hero_section pt-[60px] 2xl:h-[800px]  '>
    <div className='container px-16'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
        {/* ==========   hero content ============== */}
        <div>
          <div className='lg:w-[670px]'>
            <h1 className='text-[36px] leading-[76px] text-headingColor font-[900] md:text-[60px] md;leading-[70px] '>
            Online mental health care anywhere, anytime           
             </h1>
            <p className='text_para'>
            24x7, on-demand care on your phone, be it in the middle of a hectic work day, or when you can't sleep at night. Our experts are available to you at the click of a button!
            </p>
            <Link to='/experts'>
            <button className='btn'>Talk To Expert</button>
            </Link>
          </div>
            {/* ==========   hero counter ============== */}
        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[900] text-[#F7AB1F]'>
              20+
            </h2>
            <span className='w-[100px] h-1 bg-teal-100 rounded-full block'></span>
            <p className='text_para'>Years of Experience</p>
          </div>

          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[900]  text-[#F7AB1F]'>
              840+
            </h2>
            <span className='w-[100px] h-1 bg-teal-100 rounded-full block'></span>
            <p className='text_para'>Patients received help this year</p>
          </div>

          <div>
            <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[900] text-[#F7AB1F]'>
              90%
            </h2>
            <span className='w-[100px] h-1 bg-teal-100 rounded-full block'></span>
            <p className='text_para'>Client improved their condition</p>
          </div>

        </div>
        </div>
       
        {/* ==========   hero content ============== */}
        

<div className="w-full lg:w-1/2 text-center animate__animated animate__fadeInRight">
            <div className="p-4 bg-white border custom-rounded1 custom-rounded2 shadow-md">
                <div className="zoom-image-wrapper custom-rounded1 custom-rounded2">
                    <div className="zoom-image1">
                        <div className="heading-class zoombox1"></div>
                        <div className="zoom-image1--inner">
                            <img className="custom-rounded" src="https://rayoflightthemes.com/wordpress-themes/talking-minds-wordpress-theme/wp-content/uploads/2022/12/man-with-psychologist-in-the-office-62XB78R11.jpg" alt="talking-minds" />
                        </div>
                        <div className="zoombox2"></div>
                    </div>
                </div>
            </div>
        </div>
             </div>
         </div>
 </section>
  {/* =============== hero section end ===================== */}
 

<section className="bg-[#F3FCFA] transition duration-300 border rounded-lg shadow-md">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3">
                        {/* Left column */}
                        <div className="elementor-widget-wrap"></div>
                    </div>
                    <div className="w-full md:w-1/3">
                        {/* Middle column */}
                        <div className="elementor-widget-wrap">
                            <div className="maintitle maintitle-center text-center">
                                <h2 className="text-3xl font-bold">What I offer</h2>
                                <p className="text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        {/* Right column */}
                        <div className="elementor-widget-wrap"></div>
                    </div>
                </div>
            </div>
        </section>
  </>
 
  )
}

export default Home