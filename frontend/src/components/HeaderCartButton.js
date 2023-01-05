import React, { useContext, useEffect, useState } from 'react';
import './HeaderCartButton.css';
import cartIcon from '../assets/shared/desktop/icon-cart.svg';
import { CartContext } from '../store';

export default function HeaderCartButton() {
   const [btnIsHighlighted, setBtnIsHilighted] = useState(false);
   const {
      cartState: { cartItems },
      toggleCart,
   } = useContext(CartContext);

   const numberOfCartItem = cartItems.reduce((curNumber, item) => {
      return curNumber + item.amount;
   }, 0);

   useEffect(() => {
      if (numberOfCartItem === 0) {
         return;
      }
      setBtnIsHilighted(true);
      const timer = setTimeout(() => {
         setBtnIsHilighted(false);
      }, 300);

      return () => {
         clearTimeout(timer);
      };
   }, [numberOfCartItem]);

   const cartBtnClasses = `cart-btn ${btnIsHighlighted ? 'bump' : ''}`;

   return (
      <div className={cartBtnClasses} onClick={toggleCart}>
         <div>
            <img src={cartIcon} alt="cart" />
         </div>
         <p>{numberOfCartItem}</p>
      </div>
   );
}
