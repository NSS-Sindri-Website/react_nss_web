import React from "react";
import Home from "./Conponent/Homecompo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import M17 from "./Conponent/M17";
import M18 from "./Conponent/M18";
import M19 from "./Conponent/M19";
import M20 from "./Conponent/M20";
import E19 from "./Conponent/E19";
import E20 from "./Conponent/E20";
import E21 from "./Conponent/E21";
import E22 from "./Conponent/E22";
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
          <Route path="/M17" element={<M17 />} />
          <Route path="/M18" element={<M18 />} />
          <Route path="/M19" element={<M19 />} />
          <Route path="/M20" element={<M20 />} />
          <Route path="/E19" element={<E19 />} />
          <Route path="/E20" element={<E20 />} />
          <Route path="/E21" element={<E21 />} />
          <Route path="/E22" element={<E22 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routelinkas;
