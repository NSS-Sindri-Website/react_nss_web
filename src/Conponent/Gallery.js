
import React from 'react';
import "./Gallery.css";
import { Link } from 'react-router-dom';

function Gallery() {
  return <div>
     <section id="cta" class="cta">
       <div class="container" data-aos="zoom-in">

         <div class="text-center">
           <h3>wants to know more about SME?</h3>
           <p>visit SME's official website.</p>
           <Link class="cta-btn" as={Link} to="/GalleryFullPage" target="_blank" rel="noopener noreferrer">See More</Link>
         </div>

       </div>
     </section>
  </div>;
}

export default Gallery;

