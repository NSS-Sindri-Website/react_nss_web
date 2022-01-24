// import "./App.css";
// // -------------Importing components----------------
// import Carousel from "./Carousel";
// import Events from "./Events";
// import Navbar from "./Navbar";
// import Gallery from "./Gallery";
// //---------------------------------------------------

// function App() {
 
//   return (
//     <>
//        <Navbar />
//        <Carousel />
//        <h1 style ={{fontSize:"4rem",fontWeight:"bold",textAlign:"center"}}> Events </h1>
//        <br></br>
//        <Events />
//        <Gallery />
//       test('renders learn react link', () => {
//         render(<App />)}
//     </>
//   );
// }

import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {
  render(<App />);
   const linkElement = screen.getByText(/learn react/i);
   expect(linkElement).toBeInTheDocument();
});