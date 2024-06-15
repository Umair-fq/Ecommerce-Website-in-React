import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Item = (props) => {
  return (
    <>
        <div className="item">
            {/* passing x and y coordinates so when we click on the picture, it will scroll to the top */}
            <Link to = {`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
            {/* {console.log(`/product/${props.id}`)} */}
            <p>{props.name}</p>
            <div className="price-section">
                <div className="new-price">
                    <p>{props.newPrice}</p>
                </div>
                <div className="old-price">
                    <p>{props.oldPrice}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Item