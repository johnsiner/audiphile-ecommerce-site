import React, { Fragment, useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import cartIcon from '../assets/shared/desktop/icon-cart.svg';
import Nav from './Nav';

export default function Header() {
   const [navIsOpened, setNavIsOpened] = useState(false);

   const closeMenu = () => {
      setNavIsOpened(false);
   };

   return (
      <header>
         <div className="container">
            <div>
               <div className="menu-toggle">
                  <Hamburger
                     size={26}
                     toggled={navIsOpened}
                     toggle={setNavIsOpened}
                  />
               </div>
               <div className="logo">
                  <Link to="/">
                     <img src={logo} alt="logo" />
                  </Link>
               </div>
            </div>
            <nav>
               <NavLink to="/">HOME</NavLink>
               <NavLink to="/headphones">HEADPHONES</NavLink>
               <NavLink to="/speakers">SPEAKERS</NavLink>
               <NavLink to="/earphones">EARPHONES</NavLink>
            </nav>
            <div className="cart">
               <img src={cartIcon} alt="cart" />
            </div>
         </div>
         {navIsOpened && (
            <Fragment>
               <div className="menu">
                  <div>
                     <Nav onLinkClick={closeMenu} />
                  </div>
               </div>
               <div className="modal"></div>
            </Fragment>
         )}
      </header>
   );
}
