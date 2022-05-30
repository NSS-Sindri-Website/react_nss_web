import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./ContactUs.css";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
import {
  FaPhoneAlt,
  
} from "react-icons/fa";
import {  Email, MapsHomeWorkTwoTone } from "@mui/icons-material";

class ContactUs extends Component {
  render() {
    return (
      <>
      <div className="full">
        <div className="body1">
        <div className="container1">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                {/* <i className="fas fa-map-marker-alt"></i> */}
                <MapsHomeWorkTwoTone size="4rem" color="black"/>
                
                <div className="topic">Address</div>
                <div className="text-one">BIT Sindri</div>
                <div className="text-two">Dhanbad</div>
                <div className="text-two">828321</div>
              </div>
              <div className="phone details">
                {/* <i className="fas fa-phone-alt"></i> */}
                {/* <FontAwesomeIcon icon="fas fa-phone-alt" />
                 */}
                 <FaPhoneAlt size="2rem" color="black" />
                <div className="topic">Phone</div>
                <div className="text-one">+91 9470183356</div>
                <div className="text-two">+91 6207020844</div>
              </div>
              <div className="email details">
                {/* <i className="fas fa-envelope"></i> */}
                <Email size="3rem" color="black" />
                <div className="topic">Email</div>
                <div className="text-one">nssbitsindri@gmail.com</div>
                
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text text-center pb-5">Send us a message</div>
              <p className="ml-5">If you have any work from me or any types of quries related to NSS-BIT Sindri, you can send me message from here. It's my pleasure to help you.</p>
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-box message-box">
                <input type="textarea" placeholder="Any Message ?" />


                </div>
                <div className="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
      </>

    );
  }
}

export default ContactUs;
