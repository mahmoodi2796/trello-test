import React from "react";
import logo from "../static/images/png/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-fix">
        <div className="header">
          <div className="icon-trello">
            <a href="/">
              <img className="img-trello" src={logo} alt="Logo" />{" "}
            </a>
          </div>
          <div className="header-right">
            <a href="/login" className="btn log-in">
              Login
            </a>

            <a href="/about" className="btn sign-up">
              sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
