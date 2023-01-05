import React from 'react';
import './QuantitySelect.css';

export default function QuantitySelect(props) {
   return (
      <div className={`quantity-select ${props.cart ? 'in-cart' : ''}`}>
         <h6
            className={`minus ${
               props.quantity === 1 && !props.cart && 'disable'
            }`}
            onClick={props.onSubtract}
         >
            -
         </h6>
         <h6 className="quantity">{props.quantity}</h6>
         <h6 className="plus" onClick={props.onAdd}>
            +
         </h6>
      </div>
   );
}
