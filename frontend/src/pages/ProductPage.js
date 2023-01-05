import React, { Fragment, useEffect, useReducer } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BestGear from '../components/BestGear';
import LoadingSpinner from '../components/LoadingSpinner';
import Nav from '../components/Nav';
import './ProductPage.css';
import AddToCart from '../components/AddToCart';
import Footer from '../components/Footer';

const reducer = (state, action) => {
   switch (action.type) {
      case 'FETCH_REQUEST':
         return { ...state, loading: true };
      case 'FETCH_SUCCESS':
         return { ...state, product: action.payload, loading: false };
      case 'FETCH_FAILED':
         return { ...state, loading: false, error: action.payload };
      default:
         return state;
   }
};

export default function ProductPage() {
   const params = useParams();
   const { slug } = params;

   const [{ loading, error, product }, dispatch] = useReducer(reducer, {
      loading: true,
      error: '',
      product: null,
   });

   const navigate = useNavigate();

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 });
      const fetchData = async () => {
         dispatch({ type: 'FETCH_REQUEST' });
         try {
            const result = await fetch(
               `http://192.168.43.166:5000/shop/product/${slug}`
            );
            const data = await result.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data[0] });
         } catch (err) {
            dispatch({ type: 'FETCH_FAILED', payload: err });
         }
      };
      fetchData();
   }, [slug]);

   return (
      <div className="product-page">
         <div className="heading"></div>
         {loading ? (
            <div className="center">
               <LoadingSpinner />
            </div>
         ) : error ? (
            <p className="center">Something went wrong</p>
         ) : (
            <Fragment>
               <div className="container">
                  <p className="go-back" onClick={() => navigate(-1)}>
                     Go Back
                  </p>
                  <div className="top">
                     <div className="image">
                        <img
                           className="desktop"
                           src={require('../' + product.image.desktop)}
                           alt={product.name}
                        />
                        <img
                           className="tablet"
                           src={require('../' + product.image.tablet)}
                           alt={product.name}
                        />
                        <img
                           className="mobile"
                           src={require('../' + product.image.mobile)}
                           alt={product.name}
                        />
                     </div>
                     <div className="info">
                        {product.new && <p className="overline">new product</p>}
                        <h2>{product.name}</h2>
                        <p className="description">{product.description}</p>
                        <h6>{'$' + product.price.toLocaleString('en-US')}</h6>
                        <AddToCart product={product} />
                     </div>
                  </div>
                  <div className="bottom-desc">
                     <div className="features">
                        <h3>features</h3>
                        <p>{product.features}</p>
                     </div>
                     <div className="in-the-box">
                        <h3>in the box</h3>
                        <div>
                           {product.includes.map((include, index) => (
                              <div key={index}>
                                 <h6>{include.quantity + 'x'}</h6>
                                 <p>{include.item}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="product-gallery">
                     <div className="small">
                        <div>
                           <img
                              className="desktop"
                              src={require('../' +
                                 product.gallery.first.desktop)}
                              alt=""
                           />
                           <img
                              className="tablet"
                              src={require('../' +
                                 product.gallery.first.tablet)}
                              alt=""
                           />
                           <img
                              className="mobile"
                              src={require('../' +
                                 product.gallery.first.mobile)}
                              alt=""
                           />
                        </div>
                        <div>
                           <img
                              className="desktop"
                              src={require('../' +
                                 product.gallery.second.desktop)}
                              alt=""
                           />
                           <img
                              className="tablet"
                              src={require('../' +
                                 product.gallery.second.tablet)}
                              alt=""
                           />
                           <img
                              className="mobile"
                              src={require('../' +
                                 product.gallery.second.mobile)}
                              alt=""
                           />
                        </div>
                     </div>
                     <div className="large">
                        <div>
                           <img
                              className="desktop"
                              src={require('../' +
                                 product.gallery.third.desktop)}
                              alt=""
                           />
                           <img
                              className="tablet"
                              src={require('../' +
                                 product.gallery.third.tablet)}
                              alt=""
                           />
                           <img
                              className="mobile"
                              src={require('../' +
                                 product.gallery.third.mobile)}
                              alt=""
                           />
                        </div>
                     </div>
                  </div>
                  <div className="also-like">
                     <h3>you may also like</h3>
                     <div>
                        {product.others.map((product) => (
                           <div className="alt-product" key={product.slug}>
                              <div>
                                 <img
                                    className="desktop"
                                    src={require('../' + product.image.desktop)}
                                    alt=""
                                 />
                                 <img
                                    className="tablet"
                                    src={require('../' + product.image.tablet)}
                                    alt=""
                                 />
                                 <img
                                    className="mobile"
                                    src={require('../' + product.image.mobile)}
                                    alt=""
                                 />
                              </div>
                              <h5>{product.name}</h5>
                              <div className="link">
                                 <Link to={`/product/${product.slug}`}>
                                    see product
                                 </Link>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <Nav />
               </div>
               <div>
                  <BestGear />
                  <Footer />
               </div>
            </Fragment>
         )}
      </div>
   );
}
