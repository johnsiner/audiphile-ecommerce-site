import './App.css';
import logo from './assets/shared/desktop/logo.svg';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FacebookIcon from './assets/shared/desktop/icon-facebook';
import TwitterIcon from './assets/shared/desktop/icon-twitter';
import InstagramIcon from './assets/shared/desktop/icon-instagram';
import Header from './components/Header';
import BestGear from './components/BestGear';

function App() {
   console.log('page rendered');

   return (
      <div className="App">
         <Header />
         <main>
            <Routes>
               <Route path="/" element={<Home />}></Route>
            </Routes>
         </main>
         <BestGear />
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
                  <NavLink to="/headphones">HEADPHONES</NavLink>
                  <NavLink to="/speakers">SPEAKERS</NavLink>
                  <NavLink to="/earphones">EARPHONES</NavLink>
               </nav>
            </div>
            <div className="container">
               <p>
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We're a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Come and visit our demo facility - we’re open 7 days a week.
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
      </div>
   );
}

export default App;
