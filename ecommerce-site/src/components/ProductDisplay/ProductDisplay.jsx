import React, { useContext, useEffect } from 'react'
import './ProductDisplay.css'
import ratingIcon from '../assets/star_icon.png'
import ratingDullIcon from '../assets/star_dull_icon.png'
import { ProductContext } from '../Context/ProductContext'

const ProductDisplay = ({product}) => {
    const {addToCart, cart} = useContext(ProductContext);

    useEffect(() => {
        console.log('Updated cart:', cart);
    }, [cart]); // This logs the cart every time it updates


  return (
    <div className="prod-display">
        <div className="display-left">
            <div className="prod-img-list">
                <img src = {product.image} alt="" />
                <img src = {product.image} alt="" />
                <img src = {product.image} alt="" />
                <img src = {product.image} alt="" />
            </div>
            <div className="display-img">
                <img src = {product.image} alt="" className="prod-main-img" />
            </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="prod-right-star">
                <img src = {ratingIcon} alt="" />
                <img src = {ratingIcon} alt="" />
                <img src = {ratingIcon} alt="" />
                <img src = {ratingIcon} alt="" />
                <img src = {ratingDullIcon} alt="" />
                <p>(122)</p>
            </div>
            <div className="right-price-sec">
                <div className="old-price">Rs.{product.old_price}</div>
                <div className="new-price">Rs.{product.new_price}</div>
            </div>
            <div className="prod-description">
                lorem ipsum dolor sit amet, consectetur adipiscing el aspect et
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ipsa autem ad eligendi libero expedita, soluta voluptatum impedit sunt, 
                sit dignissimos voluptates voluptas ipsam. Eveniet soluta ipsa labore voluptas officiis quia.
            </div>
            <div className="prod-size">
                <h1>Select Size</h1>
                <div className="prod-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
            <p className="prod-right-category"><span>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className="prod-right-category"><span>Tags: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay