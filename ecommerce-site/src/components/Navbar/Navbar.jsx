import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'
import userIcon from '../assets/user.png'
import cartIcon from '../assets/cart.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ProductContext } from '../Context/ProductContext';

const Navbar = () => {

  const [menu, setMenu] = useState('home');
  const {totalProducts} = useContext(ProductContext);
  return (
    <>
      <nav className="navbar">
        <div className="nav">
          <img src={logo} className="brand-logo" alt="Brand Logo" />
          <div className="nav-items">
            <div className="search">
              <input type="text" className="search-box" placeholder="Search brand, product" />
              <button className="search-btn">Search</button>
            </div>
            <Link to='/login'><img src={userIcon} alt="User" /></Link>
            <div className="cart-icon-container">
              <Link to='/cart'><img src={cartIcon} alt="Cart" /></Link>
              <div className="cart-count">{totalProducts()}</div>
            </div>
          </div>
        </div>
      </nav>
      <ul className="links-container">
        {/* className is dynamically set using a template literal */}
        <li className={`link-item ${menu === 'home' ? 'active' : ''}`} onClick={() => setMenu('home')}>
          <Link to = "/" style = {{textDecoration: 'none'}}>Home {menu === 'home' ? <hr /> : <></>}</Link>
        </li>
        <li className={`link-item ${menu === 'women' ? 'active' : ''}`} onClick={() => setMenu('women')}>
          <Link to = "/women" style = {{textDecoration: 'none'}}>Women {menu === 'women' ? <hr /> : <></>}</Link>
        </li>
        <li className={`link-item ${menu === 'men' ? 'active' : ''}`} onClick={() => setMenu('men')}>
          <Link to = "/men" style = {{textDecoration: 'none'}}>Men {menu === 'men' ? <hr /> : <></>}</Link>
        </li>
        <li className={`link-item ${menu === 'kids' ? 'active' : ''}`} onClick={() => setMenu('kids')}>
          <Link to = "/kids" style = {{textDecoration: 'none'}}>Kids {menu === 'kids' ? <hr /> : <></>}</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
