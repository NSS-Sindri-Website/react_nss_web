
import React from 'react';
import { Link } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";

function Navbar() {
  return <div>
    
    <nav className="navbar sticky-top navbar-expand-sm" style={{borderRight:"0px"}}>
       <div className="container-fluid" style={{marginRight:"0px"}}>
         <Link as={Link} to="/" className="navbar-brand">
           <img
             className="navBit"
             src="images/bitLogo.png"
             alt="logo"
             width="33"
             height="40"
             srcSet=""
           />
           <img
             className="navNss"
             src="images/nssLogo.png"
             alt="logo"
             width="38"
             height="38"
             srcSet=""
           />
           NSS BIT SINDRI
         </Link>
         <button
           className="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#toggleMobileMenu"
           aria-controls="toggleMobileMenu"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="toggleMobileMenu">
           <ul className="navbar-nav text-center ms-auto">
             <li>
               <Link as={Link} to="/" className="nav-link">
                 Home
               </Link>
             </li>
             <li>
               <Link as={Link} to="/Eventdiscription" className="nav-link">
                 Events
               </Link>
             </li>
             <li>
               <Link as={Link} to="/GalleryFullPage"  className="nav-link">
                 Gallery
               </Link>
             </li>
             <li>
               <Link as={Link} to="/About"  className="nav-link">
                 About US
               </Link>
             </li>
             <li>
               <Link as={Link} to="/ContactUs" className="nav-link">
                 Contact Us
               </Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>

   

  </div>;
}

export default Navbar;















