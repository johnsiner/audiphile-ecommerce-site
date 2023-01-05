import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BestGear from '../components/BestGear';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';
import Nav from '../components/Nav';
import ProductList from '../components/ProductList';
import useHttp from '../hooks/use-http';
import { getEarphones, getHeadphones, getSpeakers } from '../lib/api';
import './CategoryPage.css';

export default function CategoryPage() {
   const params = useParams();
   const { category } = params;
   const { sendRequest, status, data, error } = useHttp(
      category === 'headphones'
         ? getHeadphones
         : category === 'speakers'
         ? getSpeakers
         : getEarphones,
      true
   );

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 });
      sendRequest();
   }, [sendRequest]);

   let list = [];
   if (data) {
      list = data.sort((a, b) => Number(b.new) - Number(a.new));
   }

   return (
      <div className="category-page">
         {/* <Header /> */}
         <div className="heading">
            <h2>{category}</h2>
         </div>
         {status === 'pending' ? (
            <div className="center">
               <LoadingSpinner />
            </div>
         ) : error ? (
            <p className="center">Something went wrong</p>
         ) : (
            <Fragment>
               <div className="container">
                  <ProductList productList={list} />
                  <Nav />
               </div>
               <BestGear />
               <Footer />
            </Fragment>
         )}
      </div>
   );
}
