import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../store';
import './AddToCart.css';
import QuantitySelect from './QuantitySelect';

export default function AddToCart({ product }) {
   const [quantity, setQuantity] = useState(1);
   const cartCtx = useContext(CartContext);

   const handleAddition = () => {
      setQuantity((prev) => prev + 1);
   };

   const handleSubstraction = () => {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
   };

   const addToCartHandler = () => {
      cartCtx.addToCart({
         _id: product._id,
         name: product.name,
         shortName: product.shortName,
         image: product.categoryImage.mobile,
         price: product.price,
         amount: quantity,
      });
   };

   return (
      <div className="add-cart">
         <QuantitySelect
            quantity={quantity}
            onAdd={handleAddition}
            onSubtract={handleSubstraction}
         />
         <div className="link">
            <Link onClick={addToCartHandler}>add to cart</Link>
         </div>
      </div>
   );
}
