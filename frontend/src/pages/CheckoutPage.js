import React from 'react';
import Footer from '../components/Footer';
import './CheckoutPage.css';

export default function CheckoutPage() {
   return (
      <div className="checkout-page">
         <div className="heading"></div>
         <div className="container">
            <p className="go-back">Go Back</p>
         </div>
         <Footer />
      </div>
   );
}
