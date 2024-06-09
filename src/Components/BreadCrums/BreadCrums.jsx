import React from 'react'
import arrow_icon from "../../assets/arrow.png"
const BreadCrums = (props) => {
    const {product}=props;
  return (
    <div className='BreadCrums flex items-center gap-[8px] text-[#5e5e5e] text-2xl font-semibold mx-[60px] my-[40px] ml-[80px] capitalize'>
        HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default BreadCrums