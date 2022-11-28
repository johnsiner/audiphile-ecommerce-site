import React from 'react';
import bestGearDesktop from '../assets/shared/desktop/image-best-gear.jpg';
import bestGearTablet from '../assets/shared/tablet/image-best-gear.jpg';
import bestGearMobile from '../assets/shared/mobile/image-best-gear.jpg';

export default function BestGear() {
   return (
      <div className="best-gear">
         <div className="container">
            <div className="info">
               <h2>
                  Bringing you the <span>best</span> audio gear
               </h2>
               <p>
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
               </p>
            </div>
            <div className="image">
               <img className="desktop" src={bestGearDesktop} alt="" />
               <img className="tablet" src={bestGearTablet} alt="" />
               <img className="mobile" src={bestGearMobile} alt="" />
            </div>
         </div>
      </div>
   );
}
