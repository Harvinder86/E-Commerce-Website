import React from 'react';

const NewsLetter = () => {
  return (
    <div className='NewsLetter w-full h-auto flex flex-col items-center justify-center px-4 py-16 mb-0  bg-gradient-to-r from-[#856588] to-[#474eb1] gap-6'>
      <h1 className='text-[#454545] text-xl sm:text-2xl font-semibold text-center'>
        Get Exclusive Offers On Your Email
      </h1>
      <p className='text-[#454545] text-lg sm:text-2xl text-center'>
        Subscribe to our newsletter and stay updated
      </p>

      <div className='flex flex-col sm:flex-row items-center justify-between bg-white w-full max-w-xl sm:max-w-2xl h-16 rounded-full border-2 border-solid border-neutral-100'>
        <input
          className='flex-grow w-full sm:w-auto ml-4 sm:ml-8 border-none outline-none text-[#616161] text-base'
          type="email"
          placeholder='Your Email ID'
        />
        <button className='w-full sm:w-auto mt-4 sm:mt-0 sm:mr-4 h-16 sm:h-full sm:rounded-full from-neutral-50 text-base sm:text-lg cursor-pointer'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
