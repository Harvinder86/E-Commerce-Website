import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='Item w-[250px] hover:scale-105 hover:duration-[0.6s] '>
      <Link to={`/product/${props.id}`}><img onClickCapture={window.scrollTo(0,0)} src={props.image} alt="" /></Link>  
        <p className='mx-[6px] my-[0px]'>{props.name}</p>
        <div className="item-price flex gap-[20px]">
            <div className="item-price-new text-[#374151] text-lg font-semibold">
            ₹{props.new_price}
            </div>
            <div className="item-price-old text-[#8c8c8c]  text-lg font-semibold line-through">
            ₹{props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item