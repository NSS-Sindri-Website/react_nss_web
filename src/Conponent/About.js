import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function Miniabout() {
  return (
    <div className="miniabu">
      <div className="container">
        <div className=" inner">
          <div className=" super-inner">
            <h3> ABOUT US </h3>
            <p>
              The National Service Scheme (NSS) is a Central Sector Scheme of
              Government of India, Ministry of Youth Affairs & Sports. NSS B.I.T
              Sindri provides a diversified and integrated platform wherein
              students can engage in social activities apart from their
              academics. It intends to impart life skills, team spirit and
              social wellbeing in the students. It inculcates the idea of
              community development via collateral efforts of selfless
              volunteers.
              <br /> <br /> By Ministry of Education & Culture, Govt. of India
              in collaboration with State Government in 1969 within 37 selected
              Universities, NSS B.I.T Sindri was established in 2018 and got
              registered in 2020. Our Professor In-Charge is Dr. Raghunandan
              Sir. NSS BIT Sindri is still strengthening its roots in the campus
              and the district. <br /> <br />
              The National Service Scheme has been functioning with the motto
              “NOT ME BUT YOU” in view of making the youth inspired in service
              of the people and hence NSS Aims Education through Community
              Service and COMMUNITY SERVICE THROUGH EDUCATION. The vision is to
              build the youth with the mind and spirit to SERVE the society and
              work for the social uplift of the down-trodden masses of our
              nation as a movement.
              <Link as={Link} to="/AboutPage">
                <h4 className="rm"> Read More...</h4>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Miniabout;
