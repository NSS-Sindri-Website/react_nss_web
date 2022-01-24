import React from "react";
import Home from "./Conponent/Homecompo";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import AboutPage from "./Conponent/AboutPage";
import Eventsdiscription from "./Conponent/Eventsdiscription";
import GalleryFullPage from "./GalleryFullPage";
import TermAndCondition from "./TermAndCondition";
import ContactUs from "./ContactUs";
import Navbar from "./Conponent/Navbar";

import Policy from "./Conponent/Policy";
import WebTechMembers from "./Conponent/WebTechMembers";
import Members from "./Conponent/Members";
import Footer from "./Conponent/Footer";

function Routelinkas() {
  return (
    <div>
      
        
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/Eventdiscription" element={<Eventsdiscription />} />
            <Route path="/GalleryFullPage" element={<GalleryFullPage />} />
            <Route path="/TermAndCondition" element={<TermAndCondition />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            
            <Route path="/Policy" element={<Policy />} />
            <Route path="/WebTechMembers" element={<WebTechMembers />} />
            <Route path="/Members" element={<Members />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      
    </div>
  );
}

export default Routelinkas;
