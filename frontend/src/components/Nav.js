import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import headphone from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphone from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import arrowRight from '../assets/shared/desktop/icon-arrow-right.svg';

export default function Nav({ onLinkClick }) {
   return (
      <div className="Nav">
         <div>
            <div className="image">
               <img src={headphone} alt="" />
            </div>
            <div className="bottom">
               <h6>headphones</h6>
               <div className="nav-link">
                  <Link to="/headphones" onClick={onLinkClick}>
                     <p>shop</p>
                     <div>
                        <img src={arrowRight} alt="" />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <div>
            <div className="image">
               <img src={speaker} alt="" />
            </div>
            <div className="bottom">
               <h6>speakers</h6>
               <div className="nav-link">
                  <Link to="/speakers" onClick={onLinkClick}>
                     <p>shop</p>
                     <div>
                        <img src={arrowRight} alt="" />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <div>
            <div className="image">
               <img src={earphone} alt="" />
            </div>
            <div className="bottom">
               <h6>earphones</h6>
               <div className="nav-link">
                  <Link to="/earphones" onClick={onLinkClick}>
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
