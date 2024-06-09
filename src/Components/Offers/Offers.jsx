import React from 'react';
import exclusive_image from "../../assets/exclusive_image.png";

const Offers = () => {
  return (
    <><div className=' flex flex-col items-center gap-4 h-auto lg:h-[90vh] p-4  bg-gradient-to-r from-[#a79393] to-[#FDE9FF]'>
    <div className='Offers w-[90%] lg:w-[85%] h-auto lg:h-[100vh] flex flex-col lg:flex-row m-auto mt-20 p-6 lg:p-0 mb-[150px] bg-gradient-to-r from-[#a79393] to-[#FDE9FF]'>
      <div className="offers-left flex-1 flex flex-col justify-center items-center lg:items-start gap-2 text-center lg:text-left ml-16 px-4 lg:px-0">
        <h1 className='text-[#333232] text-4xl lg:text-6xl font-semibold'>Exclusive</h1>
        <h1 className='text-[#333232] text-4xl lg:text-6xl font-semibold'>Offers For You</h1>
        <p className='text-[#333232] text-sm lg:text-base font-medium'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-[200px] lg:w-[282px] h-[50px] lg:h-[70px] rounded-full bg-[#ff4141] border-none text-white text-sm lg:text-base font-medium mt-[20px] lg:mt-[30px] cursor-pointer hover:shadow-red-900 hover:shadow-lg'>Check NOW</button>
      </div>
      <div className="offers-right flex-1 flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
        <img src={exclusive_image} alt="Exclusive Offer" className='w-[80%] h-auto lg:w-auto lg:h-[370px] lg:mr-[6.5rem]' />
      </div>
    </div>
    </div></>
  )
}

export default Offers;
 