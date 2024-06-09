import React from "react";
import hand_icon from "../../../assets/hand_icon.png";
import arrow_icon from "../../../assets/arrow.png";
import hero_image from "../../../assets/hero_image.png";


const Hero = () => {
  return (
    
    <div className="hero h-[100vh] bg-gradient-to-r from-[#b96e6e] to-[#3b0933] flex flex-col md:flex-row items-center px-4 md:px-20">
      <div className="hero-left flex-1 flex flex-col justify-center gap-[20px] md:pl-[50px] lg:pl-[180px] text-center md:text-left">
        <h2 className="text-[#090909] text-lg font-medium">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon flex items-center justify-center md:justify-start gap-[10px]">
            <p className="new text-[#171717] text-3xl md:text-5xl font-bold">new</p>
            <img src={hand_icon} alt="hand icon" className="w-[40px]" />
          </div>
          <p className="text-[#171717] text-3xl md:text-5xl font-bold">collections</p>
          <p className="text-[#171717] text-3xl md:text-5xl font-bold">for everyone</p>
        </div>
        <div className="hero-latest-btn flex justify-center md:justify-start items-center gap-[15px] w-[210px] h-[50px] md:w-[310px] md:h-[70px] rounded-[25px] md:rounded-[35px] mt-[30px] bg-[#221f1f] text-white text-md md:text-lg font-bold cursor-pointer">
        <div className="ml-6 md:ml-10 lg:ml-14">Latest Collection</div>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>
      <div className="hero-right flex-1 flex justify-center items-center md:items-end md:pr-[50px] lg:pr-[180px] mt-6 md:mt-0">
        <img src={hero_image} alt="hero" className="w-[90%] md:w-[80%]" />
      </div>
    </div>
   
  );
};

export default Hero;
