import React from 'react';
import logo from '../assets/shared/desktop/logo.svg';
import FacebookIcon from '../assets/shared/desktop/icon-facebook';
import TwitterIcon from '../assets/shared/desktop/icon-twitter';
import InstagramIcon from '../assets/shared/desktop/icon-instagram';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
   return (
      <footer>
         <div className="container">
            <div className="line"></div>
         </div>
         <div className="container">
            <div className="logo">
               <Link to="/">
                  <img src={logo} alt="logo" />
               </Link>
            </div>
            <nav>
               <NavLink to="/">HOME</NavLink>
               <NavLink to="/category/headphones">HEADPHONES</NavLink>
               <NavLink to="/category/speakers">SPEAKERS</NavLink>
               <NavLink to="/category/earphones">EARPHONES</NavLink>
            </nav>
         </div>
         <div className="container">
            <p>
               Audiophile is an all in one stop to fulfill your audio needs.
               We're a small team of music lovers and sound specialists who are
               devoted to helping you get the most out of personal audio. Come
               and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="socials top">
               <FacebookIcon />
               <TwitterIcon />
               <InstagramIcon />
            </div>
         </div>
         <div className="container">
            <p>Copyright 2021. All Rights Reserved</p>
            <div className="socials bottom">
               <FacebookIcon />
               <TwitterIcon />
               <InstagramIcon />
            </div>
         </div>
      </footer>
   );
}
