import React from "react";
import "./Btnpricing.css";
import footertrello from "../static/images/png/footer-trelli-pricing-page.png";

export default function Footerpricing() {
  return (
    <>
      <div className="footer-down-pricing-page">
        <div className="container-3">
          <div className="footer-down">
            <select name="contry" id="contry-2">
              <option value="volvo">english</option>
              <option value="saab">germany</option>
              <option value="mercedes">mexico</option>
              <option value="audi">amrican</option>
            </select>
            <div className="obj-1-footer-down">Cookie Settings</div>
            <div className="obj-2-footer-down">Privacy Policy</div>
            <div className="obj-3-footer-down">Terms</div>
            <div className="obj-4-footer-down">Copyright © 2021 Atlassian</div>
            <img className="cyberspace" src={footertrello} />
          </div>
        </div>
      </div>
    </>
  );
}
