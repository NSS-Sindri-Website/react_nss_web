import React, { useState } from "react";
// import GoogleMapReact from "google-map-react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./ContactUs.css";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
import {
  FaPhoneAlt,

} from "react-icons/fa";
import { Email, MapsHomeWorkTwoTone } from "@mui/icons-material";



const ContactUs = () => {
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    message: "",

  });

  let name, value;
  const getuserdata = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, number, email, message } = user;
    if (name && number && email && message) {

      const res = await fetch("https://nss-bit-sindri-default-rtdb.asia-southeast1.firebasedatabase.app/contactus.json", {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },

        body: JSON.stringify({
          name,
          number,
          email,
          message,

        })
      }
      );
      if (res) {

        setUser({
          name: "",
          number: "",
          email: "",
          message: "",

        }
        );

      }
      
      const thankYouMessage = document.querySelector('#thank-you-message');
 thankYouMessage.classList.add('show');

                              // Hide alert

                            setTimeout(function () {
                                document.querySelector('#thank-you-message').style.display = 'none';
                                
                            }, 12000);

    } else {
      alert("Please fill all Details");

    }




                            
                            
                           
                           



  };
  return (

    <>
      <div className="full">
        <div className="body1">
          <div className="container1">
            <div className="content">
              <div className="left-side">
                <div className="address details">
                  {/* <i className="fas fa-map-marker-alt"></i> */}
                  <MapsHomeWorkTwoTone size="4rem" color="red" />
<a href="https://www.google.com/maps/place/MF3F%2BH7Q+IT+building,+BIT,+Sindri,+Jharkhand+828123/@24.2737683,87.2518813,15z/data=!3m1!4b1!4m6!3m5!1s0x39f696e9be876ca9:0x62214906b388dcd7!7e2!8m2!3d23.6539553!4d86.4732361">
                  <div className="topic">Address</div>
                  <div className="text-one">BIT Sindri</div>
                  <div className="text-two">Dhanbad</div>
                  <div className="text-two">828321</div>
                  </a>
                </div>
                <div className="phone details">
                  {/* <i className="fas fa-phone-alt"></i> */}
                  {/* <FontAwesomeIcon icon="fas fa-phone-alt" />
                 */}
                  <FaPhoneAlt size="2rem" color="green" />
                  <div className="topic">Phone</div>
                  <div className="text-one"><a href="tel:+919470183356">+919470183356</a> </div>
                  <div className="text-two"><a href="tel:+916200481188">+916200481188</a> </div>

                </div>
                <div className="email details">
                  {/* <i className="fas fa-envelope"></i> */}
                  <Email size="3rem" color="red" />
                  <div className="topic">Email</div>
                  <div className="text-one"><a href="mailto:nssbitsindri@gmail.com">nssbitsindri@gmail.com</a></div>

                </div>
              </div>
              <div className="right-side">
                <div className="topic-text text-center pb-5">Send us a message</div>
                <p className="ml-5 pp">If you have any work from us or any types of quries related to NSS-BIT Sindri, you can send us message from here. It's our pleasure to help you.</p>
                <form method="POST">
                  <div className="input-box">
                    <input type="text" name="name" placeholder="Enter your name"
                      value={user.name}
                      onChange={getuserdata}
                      required />
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder="Enter your number" name="number"
                      value={user.number}
                      onChange={getuserdata}
                      required />
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder="Enter your email"
                      name="email"
                      value={user.email}
                      onChange={getuserdata}
                      required />
                  </div>
                  <div className="input-box message-box">
                    <input type="textarea" placeholder="Any Message ?"
                      name="message"
                      value={user.message}
                      onChange={getuserdata} 
                      required/>


                  </div>
                  <div className="button">
                    <button type="button" onClick={postData} value="" className="button">SEND NOW</button>
                  </div>
<div>
<p id="thank-you-message">Your Message Has Been Sent Succesfully. </p>
</div>

                </form>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ContactUs;
