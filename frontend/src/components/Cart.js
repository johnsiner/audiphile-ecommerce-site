import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../store';
import './Cart.css';
import CartItem from './CartItem';

export default function Cart() {
   const {
      clearCart,
      hideCart,
      cartState: { cartItems },
   } = useContext(CartContext);
   const numberOfCartItem = cartItems.reduce((curNumber, item) => {
      return curNumber + item.amount;
   }, 0);

   const total = cartItems.reduce((curNumber, item) => {
      return curNumber + item.amount * item.price;
   }, 0);

   return (
      <Fragment>
         <div className="modal"></div>
         <div className="cart">
            <div className="container">
               <div className="card">
                  {numberOfCartItem === 0 ? (
                     <div className="empty-cart">
                        <h6>cart is empty</h6>
                        <div className="link">
                           <Link onClick={hideCart}>continue shopping</Link>
                        </div>
                     </div>
                  ) : (
                     <Fragment>
                        <div className="top">
                           <h6>cart ({numberOfCartItem})</h6>
                           <p onClick={clearCart} className="clear-cart">
                              Remove all
                           </p>
                        </div>
                        <div className="items">
                           {cartItems.map((cartItem) => (
                              <CartItem
                                 key={cartItem.name}
                                 cartItem={cartItem}
                              />
                           ))}
                        </div>
                        <div className="total">
                           <p>TOTAL</p>
                           <h6>{'$ ' + total.toLocaleString('en-US')}</h6>
                        </div>
                        <div className="link">
                           <Link>checkout</Link>
                        </div>
                     </Fragment>
                  )}
               </div>
            </div>
         </div>
      </Fragment>
   );
}
