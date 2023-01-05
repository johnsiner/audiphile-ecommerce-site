import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import zx9 from '../assets/home/desktop/image-speaker-zx9.png';
import BestGear from '../components/BestGear';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function Home() {
   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 });
   }, []);

   return (
      <div className="home">
         <Helmet>
            <title>Audiophile</title>
         </Helmet>
         <div className="heading">
            <div className="container">
               <div className="info">
                  <p className="overline">new product</p>
                  <h1>XX99 Mark II Headphones</h1>
                  <p>
                     Experience natural, lifelike audio and exceptional build
                     quality made for the passionate music enthusiast.
                  </p>
                  <div className="link">
                     <Link to="/product/xx99-mark-two-headphones">
                        see product
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <section className="products">
            <div className="container categories">
               <Nav />
            </div>
            <div className="zx9">
               <div className="container">
                  <div className="image">
                     <img src={zx9} alt="" />
                  </div>
                  <div className="info">
                     <h1>ZX9 SPEAKER</h1>
                     <p>
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                     </p>
                     <div className="link dark">
                        <Link to="/product/zx9-speaker">see product</Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="zx7">
               <div className="container">
                  <div>
                     <h4>zx7 speaker</h4>
                     <div className="link light">
                        <Link to="/product/zx7-speaker">see product</Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="yx1">
               <div className="container">
                  <div className="image"></div>
                  <div className="info">
                     <div>
                        <h4>yx1 earphones</h4>
                        <div className="link light">
                           <Link to="/product/yx1-earphones">see product</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className="extra">
            <BestGear />
            <Footer />
         </div>
      </div>
   );
}
