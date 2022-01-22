import "./App.css";
// -------------Importing components----------------

// import Events from "./conponent/Events";
import Navbar from "./Conponent/Navbar";
// import Gallery from "./conponent/Gallery";
import Gallery from "./Conponent/Gallery";
import Home from "./Conponent/Home";
import Events_Separate from "./Conponent/Events_Separate";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//---------------------------------------------------

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <nav className="navbar sticky-top navbar-expand-sm" style={{borderRight:"0px"}}>
      <div className="container-fluid" style={{marginRight:"0px"}}>
        <a as={Link} to="/" className="navbar-brand">
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
        </a>
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
              <a as={Link} to="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/Events" className="nav-link">
                Events
              </a>
            </li>
            <li>
              <a as={Link} to="/Gallery" className="nav-link">
                Gallery
              </a>
            </li>
            <li>
              <a as={Link} to="/About" className="nav-link">
                About US
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>




      <div className="container">
      <Routes>
          <Route path="/Events_Separate" element={<Events_Separate />} />
          <Route path="/Gallery" element={<Gallery/>} />
          
          <Route  path="/" element={<Home/>}/>

        </Routes>
      </div>
     
      <h1 style ={{fontSize:"4rem",fontWeight:"bold",textAlign:"center"}}> Events </h1>
      <br></br>
      
      </BrowserRouter>
    </>
  );
}

export default App;
