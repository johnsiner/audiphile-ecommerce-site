import React, { useContext } from 'react';
import { CartContext } from '../store';
import './CartItem.css';
import QuantitySelect from './QuantitySelect';

export default function CartItem({ cartItem }) {
   const { removeFromCart, addToCart } = useContext(CartContext);

   return (
      <div className="cart-item">
         <div className="left">
            <div className="image">
               <img src={require('../' + cartItem.image)} alt="" />
            </div>
            <div className="info">
               <div>
                  <h6>{cartItem.shortName}</h6>
                  <p>{'$ ' + cartItem.price.toLocaleString('en-US')}</p>
               </div>
            </div>
         </div>
         <QuantitySelect
            onAdd={() => addToCart({ ...cartItem, amount: 1 })}
            onSubtract={() => removeFromCart(cartItem._id)}
            quantity={cartItem.amount}
            cart={true}
         />
      </div>
   );
}
