import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import { useContext } from 'react';
import { CartContext } from './store';
import Cart from './components/Cart';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';

function App() {
   console.log('page rendered');
   const {
      cartState: { cartIsShown },
   } = useContext(CartContext);

   return (
      <div className="App">
         {cartIsShown && <Cart />}
         <Header />
         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/category/:category" element={<CategoryPage />} />
               <Route path="/product/:slug" element={<ProductPage />} />
               <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
         </main>
      </div>
   );
}

export default App;
