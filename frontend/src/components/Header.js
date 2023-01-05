import React, { Fragment, useState } from 'react';
import './Header.css';
import { Divide as Hamburger } from 'hamburger-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import Nav from './Nav';
import HeaderCartButton from './HeaderCartButton';

export default function Header() {
   const [navIsOpened, setNavIsOpened] = useState(false);

   const closeMenu = () => {
      setNavIsOpened(false);
   };

   const { pathname } = useLocation();

   return (
      <header className={pathname === '/' ? 'home' : ''}>
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
               <NavLink to="/category/headphones">HEADPHONES</NavLink>
               <NavLink to="/category/speakers">SPEAKERS</NavLink>
               <NavLink to="/category/earphones">EARPHONES</NavLink>
            </nav>
            <div>
               <HeaderCartButton />
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
