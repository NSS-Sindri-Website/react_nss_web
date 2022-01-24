import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return <div>
  
  
  
  <div className="full">
        <div className="cover">
          <div className="row text-center">
            <div className="col-sm">
              <ul>
                <li>
                  <h4 className='mar'>Components</h4>
                </li>
                <li>
                  <Link className='linkcolor' as={Link} to="/" >Home</Link>
                </li>

                <li>
                  <Link className='linkcolor' as={Link} to="/AboutPage" >About</Link>
                </li>
                <li>
                  <Link className='linkcolor' as={Link} to="/Eventsdiscription" >Events</Link>
                </li>
                
              </ul>
            </div>
            <div class="col-sm">
              <ul>
                <li>
                  <h4 className='mar'>Components</h4>
                </li>
                <li>
                  <Link className='linkcolor' as={Link} to="/GalleryFullPage" >Gallery</Link>
                </li>

                <li>
                  <Link className='linkcolor' as={Link} to="/ContactUs" >contact Us</Link>
                </li>
                <li>
                  <Link className='linkcolor' as={Link} to="/Members" >Members</Link>
                </li>
                
              </ul>
            </div>
            <div class="col-sm">
              <ul>
                <li>
                  <h4 className='mar'>Components</h4>
                </li>
                <li>
                  <Link className='linkcolor' as={Link} to="/TermAndCondition" >Term and condition</Link>
                </li>

                <li>
                  <Link className='linkcolor' as={Link} to="/Policy" >Pravecy Policy</Link>
                </li>
                <li>
                  <Link className='linkcolor' as={Link} to="/WebTechMembers" >Web Tech Members</Link>
                </li>
                
              </ul>
            </div>
          </div>
          <br/>
          <br/>
          
          <br></br>
          <div className="sizeofdiv text-center">
            <div className="sizeofdiv row text-center">
              <div className="col">
                <a className='linkcolor' href="https://www.instagram.com/nss_bitsindri/?hl=en">
                  <div className="colcircle">
                    {/* <img src="spect.JPG"></img> */}
                  </div>
                </a>
              </div>

              <div className="col">
                <a className='linkcolor' href="https://www.instagram.com/nss_bitsindri/?hl=en">
                  <div className="colcircle ">
                    {/* <img src="spect.JPG"></img> */}
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://www.instagram.com/nss_bitsindri/?hl=en">
                  <div className="colcircle">
                    {/* <img src="spect.JPG"></img> */}
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="https://www.instagram.com/nss_bitsindri/?hl=en">
                  <div className="colcircle">
                    {/* <img src="spect.JPG"></img> */}
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">@copyright</div>
        </div>
      </div>
      
      
      
      </div>;
}

export default Footer;
