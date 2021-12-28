import React from "react";
import ebay from "../static/images/svg/ebay.svg";
import sproutsocial from "../static/images/svg/sprout-social.svg";
import "./Maindown.css";

export default function Maindown() {
  return (
    <>
      <div className="main-down">
        <div className="section-lighte-blue">
          <img className="image-ebay" src={ebay} />
          <h2 className="text-section-lighte-blue">
            Now that we've switched to a remote <br className="br-7" />{" "}
            environment, with the use of Trello, we can now
            <br className="br-7" /> limit the number of meetings we have
            regarding
            <br className="br-7" /> specific projects and turn to Trello for
            updates
            <br className="br-7" /> instead.
          </h2>
          <div className="footer-section-lighte-blue">
            <div className="footer-section-lighte-blue-left">
              halley ennes-hr manager,sprout social
              <br />
              industry Marketing
            </div>
            <div className="footer-section-lighte-blue-right">
              <img className="sproutsocial" src={sproutsocial} />
            </div>
          </div>
        </div>

        <div className="cont-cart-sign">
          <div className="cont-cart-sign-blue">
            <h3 className="text-cart-sign-blue">
              Sign up and get started with Trello today. A world of productive
              teamwork awaits!
            </h3>
            <div className="cont-input-sign-blue">
              <input
                className="input-sign-blue"
                type="email"
                placeholder="Email"
              />
              <a href="/about">
                {" "}
                <button className="button-sign-blue">sign up</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
