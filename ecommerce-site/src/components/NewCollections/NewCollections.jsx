import React from 'react'
import newCollection from '../assets/new_collections'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className="new-collections">
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
            {
                newCollection.map((product, i) => {
                    return <Item key = {i} id = {product.id} name = {product.name} image = {product.image} newPrice = {product.new_price} oldPrice = {product.old_price}/>;
                })
            }
        </div>
    </div>
  )
}

export default NewCollections