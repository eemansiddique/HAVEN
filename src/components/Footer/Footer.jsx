import React from 'react'
import seedlingIcon from '../../assets/images/seedling-solid.svg';

const Footer = () => {
  return (
    <div className="relative z-10 bg-[#26ABA2] py-12 md:py-24">
    <div className="container mx-auto px-16">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="widget widget_block widget_media_image">
          <div className="widget-content">
            <div className="flex items-center">
              <img 
                loading="lazy"
                decoding="async"
                width="30" 
                height="30" 
                src={seedlingIcon} 
                alt="Seedling Icon"
                className="h-6 w-6 "
                style={{ filter: 'invert(100%)' }} 
              />
              <h1 className="text-xl  font-extrabold text-white">HAVEN</h1> 
            </div>
          </div>
        </div>
        <div className="widget widget_block">
          <div className="widget-content">
            <div className="widget-footer1 flex flex-wrap justify-center md:justify-end">
              <ul className="flex">
                <li className="mr-6">
                  <a href="https://rayoflightthemes.com/wordpress-themes/talking-minds-wordpress-theme/home" className="text-white hover:text-cyan-300">Home</a>
                </li>
                <li className="mr-6">
                  <a href="https://rayoflightthemes.com/wordpress-themes/talking-minds-wordpress-theme/about/" className="text-white hover:text-cyan-300">About</a>
                </li>
                <li className="mr-6">
                  <a href="https://rayoflightthemes.com/wordpress-themes/talking-minds-wordpress-theme/clinic-contacts/" className="text-white hover:text-cyan-300">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="widget widget_block">
          <div className="widget-content">
            <div className="social-icons-wrapper flex">
              <div className="social-icon mx-2">
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <div className="social-icon mx-2">
                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="social-icon mx-2">
                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="social-icon mx-2">
                <a href="http://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="border-t border-white my-8" />
    <div className="container mx-auto">
      <div className="row">
        <div className="col-md-12">
          <div className="copyright md:text-center text-white">
            2024 Design - <a href="https://themeforest.net/user/merkulove" className="hover:text-cyan-300">Merkulove </a>WordPress theme - <a href="https://themeforest.net/user/rayoflightt?ref=rayoflightt" className="hover:text-cyan-300">RayoflightThemes</a> © HAVEN - Psychotherapy WordPress Theme
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-right to-the-top">
          <div id="toTopBtn" className="fa fa-chevron-up button-top text-white"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer