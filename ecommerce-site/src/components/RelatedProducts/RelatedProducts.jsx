import React from 'react'
import products from '../assets/data'
import './RelatedProducts.css'
import Item from '../Item/Item';

const RelatedProducts = () => {
    const productData = products;
    return (
        <div className='related-products'>
            <h1>Related Products</h1>
            <hr />
            <div className="products-item">
                { productData.map((product, i) => {
                        return <Item key = {i} id = {product.id} name = {product.name} image = {product.image} newPrice = {product.new_price} oldPrice = {product.old_price}/>; 
                    })}
            </div>
        </div>
    )
}

export default RelatedProducts