import React, { useContext } from 'react'
import { ProductContext } from '../components/Context/ProductContext'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {allProducts} = useContext(ProductContext);
  const {id} = useParams();
  const product = allProducts.find(product => product.id === Number(id));
  return (
    <>
      <Breadcrumb product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </>
  )
}

export default Product