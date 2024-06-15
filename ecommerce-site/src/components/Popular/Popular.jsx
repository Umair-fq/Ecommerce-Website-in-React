import React from 'react'
import productData from '../assets/data'
import './Popular.css'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <>
        <div className="popular">
            <h1>Popular in Men</h1>
            <hr />
            <div className="popular-item">
                {
                    productData.map((product, i) => {
                        return <Item key = {i} id = {product.id} name = {product.name} image = {product.image} newPrice = {product.new_price} oldPrice = {product.old_price}/>; 
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Popular