import React, { useState } from 'react';
import { ProductContext } from './ProductContext';
import allProducts from '../assets/all_product';

const getDefaultCart = () => {
    let cart = {};
    allProducts.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
}

const ProductContextProvider = ({ children }) => {
    const [cart, setCart] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCart(prev => {
            const updatedCart = {...prev};
            updatedCart[itemId] = updatedCart[itemId] + 1 || 1; // Adds 1 to the count or initializes it to 1
            return updatedCart;
        })
    }
    
    
    const removeFromCart = (itemId) => {
        setCart(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalAmount = () => {
        let totalPrice = 0;
        for (const item in cart) {
            if (cart[item] > 0) {
                let productInfo = allProducts.find(p => p.id === Number(item));
                totalPrice += productInfo.new_price * cart[item];
            }
        }
        return totalPrice;
    }

    const totalProducts = () => {
        let totalItems = 0;
        
        for (const item in cart) {
            if (cart[item] > 0) {
                totalItems += cart[item];
            }
            
        }
        return totalItems;
    }

    const contextValue = { allProducts, cart, addToCart, removeFromCart, getTotalAmount, totalProducts };
    
    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>  
    );
}

export default ProductContextProvider;
