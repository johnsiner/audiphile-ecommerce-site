import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';
import headphone from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphone from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrowRight from '../assets/shared/desktop/icon-arrow-right.svg';

export default function Nav({ onLinkClick }) {
   return (
      <div className={classes.Nav}>
         <div>
            <div className={classes.image}>
               <img src={headphone} alt="" />
            </div>
            <div className={classes.bottom}>
               <h6>headphones</h6>
               <div className={classes['nav-link']}>
                  <Link to="/category/headphones" onClick={onLinkClick}>
                     <p>shop</p>
                     <div>
                        <img src={arrowRight} alt="" />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <div>
            <div className={classes.image}>
               <img src={speaker} alt="" />
            </div>
            <div className={classes.bottom}>
               <h6>speakers</h6>
               <div className={classes['nav-link']}>
                  <Link to="/category/speakers" onClick={onLinkClick}>
                     <p>shop</p>
                     <div>
                        <img src={arrowRight} alt="" />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <div>
            <div className={classes.image}>
               <img src={earphone} alt="" />
            </div>
            <div className={classes.bottom}>
               <h6>earphones</h6>
               <div className={classes['nav-link']}>
                  <Link to="/category/earphones" onClick={onLinkClick}>
                     <p>shop</p>
                     <div>
                        <img src={arrowRight} alt="" />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
