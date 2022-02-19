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
              Initially, reverse the individual words of the given string one by
              one, for the above example, after reversing individual words the
              string should be “i ekil siht margorp yrev hcum”. Initially,
              reverse the individual words of the given string one by one, for
              the above example, after reversing individual words the string
              should be “i ekil siht margorp yrev hcum”.
              <Link as={Link} to="/AboutPage">
                {" "}
                Read More...
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Miniabout;
