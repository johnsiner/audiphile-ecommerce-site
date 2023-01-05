import { createContext, useReducer } from 'react';

export const CartContext = createContext({
   cartState: [],
   toggleCart: () => {},
   hideCart: () => {},
   addToCart: (item) => {},
   removeFromCart: (id) => {},
   clearCart: () => {},
});

const cartReducer = (state, action) => {
   switch (action.type) {
      case 'TOGGLE_CART':
         const cartShown = state.cartIsShown;
         return { ...state, cartIsShown: !cartShown };
      case 'HIDE_CART':
         return { ...state, cartIsShown: false };
      case 'ADD_TO_CART': {
         const existingCartItemIndex = state.cartItems.findIndex(
            (item) => item._id === action.payload._id
         );
         const existingCartItem = state.cartItems[existingCartItemIndex];
         let updatedCart;
         if (existingCartItem) {
            const updatedCartItem = {
               ...existingCartItem,
               amount: existingCartItem.amount + action.payload.amount,
            };
            updatedCart = [...state.cartItems];
            updatedCart[existingCartItemIndex] = updatedCartItem;
         } else {
            updatedCart = state.cartItems.concat(action.payload);
         }
         localStorage.setItem('cartItems', JSON.stringify(updatedCart));
         return { ...state, cartItems: updatedCart };
      }

      case 'REMOVE_CART_ITEM': {
         const existingCartItemIndex = state.cartItems.findIndex(
            (item) => item._id === action.id
         );
         const existingCartItem = state.cartItems[existingCartItemIndex];
         let updatedCartItems;

         if (existingCartItem.amount === 1) {
            updatedCartItems = state.cartItems.filter(
               (item) => item._id !== action.id
            );
         } else {
            const updatedItem = {
               ...existingCartItem,
               amount: existingCartItem.amount - 1,
            };
            updatedCartItems = [...state.cartItems];
            updatedCartItems[existingCartItemIndex] = updatedItem;
         }
         localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
         return {
            ...state,
            cartItems: updatedCartItems,
         };
      }

      case 'CLEAR_CART': {
         localStorage.removeItem('cartItems');
         return { ...state, cartItems: [] };
      }

      default:
         return state;
   }
};

const CartContextProvider = (props) => {
   const defaultCartState = {
      cartIsShown: false,
      cartItems: localStorage.getItem('cartItems')
         ? JSON.parse(localStorage.getItem('cartItems'))
         : [],
   };
   const [cartState, dispatchAction] = useReducer(
      cartReducer,
      defaultCartState
   );

   const toggleCart = () => {
      dispatchAction({ type: 'TOGGLE_CART' });
   };

   const hideCart = () => {
      dispatchAction({ type: 'HIDE_CART' });
   };

   const addToCart = (item) => {
      dispatchAction({ type: 'ADD_TO_CART', payload: item });
   };

   const removeFromCart = (id) =>
      dispatchAction({ type: 'REMOVE_CART_ITEM', id: id });

   const clearCart = () => dispatchAction({ type: 'CLEAR_CART' });

   const cartContext = {
      cartState,
      toggleCart,
      hideCart,
      addToCart,
      removeFromCart,
      clearCart,
   };

   return (
      <CartContext.Provider value={cartContext}>
         {props.children}
      </CartContext.Provider>
   );
};

export default CartContextProvider;
