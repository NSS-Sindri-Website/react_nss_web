import React from 'react'
import Events from "./Events";
import Gallery from './Gallery';
import Carousel from "./Carousel";




function Home() {
  return (
    <div className='fullcontainer'>
    <Carousel />
    
    <Events />
    <Gallery />
      
    </div>
  )
}

export default Home