import React, { useContext, useState, useMemo } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../../assets/cart_cross_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const handlePromoCode = () => {
        if (promoCode === 'HEYBUDDY') {
            setDiscount(0.10); // 10% discount
        } else {
            setDiscount(0);
        }
    };

    const calculateTotal = useMemo(() => {
        let subtotal = all_product.reduce((total, product) => {
            if (cartItems[product.id] > 0) {
                return total + product.new_price * cartItems[product.id];
            }
            return total;
        }, 0);

        let discountAmount = subtotal * discount;
        let discountedTotal = subtotal - discountAmount;
        let deliveryCharge = discountedTotal > 100 ? 0 : 50;

        return {
            subtotal,
            discountAmount,
            discountedTotal,
            deliveryCharge,
            finalTotal: discountedTotal + deliveryCharge
        };
    }, [all_product, cartItems, discount]);

    return (
        <div className='cartItems p-4'>
            <div className="cartItemFormat grid grid-cols-6 gap-4 text-center">
                <p className="col-span-2 sm:col-span-1 font-semibold">Products</p>
                <p className="col-span-2 sm:col-span-1 font-semibold">Title</p>
                <p className="col-span-2 sm:col-span-1 font-semibold">Price</p>
                <p className="col-span-2 sm:col-span-1 font-semibold">Quantity</p>
                <p className="col-span-2 sm:col-span-1 font-semibold">Total</p>
                <p className="col-span-2 sm:col-span-1 font-semibold">Remove</p>
            </div>
            <hr className="my-4" />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className='cartitems-format grid grid-cols-6 gap-4 items-center text-center my-2'>
                            <img src={e.image} alt={e.name} className='col-span-2 sm:col-span-1 w-full h-auto object-cover' />
                            <p className="col-span-2 sm:col-span-1">{e.name}</p>
                            <p className="col-span-2 sm:col-span-1">₹{e.new_price}</p>
                            <button className='cartitems-quantity col-span-2 sm:col-span-1 bg-gray-200 rounded-md p-2'>{cartItems[e.id]}</button>
                            <p className="col-span-2 sm:col-span-1">₹{e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" className="col-span-2 sm:col-span-1 cursor-pointer w-6 h-6 mx-auto" />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="cartitemsTotal border p-4 rounded-md">
                    <h1 className="font-semibold text-lg mb-4">Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item flex justify-between mb-2">
                            <p>Subtotal</p>
                            <p>₹{calculateTotal.subtotal.toFixed(2)}</p>
                        </div>
                        {discount > 0 && (
                            <>
                                <hr />
                                <div className="cartitems-total-item flex justify-between my-2">
                                    <p>Discount</p>
                                    <p>-₹{calculateTotal.discountAmount.toFixed(2)}</p>
                                </div>
                            </>
                        )}
                        <hr />
                        <div className="cartitems-total-item flex justify-between my-2">
                            <p>Delivery Charges</p>
                            <p>₹{calculateTotal.deliveryCharge}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item flex justify-between mt-2">
                            <h3 className="font-semibold">Total</h3>
                            <h3 className="font-semibold">₹{calculateTotal.finalTotal.toFixed(2)}</h3>
                        </div>
                    </div>
                    <button className="mt-4 w-full bg-red-500 text-white p-2 rounded-md">Proceed To Checkout</button>
                </div>
                <div className="cartitems-promocode border p-4 rounded-md">
                    <p className="mb-4">If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox flex">
                        <input
                            type="text"
                            placeholder='promo code'
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="p-2 border border-gray-300 rounded-l-md flex-1"
                        />
                        <button
                            onClick={handlePromoCode}
                            className="p-2 bg-black text-white rounded-r-md"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
