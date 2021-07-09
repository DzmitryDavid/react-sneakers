import React from 'react'
import AppContext from '../pages/Context';
const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => (sum + obj.price), 0);
  const tax = Math.floor(totalPrice * 0.05)
  return { cartItems, totalPrice, setCartItems, tax }
}

export default useCart
