import React from 'react';

const DescriptionBox = () => {
  return (
    <div className="DescriptionBox mx-6 md:mx-12 lg:mx-24 my-10 md:my-16 lg:my-20">
      <div className="descriptionbox-navigator flex flex-col md:flex-row">
        <div className="descriptionbox-nav-box flex justify-center items-center text-base md:text-lg font-semibold w-full md:w-[150px] h-14 border-2 border-solid border-gray-300">
          Description
        </div>
        <div className="descriptionbox-nav-box flex justify-center items-center text-base md:text-lg font-semibold w-full md:w-[150px] h-14 border-2 border-solid border-gray-300 bg-gray-50 text-gray-600">
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description flex flex-col gap-6 border-2 border-solid border-gray-300 p-6 md:p-12 pb-10">
        <p>
          This Website clothes store is any shop which sells items of ready-made clothing. A small shop which sells expensive or designer clothing may be called a boutique. A shop that sells clothes for a narrowly restricted market such as school uniforms or outdoor sports may be called an outfitter.
        </p>
        <p>
          E-commerce websites typically display products or services with a variety of options to cater to the diverse preferences of their customers. These options often include different sizes, colors, styles, and configurations. For instance, clothing items are commonly available in multiple sizes such as small, medium, large, and extra-large, and can be purchased in a range of colors to suit individual tastes.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
