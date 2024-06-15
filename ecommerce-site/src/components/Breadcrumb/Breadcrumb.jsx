import React from 'react';
import './Breadcrumb.css'

const Breadcrumb = ({ product }) => {
  return (
    <div className="bread-crumb">
        Home <span className="arrow">›</span> Shop <span className="arrow">›</span> {product.category}
        <span className="arrow">›</span> {product.name}
    </div>
  );
}

export default Breadcrumb;
