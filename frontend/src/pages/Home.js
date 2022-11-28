import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import zx9 from '../assets/home/desktop/image-speaker-zx9.png';

export default function Home() {
   return (
      <div className="home">
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
                     <Link to="/">see product</Link>
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
                        <Link to="/">see product</Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="zx7">
               <div className="container">
                  <div>
                     <h4>zx7 speaker</h4>
                     <div className="link light">
                        <Link to="/">see product</Link>
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
                           <Link to="/">see product</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
