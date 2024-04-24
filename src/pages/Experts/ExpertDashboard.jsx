import React from 'react';
import { Link } from 'react-router-dom';

function ExpertDashboard() {
  return (
    <div className="expert_session">
      <div className="flex pb-24 pt-24 pl-32 pr-32 justify-center space-x-4">
        <div>
          <h1 className="text-5xl font-bold leading-[2.5rem] md:leading-[4rem] lg:w-10/12">
            Become an Expert <br /> at <span className="text-[#26ABA2]">HAVEN</span>
          </h1>
          <p className="text-lg text-[#171717bf] lg:w-10/12 font-regular text-gray-700 mt-4 leading-[1.75rem]">
            More than 60 mental health experts are helping people access high-quality mental health care at affordable rates. Are you someone who shares the same beliefs? Then you are in the right place.
          </p>
          <Link to="/experts/verification">
          <button className="btn focus:outline-none focus:ring-[#26ABA2] hover:bg-[#26ABA2] active:bg-[#26ABA2] transition duration-150 ease-in-out transform hover:scale-105 text-white text-lg font-semibold rounded-full mt-8 px-8 py-3">
            Join Now
          </button>
          </Link>
          <Link to='/experts/login'>
          <button className="btn focus:outline-none ml-5 focus:ring-[#26ABA2] hover:bg-[#26ABA2] active:bg-[#26ABA2] mt-8  font-semibold bg-[#26ABA2] rounded-full text-white px-8 py-3 text-lg">
          Login
          </button>
          </Link>
        </div>
        <div className="h-96 my-2 space-x-4">
      <img
        src="https://nowandme.netlify.app/assets/image/12_Tips_Every_It_Guy_Should_Know_Man_With_Laptop_PNG_Image_With_Transparent_Background_png_-_Free_PNG_Images-removebg-preview.png"
        alt=""
        className="h-[500px] w-[1200px]"
      />
    </div>
        
      </div>
      <div className="flex justify-center pt-24">
      <div className="w-1/4"></div>
      <div className="w-1/4 pr-0">
        <img
          src="../../../../assets/image/mobpngexperts-removebg-preview.png"
          alt=""
          className="h-3/5"
        />
      </div>
      <div className="w-3/4 pr-0">
      <img
        src="https://rayoflightthemes.com/wordpress-themes/talking-minds-wordpress-theme/wp-content/uploads/2021/12/woman-expressing-gratitude-for-psychological-help-TMKR2SC1.jpg"
        alt=""
        className="h-4/5"
        style={{ paddingRight: 0, width: '75%' }}
      />
    </div>
      <div className="w-1/4 pl-0 scroll pb-32 flex flex-col justify-center">
        <p className="font-bold text-3xl md:text-3xl mb-4 md:mb-8 xl:w-max">About the HAVEN <span className="text-[#26ABA2]">Community</span></p>
        <p className="text-base text-[#171717bf] leading-7 md:leading-8">HAVEN aims to transform the mental healthcare delivered in India by creating a community free of judgment and stigma. With the help of technology and modern tools, we wish to erase the notion of not being able to express ourselves freely because of crude judgments and comments.</p>
      </div>
      <div className="w-1/4 pr-0"></div>
    </div>
      
    </div>
  );
}

export default ExpertDashboard;
