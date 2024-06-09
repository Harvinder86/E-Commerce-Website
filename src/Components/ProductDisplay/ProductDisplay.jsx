import React,{useContext} from 'react';
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='ProductDisplay flex flex-col lg:flex-row mx-0 my-16 lg:my-10 px-4 lg:px-8'>
      <div className="productdisplay-left flex flex-col lg:flex-row gap-4 lg:gap-6 mb-8 lg:mb-0">
        <div className="productdisplay-img-list flex flex-row lg:flex-col gap-4 lg:gap-2">
          <img src={product.image} alt="" className='w-24 lg:w-auto h-24 lg:h-40 object-cover' />
          <img src={product.image} alt="" className='w-24 lg:w-auto h-24 lg:h-40 object-cover' />
          <img src={product.image} alt="" className='w-24 lg:w-auto h-24 lg:h-40 object-cover' />
          <img src={product.image} alt="" className='w-24 lg:w-auto h-24 lg:h-40 object-cover' />
        </div>
        <div className="productdisplay-img flex justify-center">
          <img className='productdisplay-main-img w-full lg:w-[586px] h-auto lg:h-[665px] object-cover' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right flex flex-col gap-4 lg:gap-6 lg:ml-8">
        <h1 className='text-[#3d3d3d] text-lg lg:text-xl font-bold'>{product.name}</h1>
        <div className="productdisplay-right-star flex items-center gap-1 lg:gap-2 text-[#1c1c1c] text-sm lg:text-base">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices flex gap-4 lg:gap-6 text-base font-bold">
          <div className="productdisplay-right-prices-old text-[#818181] line-through">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-prices-new text-[#ff4141]">
            ₹{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description text-sm lg:text-base">
          A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className="productdisplay-right-size mt-4 lg:mt-10">
          <h1 className='text-[#656565] text-xl lg:text-2xl font-semibold'>Select Size</h1>
          <div className="productdisplay-right-sizes flex gap-2 lg:gap-4 mt-2 lg:mt-4">
            <div className='px-4 py-2 lg:px-6 lg:py-3 bg-[#fbfbfb] rounded border border-[#ebebeb] cursor-pointer'>S</div>
            <div className='px-4 py-2 lg:px-6 lg:py-3 bg-[#fbfbfb] rounded border border-[#ebebeb] cursor-pointer'>M</div>
            <div className='px-4 py-2 lg:px-6 lg:py-3 bg-[#fbfbfb] rounded border border-[#ebebeb] cursor-pointer'>L</div>
            <div className='px-4 py-2 lg:px-6 lg:py-3 bg-[#fbfbfb] rounded border border-[#ebebeb] cursor-pointer'>XL</div>
            <div className='px-4 py-2 lg:px-6 lg:py-3 bg-[#fbfbfb] rounded border border-[#ebebeb] cursor-pointer'>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className='w-full lg:w-52 py-3 lg:py-4 text-lg lg:text-xl font-semibold text-white bg-[#FF4141] mt-4 lg:mt-6 rounded cursor-pointer'>ADD TO CART</button>
        <p className='productdisplay-right-category mt-4 lg:mt-6 text-sm lg:text-base'><span className='font-bold'>Category:</span> Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category text-sm lg:text-base'><span className='font-bold'>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
