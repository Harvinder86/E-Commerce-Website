import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../assets/dropdown_icon.png";

import Item from '../Components/Navbar/item/Item.jsx';



const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='ShopCategory w-full bg-gradient-to-l from-[#a0d3cc] to-[#FDE9FF]'>
      <img className='shopcategory-banner w-full h-auto mb-6' src={props.banner} alt="Shop Banner" />
      <div className="shopcategory-indexSort flex flex-col lg:flex-row mx-4 lg:mx-0 items-center justify-between mb-6">
        <p className='font-medium text-base lg:text-lg mb-4 lg:mb-0'>
          <span className='font-medium'>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort flex items-center px-4 py-2 rounded-full bg-gradient-to-l from-[#c997b3] to-[#03a9f4] border border-gray-400 cursor-pointer">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" className='ml-2' />
        </div>
      </div>
      <div className="shopcategory-products mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center  mt-[6.5rem] pb-10 ">
        <button className='menbutton w-56 h-16 rounded-full bg-gradient-to-l from-[#c997b3] to-[#03a9f4] text-lg font-semibold hover:w-[220px] hover:h-20 hover:border-2 border-black hover:shadow-2xl hover:shadow-slate-950'>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
