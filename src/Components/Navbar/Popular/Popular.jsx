import React from 'react';

import data_product from "../../../assets/data.js";

import Item from '../item/Item';

const Popular = () => {
  return (
    <div className='popular flex flex-col items-center gap-4 h-auto lg:h-[90vh] p-4 bg-[#ad6a6e]'>
      <h1 className='text-[#171717] text-4xl lg:text-[50px] font-bold'>POPULAR IN WOMEN</h1>
      <hr className='w-32 lg:w-[200px] h-[6px] rounded-xl bg-[#252525]' />
      <div className='popular-item mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[30px]'>
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
