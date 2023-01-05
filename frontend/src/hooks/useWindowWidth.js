import { useEffect, useState } from 'react';

export default function useWindowWidth() {
   const mobileCheck = matchMedia('(max-width: 480px)');
   const tabletCheck = matchMedia('(max-width: 800px)');

   const [mobile, setMobile] = useState(mobileCheck.matches);
   const [tablet, setTablet] = useState(tabletCheck.matches);

   useEffect(() => {
      function mobileState() {
         setMobile(mobileCheck.matches);
      }
      function tabState() {
         setTablet(tabletCheck.matches);
      }
      mobileCheck.addEventListener('change', mobileState);
      tabletCheck.addEventListener('change', tabState);
      return () => {
         mobileCheck.removeEventListener('change', mobileState);
         tabletCheck.removeEventListener('change', tabState);
      };
   }, [mobileCheck, tabletCheck]);

   return { mobile, tablet };
}
