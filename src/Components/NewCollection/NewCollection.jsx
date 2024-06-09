import React from 'react';
import new_collection from "../../assets/new_collections.js";
import Item from '../Navbar/item/Item';

const NewCollection = () => {
  return (
    <div className='new-collection flex flex-col items-center gap-4 h-auto mb-[100px]  bg-gradient-to-r from-[#4f2d52] to-[#febbbb] p-4'>
      <h1 className='text-[#171717] text-4xl lg:text-[50px] font-bold'>NEW COLLECTION</h1>
      <hr className='w-32 lg:w-[200px] h-[6px] rounded-xl bg-[#252525]'/>
      <div className='collections grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-4 lg:gap-[30px]'>
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
}

export default NewCollection;
