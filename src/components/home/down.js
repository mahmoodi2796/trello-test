import React from "react";
import appstore from "../static/images/png/app.png";
import googleplay from "../static/images/png/googleplay.png";
import trello from "../static/images/png/trello.png";
import atlass from "../static/images/png/atl.png";
import Cyberspace from "../static/images/png/not.png";
import "./Down.css";

export default function container() {
  return (
    <>
      <div className="container-2">
        <div className="app-trello">
          <p className="text-app-trello">
            Trello also works great on your smaller screen.
          </p>
          <div className="img-app-trello">
            <a href="https://apps.apple.com/app/trello-organize-anything/id461504587">
              <img className="appstore" src={appstore} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.trello">
              <img className="googleplay" src={googleplay} />
            </a>
          </div>
        </div>

        <hr />
        <div className="footer">
          <div className="footer-top">
            <img className="trello" src={trello} />
            <table>
              <tr>
                <th className="columm-1 row">
                  <a>GET STARTED</a>
                </th>
                <th className="columm-2 row">
                  <a>MUST-HAVES</a>
                </th>
                <th className="columm-3 row">
                  <a>LEVEL UP</a>
                </th>
                <th className="columm-4 row">
                  <a>COMPANY</a>
                </th>
                <th className="columm-5 row">
                  <a>RESOURCES</a>
                </th>
              </tr>
              <tr>
                <td className="columm-1 row">
                  <a>Guide</a>
                </td>
                <td className="columm-2 row">
                  <a>Apps</a>
                </td>
                <td className="columm-3 row">
                  <a>Pricing</a>
                </td>
                <td className="columm-4 row">
                  <a>About</a>
                </td>
                <td className="columm-5 row">
                  <a>Blog</a>
                </td>
              </tr>
              <tr>
                <td className="columm-1 row">
                  <a>Templates</a>
                </td>
                <td className="columm-2 row">
                  <a>Automation</a>
                </td>
                <td className="columm-3 row">
                  <a>Standard</a>
                </td>
                <td className="columm-4 row">
                  <a>Jobs</a>
                </td>
                <td className="columm-5 row">
                  <a>Developers</a>
                </td>
              </tr>
              <tr>
                <td className="columm-1 row">
                  <a>Team Solutions</a>
                </td>
                <td className="columm-2 row">
                  <a>Integrations</a>
                </td>
                <td className="columm-3 row">
                  <a>Premium</a>
                </td>
                <td className="columm-4 row">
                  <a>Legal</a>
                </td>
                <td className="columm-5 row">
                  <a>Help</a>
                </td>
              </tr>
              <tr>
                <td className="columm-1 row">
                  <a>Webinars</a>
                </td>
                <td className="columm-2 row">
                  <a>Power-Ups</a>
                </td>
                <td className="columm-3 row">
                  <a>Enterprise</a>
                </td>
              </tr>
              <tr>
                <td className="columm-1 row">
                  <a>Log In</a>
                </td>
                <td className="columm-2 row">
                  <a>Views</a>
                </td>
              </tr>
            </table>
            <div className="none">
              <div className="text-level">
                LEVEL UP COMPANY Pricing Jobs Team Solutions Legal Help Webinars
                Enterprise Log InViews
              </div>
              <div className="justify">
                <img className="atlass" src={atlass} />
              </div>
            </div>
          </div>

          <div className="footer-down">
            <select name="contry" id="contry">
              <option value="volvo">english</option>
              <option value="saab">germany</option>
              <option value="mercedes">mexico</option>
              <option value="audi">amrican</option>
            </select>
            <div className="obj-1-footer-down">Cookie Settings</div>
            <div className="obj-2-footer-down">Privacy Policy</div>
            <div className="obj-3-footer-down">Terms</div>
            <div className="obj-4-footer-down">Copyright © 2021 Atlassian</div>
            <img className="cyberspace" src={Cyberspace} />
          </div>
        </div>
      </div>
    </>
  );
}
