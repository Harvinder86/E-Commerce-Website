import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const {getTotalCartItems}=useContext(ShopContext)

  return (
    <div className='navbar flex flex-col md:flex-row justify-between items-center p-4 shadow-md'>
      <div className="nav-logo flex items-center gap-2">
        <img src={logo} alt="Logo" className='w-10 h-10' />
        <p className='text-gray-700 text-2xl md:text-3xl font-semibold'>BUYBUDDY</p>
      </div>
      <ul className='nav-menu flex flex-col md:flex-row items-center gap-6 md:gap-12 text-slate-600 text-lg md:text-xl font-bold mt-4 md:mt-0'>
        <li onClick={() => setMenu("Shop")} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/'>Shop</Link>
          {menu === "Shop" ? <hr className='border-none w-3/4 h-1 rounded-lg bg-red-600' /> : null}
        </li>
        <li onClick={() => setMenu("Mens")} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/Mens'>Men</Link>
          {menu === "Mens" ? <hr className='border-none w-3/4 h-1 rounded-lg bg-red-600' /> : null}
        </li>
        <li onClick={() => setMenu("Womens")} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/Womens'>Women</Link>
          {menu === "Womens" ? <hr className='border-none w-3/4 h-1 rounded-lg bg-red-600' /> : null}
        </li>
        <li onClick={() => setMenu("Kids")} className='flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <Link to='/Kids'>Kids</Link>
          {menu === "Kids" ? <hr className='border-none w-3/4 h-1 rounded-lg bg-red-600' /> : null}
        </li>
      </ul>
      <div className='nav-login-cart flex items-center gap-4 mt-4 md:mt-0'>
        <Link to='/login'>
          <button className='w-32 md:w-40 h-12 outline-none border-2 border-solid border-neutral-500 rounded-full text-white text-lg font-medium bg-[#752a51] cursor-pointer'>Login</button>
        </Link>
        <Link to='/cart'>
          <div className='relative'>
            <img src={cart_icon} alt="Cart" className='w-8 h-8' />
            <div className="nav-cart-count absolute top-[-19px] right-[-17px] w-6 h-6 flex justify-center items-center rounded-full bg-red-600 text-white text-xs">{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
