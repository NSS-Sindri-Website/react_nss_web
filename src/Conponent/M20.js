import React from "react";
// import "./Members.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./M19.css";
// import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
const M20 = () => {
  return (
    <div>
      <h1 className="h1">Meet Our Team</h1>
      <br />
      <br />
      <h1 className="h1" id="m3">
        2K20
      </h1>
      <br />
      <br />

      <div id="" class="team">
        <div class="container">
          {/* <div class="section-title">
            <h2>Team</h2>
            <h3>
              Our <span>Office-Bearers</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div> */}
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/VIVEKKUMAR.jpg"
                    class="img-fluid team_img more_pad"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Vivek Kumar</h4>
                  <span>President</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Sneha.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Sneha Kumari</h4>
                  <span>Vice President</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Adarsh.jpg"
                    class="img-fluid team_img"
                    alt="" 
                  />
                </div>
                <div class="member-info">
                  <h4>Adarsh Kumar</h4>
                  <span>Vice President</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Pranshu .jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Priyanshu Keshri</h4>
                  <span>Secretary</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/GaYetri .jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Gayetri Murmu</h4>
                  <span>Joint Secretary</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/ankit Kashyap.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Ankit Kashyap</h4>
                  <span>Treasurer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Gauravswansi.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Gaurav Swansi</h4>
                  <span>Joint Treasurer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/ak.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Ankit Khalkho</h4>
                  <span>Technical Head</span>
                </div>
              </div>
            </div>

            <br />
            <br />
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img ">
                  <img
                    src="images/2K20/DanishHussain.jpg"
                    class="img-fluid team_img more_pad1"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Danish</h4>
                  <span>Technical Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Shubham.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Shubham Baranwal</h4>
                  <span>Technical Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Om.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Om Prakash</h4>
                  <span>Meeting Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Manishakumari.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Manisha Sharma</h4>
                  <span>Meeting Head</span>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Ankit Sharma.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Ankit Sharma</h4>
                  <span>Meeting Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Saumodeep.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Saumodeep Banarjee</h4>
                  <span>Media Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/shiv1.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Shiv Prasad Saw</h4>
                  <span>Media Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/rahul kumar.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Rahul Kumar</h4>
                  <span>Media Head</span>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Ashmi.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Ashmi Singh</h4>
                  <span>Program Coordinator</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Mukund.jpg"
                    class="img-fluid team_img "
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Mukund Parashar</h4>
                  <span>Program Coordinator</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Akshat.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Akshat Ashish</h4>
                  <span>Program Coordinator</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Medha Singh.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Medha Singh</h4>
                  <span>PRO</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/AbhishekKumarShukla_.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Abhishek Shukla</h4>
                  <span>PRO</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Tejaswi.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Tejaswi Pandey</h4>
                  <span>PRO</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/pratyush_kumar.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Pratyush</h4>
                  <span>Alumini Incharge</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Abhishek Kumar.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Abhishek Kumar</h4>
                  <span>Alumini Incharge</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Manish.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Manish Kumar</h4>
                  <span>Alumini Incharge</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/sammi.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Sammi Roy</h4>
                  <span>Inventory Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Abhishek Choudhary.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Abhishek Choudhary</h4>
                  <span>Inventory Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/NikitaKumari.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Nikita Kumari</h4>
                  <span>Planning and Executive Head</span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/AnupriyaKumari.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Anupriya Kumari</h4>
                  <span>Planning and Executive Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Abhishekkumar.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Abhishek Kumar</h4>
                  <span>Survey Head</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/sumit.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Sumit Pradhan</h4>
                  <span>Survey Head</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Yasin.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Khushdil Yasin</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/pc.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Priyanka Sharma</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Jaideo Vishwakarma.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Jaideo Vishwakarma</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/av.jpg"
                    class="img-fluid team_img "
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Sushanto Shekhar</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/GorellaKumar.jpg"
                    class="img-fluid team_img more_pad"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Gorella</h4>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/DivyaKachhap.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Divya Kashyap</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Dipeshjaiswal_.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Dipesh Kumar</h4>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Aditya Kumar.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Aditya Kumar</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Vivek.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Vivek Kumar Pandey</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/avinash.jpg"
                    class="img-fluid team_img more_pad"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Avinash Kumar</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/PoojaKumari.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Pooja Kumari</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/av.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Sumaiya Abul</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/anurag.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Anurag Soni</h4>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="member-img">
                  <img
                    src="images/2K20/Suraj.jpg"
                    class="img-fluid team_img"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Suraj Kumar Paswan</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default M20;
