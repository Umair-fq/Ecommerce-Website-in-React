import React, { useContext } from 'react';
import './CartItems.css';
import { ProductContext } from '../Context/ProductContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {
    const { allProducts, cart, removeFromCart, getTotalAmount } = useContext(ProductContext);

    const cartItems = allProducts.filter(product => cart[product.id] > 0);

    return (
        <div className='cart-items'>
            <div className="items-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
                <p>Action</p>
            </div>
            <hr />
            {cartItems.length > 0 ? (
                cartItems.map(product => (
                    <div key={product.id} className="items-format">
                        <img src={product.image} alt={`Product: ${product.name}`} />
                        <p>{product.name}</p>
                        <p>Rs.{product.new_price}</p>
                        <button className="cart-items-quantity">{cart[product.id]}</button>
                        <p>Rs.{product.new_price * cart[product.id]}</p>
                        <FontAwesomeIcon icon={faTrash} onClick={() => removeFromCart(product.id)} className="remove-icon" />
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-items-total">
                            <p>Subtotal</p>
                            <p>Rs.{getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>Rs.1000</p>
                        </div>
                        <div className="cart-items-total">
                            <p>Total</p>
                            <p>Rs.{getTotalAmount()+1000}</p>
                        </div>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className="promo-code">
                    <p>If you have a promocode enter, it here</p>
                    <div className="promobox">
                        <input type="text" name="promocode" id="promocode" placeholder='Enter promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
