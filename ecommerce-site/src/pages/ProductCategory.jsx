import React, { useContext } from 'react'
import { ProductContext } from '../components/Context/ProductContext'
import Item from '../components/Item/Item'
import './Css/ProductCategory.css'
import optionsIcon from '../components/assets/dropdown_icon.png'

const ProductCategory = (props) => {
  const {allProducts} = useContext(ProductContext);

  return (
    <div className="product-category">
      <img className='category-banner' src={props.banner} alt="" />
      <div className="category-index">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="category-sort">
          Sort by <img src={optionsIcon} alt="" />
        </div>
      </div>
      <div className="products">
        {allProducts.map((product, i) => {
          if (product.category === props.category) {
            return <Item key = {i} id = {product.id} name = {product.name} image = {product.image} newPrice = {product.new_price} oldPrice = {product.old_price}/>;
          } else {
            return null;
          }
        })}
      </div>
      <div className="load-more">
        Explore More
      </div>
    </div>
  )
}

export default ProductCategory