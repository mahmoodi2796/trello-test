import React from "react";
import hero from "../static/images/png/hero.png";
import board from "../static/images/png/board.png";
import Google from "./Google.js";
import Squarespace from "./Squarespace.js";
import Costco from "./Costco.js";
import Fender_Logo from "./Fender_Logo";
import cardback from "../static/images/svg/cardback.svg";
import automation from "../static/images/webp/automation.webp";
import powerups from "../static/images/webp/power-ups.webp";
import tag from "../static/images/svg/tag.svg";
import compass from "../static/images/svg/compass.svg";
import "./Main.css";

export default function Main() {
  function MouseOver(event) {
    event.target.style.background = "rgba(76, 154, 255, 0.1)";
  }
  function MouseOver() {
    document.getElementById("h-6").style.margin = "0px 0px 0px 10px";
  }
  function MouseOut(event) {
    event.target.style.background = "";
    document.getElementById("h-6").style.margin = "0px";
  }
  return (
    <>
      <div className="container">
        <div className="container-main">
          <div className="main">
            <div className="main-left">
              <div className="Important-text">
                Trello helps teams
                <br className="br-2" /> move work <br className="br-1" />{" "}
                forward.
              </div>
              <div className="dis-trello">
                Collaborate, manage projects, and reach new productivity peaks.{" "}
                <br /> From high rises to the home office, the way your team
                works is <br /> unique—accomplish it all with Trello.
              </div>
              <div className="div-input">
                <input
                  className="input-email"
                  placeholder="Email"
                  type="email"
                />
                <a href="/about" className="button-sign">
                  sign up-it,s free!
                </a>
              </div>
            </div>
            <div className="main-right">
              <div className="icon-trello">
                {" "}
                <img className="img-hero" src={hero} alt="Logo" />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="mark-down">
          <h2>It’s more than work. It’s a way of working together.</h2>
          <p className="mark-down-first">
            Start with a Trello board, lists, and cards. Customize and expand
            with more features as your teamwork grows. <br className="br-3" />{" "}
            Manage projects, organize tasks, and build team spirit—all in one
            place.
          </p>
        </div>
        <div className="flex">
          <a href="/about">
            <button
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
              className="btn-start"
            >
              start doing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="h-6"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </a>
        </div>
        <div className="cont-down-image">
          <div className="flex">
            {<img className="img-board" width="960px" src={board} />}
          </div>

          <p className="text-join">
            Join over 1,000,000 teams worldwide that are using Trello to get
            more done.
          </p>
        </div>

        <div className="cont-icons">
          <Google />
          <Squarespace />
          <Costco />
          <Fender_Logo />
        </div>
        <div className="flex-left">
          <div className="cont-main-1">
            <h2>
              Features to help your team <br className="br-7" /> succeed
            </h2>
            <p className="text-features">
              Powering a productive team means using a powerful <br /> tool (and
              plenty of snacks). From meetings and projects <br /> to events and
              goal setting, Trello’s intuitive features give <br /> any team the
              ability to quickly set up and customize <br /> workflows for just
              about anything.
            </p>
          </div>
        </div>

        <div className="container-cont-main-2">
          <div className="cont-main-2">
            <svg id="svg" viewBox="0 0 414.57 312.57">
              <linearGradient
                id="a"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="337.15"
                x2="337.15"
                y1="150.68"
                y2="166.78"
              >
                <stop offset="0" stop-color="#b7acf0" />
                <stop offset="1" stop-color="#d9e7ff" />
              </linearGradient>
              <linearGradient
                id="b"
                gradientTransform="matrix(.16 .99 .99 -.16 38.45 -89.16)"
                gradientUnits="userSpaceOnUse"
                x1="283.54"
                x2="274.29"
                y1="206.5"
                y2="190.41"
              >
                <stop offset="0" stop-color="#fcde73" />
                <stop offset="1" stop-color="#e54aab" />
              </linearGradient>
              <linearGradient
                id="c"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                x1="375"
                x2="365.74"
                xlinkHref="#b"
                y1="114.41"
                y2="98.32"
              />
              <linearGradient
                id="d"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="364.48"
                x2="348.38"
                y1="158.44"
                y2="158.44"
              >
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#dadce1" />
              </linearGradient>
              <linearGradient
                id="e"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="231.51"
                x2="222.25"
                y1="112.76"
                y2="96.66"
              >
                <stop offset="0" stop-color="#e54aab" />
                <stop offset="1" stop-color="#493ba0" />
              </linearGradient>
              <linearGradient
                id="f"
                x1="216.9"
                x2="200.81"
                xlinkHref="#d"
                y1="104.51"
                y2="104.51"
              />
              <linearGradient
                id="g"
                x1="395.48"
                x2="379.38"
                xlinkHref="#d"
                y1="238.79"
                y2="238.79"
              />
              <linearGradient
                id="h"
                gradientUnits="userSpaceOnUse"
                x1="156.47"
                x2="156.47"
                y1="-2.52"
                y2="51.53"
              >
                <stop offset="0" stop-color="#3d358e" />
                <stop offset=".16" stop-color="#3f3b94" />
                <stop offset=".38" stop-color="#444ba5" />
                <stop offset=".63" stop-color="#4d66c2" />
                <stop offset=".91" stop-color="#5a8ce9" />
                <stop offset="1" stop-color="#5e99f7" />
              </linearGradient>
              <linearGradient
                id="i"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="188.57"
                x2="188.57"
                y1="266.73"
                y2="40.53"
              >
                <stop offset="0" stop-color="#e2faff" />
                <stop offset=".2" stop-color="#e2faff" stop-opacity=".99" />
                <stop offset=".34" stop-color="#e3faff" stop-opacity=".95" />
                <stop offset=".45" stop-color="#e5fbff" stop-opacity=".9" />
                <stop offset=".56" stop-color="#e7fbff" stop-opacity=".81" />
                <stop offset=".65" stop-color="#ebfbff" stop-opacity=".7" />
                <stop offset=".74" stop-color="#eefcff" stop-opacity=".57" />
                <stop offset=".83" stop-color="#f3fdff" stop-opacity=".41" />
                <stop offset=".91" stop-color="#f8feff" stop-opacity=".23" />
                <stop offset=".99" stop-color="#feffff" stop-opacity=".03" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="j"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="198.69"
                x2="198.69"
                y1="266.05"
                y2="39.98"
              >
                <stop offset=".55" stop-color="#aaf2ff" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="k"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="95.11"
                x2="95.11"
                y1="266.05"
                y2="39.96"
              >
                <stop offset="0" stop-color="#498eff" />
                <stop offset="1" stop-color="#fff" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="l"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="368.19"
                x2="192.83"
                y1="162.96"
                y2="162.96"
              >
                <stop offset="0" stop-color="#6157b9" />
                <stop offset="1" stop-color="#eba0d7" />
              </linearGradient>
              <mask
                id="m"
                height="16.09"
                maskUnits="userSpaceOnUse"
                width="16.09"
                x="329.11"
                y="185.76"
              >
                <circle cx="337.15" cy="193.8" fill="url(#a)" r="8.05" />
              </mask>
              <linearGradient
                id="n"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="66.28"
                x2="237.36"
                y1="108.74"
                y2="108.74"
              >
                <stop offset="0" stop-color="#e54aab" />
                <stop offset="1" stop-color="#fcde73" />
              </linearGradient>
              <linearGradient
                id="o"
                gradientUnits="userSpaceOnUse"
                x1="257.44"
                x2="11.19"
                y1="150.7"
                y2="150.7"
              >
                <stop offset="0" stop-color="#f3c8e8" />
                <stop offset="1" stop-color="#bdb6ed" />
              </linearGradient>
              <mask
                id="p"
                height="16.09"
                maskUnits="userSpaceOnUse"
                width="16.09"
                x="270.75"
                y="146.23"
              >
                <circle
                  cx="278.8"
                  cy="154.28"
                  fill="url(#b)"
                  r="8.05"
                  transform="matrix(.16022575 -.9870804 .9870804 .16022575 81.85 404.77)"
                />
              </mask>
              <linearGradient
                id="q"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="336.26"
                x2="331.34"
                y1="261.08"
                y2="222.87"
              >
                <stop offset="0" stop-color="#fff8e1" />
                <stop offset="1" stop-color="#f492d6" />
              </linearGradient>
              <linearGradient
                id="r"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="319.11"
                x2="314.19"
                y1="128.55"
                y2="90.33"
              >
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#e6e1ff" />
              </linearGradient>
              <mask
                id="s"
                height="16.09"
                maskUnits="userSpaceOnUse"
                width="16.09"
                x="362.2"
                y="238.32"
              >
                <circle cx="370.25" cy="246.37" fill="url(#c)" r="8.05" />
              </mask>
              <mask
                id="t"
                height="16.09"
                maskUnits="userSpaceOnUse"
                width="16.09"
                x="348.38"
                y="186.05"
              >
                <circle cx="356.43" cy="194.1" fill="url(#d)" r="8.05" />
              </mask>
              <mask
                id="u"
                height="16.09"
                maskUnits="userSpaceOnUse"
                width="16.09"
                x="218.72"
                y="239.98"
              >
                <circle cx="226.77" cy="248.02" fill="url(#e)" r="8.05" />
              </mask>
              <linearGradient
                id="v"
                gradientTransform="matrix(1 0 0 -1 0 352.53)"
                gradientUnits="userSpaceOnUse"
                x1="226.77"
                x2="226.77"
                y1="96.46"
                y2="112.56"
              >
                <stop offset="0" stop-color="#b7acf0" />
                <stop offset="1" stop-color="#f9bee8" />
              </linearGradient>
              <mask
                id="w"
                height="16.09"
                maskUnits="userSpaceOnUse"
                width="16.09"
                x="200.81"
                y="239.98"
              >
                <circle cx="208.85" cy="248.02" fill="url(#f)" r="8.05" />
              </mask>
              <mask
                id="x"
                height="16.09"
                maskUnits="userSpaceOnUse"
                width="16.09"
                x="379.38"
                y="105.69"
              >
                <circle cx="387.43" cy="113.74" fill="url(#g)" r="8.05" />
              </mask>
              <path
                d="m51 3a3.53 3.53 0 0 1 3.53 3.53v39.79a3.53 3.53 0 0 1 -3.53 3.52h-39.82a3.53 3.53 0 0 1 -3.53-3.52v-39.79a3.53 3.53 0 0 1 3.53-3.53zm0-3h-39.82a6.53 6.53 0 0 0 -6.53 6.53v39.79a6.52 6.52 0 0 0 6.53 6.52h39.82a6.52 6.52 0 0 0 6.53-6.52v-39.79a6.53 6.53 0 0 0 -6.53-6.53z"
                fill="#79e2f2"
              />
              <path
                d="m22 20.08v8.68a2.17 2.17 0 0 0 2.17 2.17h2.17a2.17 2.17 0 0 0 2.17-2.17v-8.68a2.17 2.17 0 0 0 -2.17-2.17h-2.22a2.17 2.17 0 0 0 -2.12 2.17zm2.17 0v8.68h2.17v-8.68z"
                fill="#79e2f2"
                fill-rule="evenodd"
              />
              <path
                d="m29.54 20.08v6.51a2.17 2.17 0 0 0 2.17 2.17h2.17a2.17 2.17 0 0 0 2.17-2.17v-6.51a2.17 2.17 0 0 0 -2.17-2.17h-2.17a2.17 2.17 0 0 0 -2.17 2.17zm2.17 0v6.51h2.17v-6.51z"
                fill="#79e2f2"
                fill-rule="evenodd"
              />
              <path
                d="m37.14 30.93v-10.85a2.17 2.17 0 0 1 2.17-2.17h2.17a2.17 2.17 0 0 1 2.17 2.17v10.85a2.17 2.17 0 0 1 -2.17 2.17h-2.17a2.17 2.17 0 0 1 -2.17-2.17zm2.17 0v-10.85h2.17v10.85z"
                fill="#79e2f2"
                fill-rule="evenodd"
              />
              <rect
                fill="url(#h)"
                height="52.84"
                rx="6.53"
                width="52.84"
                x="130.04"
              />
              <path
                d="m157.88 19.68a1 1 0 1 0 -1.94 0v5.82a1 1 0 0 0 .29.68l2.42 2.43a1 1 0 0 0 1.35-1.37l-2.14-2.14z"
                fill="#fff"
              />
              <path
                d="m166.61 25.5a9.7 9.7 0 1 1 -9.7-9.7 9.69 9.69 0 0 1 9.7 9.7zm-9.7 7.76a7.76 7.76 0 1 0 -7.75-7.76 7.76 7.76 0 0 0 7.75 7.76z"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                d="m364.45 3a3.53 3.53 0 0 1 3.55 3.53v39.79a3.53 3.53 0 0 1 -3.53 3.52h-39.8a3.53 3.53 0 0 1 -3.53-3.52v-39.79a3.53 3.53 0 0 1 3.53-3.53zm0-3h-39.78a6.53 6.53 0 0 0 -6.53 6.53v39.79a6.52 6.52 0 0 0 6.53 6.52h39.78a6.52 6.52 0 0 0 6.55-6.52v-39.79a6.53 6.53 0 0 0 -6.55-6.53z"
                fill="#79e2f2"
              />
              <path
                d="m335.62 33.1a2.17 2.17 0 0 1 -2.17-2.17v-10.85a2.17 2.17 0 0 1 2.17-2.17h17.38a2.17 2.17 0 0 1 2.17 2.17v10.85a2.17 2.17 0 0 1 -2.17 2.17zm17.38-6.51v-2.17h-10.87v2.17zm0-4.34v-2.17h-10.87v2.17zm0 6.51v2.17h-10.87v-2.17zm-17.36-4.34v2.17h4.36v-2.17zm0 4.34v2.17h4.36v-2.17zm0-6.51v-2.17h4.36v2.17z"
                fill="#79e2f2"
                fill-rule="evenodd"
              />
              <path
                d="m113.66 3a3.53 3.53 0 0 1 3.53 3.53v39.79a3.53 3.53 0 0 1 -3.53 3.52h-39.79a3.53 3.53 0 0 1 -3.52-3.52v-39.79a3.53 3.53 0 0 1 3.52-3.53zm0-3h-39.79a6.52 6.52 0 0 0 -6.52 6.53v39.79a6.52 6.52 0 0 0 6.52 6.52h39.79a6.52 6.52 0 0 0 6.53-6.52v-39.79a6.53 6.53 0 0 0 -6.53-6.53z"
                fill="#79e2f2"
              />
              <path
                d="m94.9 35.27c2.47 0 6.51-9.42 6.51-13a6.51 6.51 0 1 0 -13 0c-.02 3.58 4.01 13 6.49 13zm0-9.76a3.16 3.16 0 1 0 -3.16-3.16 3.17 3.17 0 0 0 3.16 3.16z"
                fill="#79e2f2"
                fill-rule="evenodd"
              />
              <path
                d="m239.06 3a3.54 3.54 0 0 1 3.53 3.53v39.79a3.53 3.53 0 0 1 -3.53 3.52h-39.79a3.53 3.53 0 0 1 -3.53-3.52v-39.79a3.53 3.53 0 0 1 3.53-3.53zm0-3h-39.79a6.53 6.53 0 0 0 -6.53 6.53v39.79a6.52 6.52 0 0 0 6.53 6.52h39.79a6.53 6.53 0 0 0 6.53-6.52v-39.79a6.53 6.53 0 0 0 -6.53-6.53z"
                fill="#79e2f2"
              />
              <path
                d="m212.59 16.82v1.09h-1.09a2.17 2.17 0 0 0 -2.17 2.16v13a2.17 2.17 0 0 0 2.17 2.16h15.2a2.17 2.17 0 0 0 2.17-2.16v-13a2.17 2.17 0 0 0 -2.17-2.16h-1.09v-1.09a1.09 1.09 0 0 0 -2.17 0v1.09h-8.68v-1.09a1.09 1.09 0 0 0 -2.17 0zm-.82 6.05v8.84a1.08 1.08 0 0 0 1.08 1.08h12.5a1.07 1.07 0 0 0 1.07-1.08v-8.84zm4.07 3.72v-2.17h-2.17v2.17zm8.69-2.17v2.17h-2.18v-2.17zm-6.53 2.17h2.18v-2.17h-2.18zm-4.34 4.34v-2.17h2.17v2.17zm4.34 0h2.18v-2.17h-2.18zm6.52-2.17v2.17h-2.18v-2.17z"
                fill="#79e2f2"
                fill-rule="evenodd"
              />
              <path
                d="m301.76 3a3.53 3.53 0 0 1 3.52 3.53v39.79a3.53 3.53 0 0 1 -3.52 3.52h-39.76a3.53 3.53 0 0 1 -3.53-3.52v-39.79a3.53 3.53 0 0 1 3.53-3.53h39.79m0-3h-39.79a6.53 6.53 0 0 0 -6.53 6.53v39.79a6.52 6.52 0 0 0 6.53 6.52h39.79a6.52 6.52 0 0 0 6.52-6.52v-39.79a6.52 6.52 0 0 0 -6.55-6.53z"
                fill="#79e2f2"
              />
              <path
                d="m288.88 24.61a7.56 7.56 0 0 1 .92 3.61h2.2a9.67 9.67 0 0 0 -1.61-5.36 2.25 2.25 0 0 1 -.49.76zm-3.07-3.07a7.59 7.59 0 0 0 -11.21 6.68h-2.17a9.77 9.77 0 0 1 15.13-8.17 2.33 2.33 0 0 0 -.76.5zm-2.53 1.25a1.09 1.09 0 1 1 -1.08-1.08 1.08 1.08 0 0 1 1.08 1.08zm3.46 2.43-3.74 3.78a1.11 1.11 0 0 1 -1.37.14l-.17-.14a1.1 1.1 0 0 1 0-1.54l6.14-6.14a1.09 1.09 0 1 1 1.53 1.54l-2.31 2.31zm2 3a1.09 1.09 0 1 1 -1.08-1.08 1.08 1.08 0 0 1 1.05 1.08zm-11.97 1.08a1.08 1.08 0 1 0 -1.08-1.08 1.08 1.08 0 0 0 1.08 1.08zm2.72-4.88a1.09 1.09 0 1 1 -2.17 0 1.09 1.09 0 0 1 2.17 0zm-7.06 3.8h2.17v1.91a.27.27 0 0 0 .27.26h14.66a.27.27 0 0 0 .27-.26v-1.91h2.2v3.78a.53.53 0 0 1 -.53.53h-18.47a.53.53 0 0 1 -.53-.53z"
                fill="#79e2f2"
                fill-rule="evenodd"
              />
              <path d="m0 85.8h377.15v226.2h-377.15z" fill="url(#i)" />
              <path
                d="m168.71 86.48h59.96v226.07h-59.96z"
                fill="url(#j)"
                opacity=".3"
              />
              <path
                d="m80.64 86.48h28.94v226.09h-28.94z"
                fill="url(#k)"
                opacity=".2"
              />
              <image
                height="55"
                opacity=".6"
                transform="translate(187.57 168.27)"
                width="196"
                xlinkHref="data:image/png;base64,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"
              />
              <rect
                fill="url(#l)"
                height="29.63"
                rx="1.72"
                width="171.09"
                x="197.11"
                y="174.76"
              />
              <rect
                fill="#e6e1ff"
                height="3.89"
                opacity=".4"
                rx=".96"
                width="67.42"
                x="203.99"
                y="181.96"
              />
              <path
                d="m206.18 191.8a.78.78 0 0 0 -.78.78v4.68a.78.78 0 0 0 .78.78h4.68a.78.78 0 0 0 .78-.78v-1.95a.39.39 0 1 0 -.78 0v1.95h-4.68v-4.68h3.9a.39.39 0 0 0 .39-.39.38.38 0 0 0 -.39-.39zm1.06 2.46a.39.39 0 0 0 -.55 0 .4.4 0 0 0 0 .55l1.41 1.53a.5.5 0 0 0 .72 0l.14-.14.38-.37 1.16-1.14 1.43-1.42a.38.38 0 0 0 0-.55.39.39 0 0 0 -.55 0l-1.42 1.42-1.16 1.14-.32.32z"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                d="m215.94 197.25h.51v-.88h.6v-.47h-.6v-2.9h-.76c-.6.88-1.24 1.91-1.81 2.87v.48h2.06zm-1.53-1.38c.46-.78 1-1.65 1.49-2.36v2.39h-1.53zm3.44 2.28 1.52-5.32h-.37l-1.53 5.32zm3.47-.8c.89 0 1.52-.51 1.52-1.23a1.06 1.06 0 0 0 -.84-1.12.94.94 0 0 0 .71-.94 1.38 1.38 0 0 0 -2.71 0 1 1 0 0 0 .71.94 1.06 1.06 0 0 0 -.88 1.08c-.04.76.59 1.27 1.49 1.27zm0-2.53a.73.73 0 1 1 .83-.72.75.75 0 0 1 -.83.72zm0 2.08c-.59 0-1-.34-1-.82s.41-.82 1-.82a.83.83 0 1 1 0 1.64z"
                fill="#fff"
              />
              <g mask="url(#m)">
                <circle cx="337.15" cy="193.8" fill="url(#a)" r="8.05" />
              </g>
              <g opacity=".8">
                <image
                  height="55"
                  opacity=".6"
                  transform="translate(56.57 222.27)"
                  width="196"
                  xlinkHref="data:image/png;base64,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"
                />
                <rect
                  fill="url(#n)"
                  height="29.63"
                  rx="1.72"
                  width="171.09"
                  x="66.28"
                  y="228.98"
                />
              </g>
              <rect
                fill="#e6e1ff"
                height="3.89"
                opacity=".4"
                rx=".96"
                width="67.42"
                x="72.9"
                y="235.39"
              />
              <path
                d="m75.1 245.23a.78.78 0 0 0 -.78.78v4.69a.78.78 0 0 0 .78.78h4.68a.78.78 0 0 0 .78-.78v-1.95a.4.4 0 0 0 -.39-.4.39.39 0 0 0 -.39.4v1.95h-4.68v-4.7h3.9a.39.39 0 0 0 .39-.39.4.4 0 0 0 -.39-.39zm1.06 2.47a.39.39 0 1 0 -.57.53l1.41 1.53a.52.52 0 0 0 .72 0l.14-.14.38-.37 1.15-1.15 1.43-1.42a.39.39 0 0 0 -.56-.55c-.27.28-.77.77-1.42 1.41l-1.16 1.14-.32.31z"
                fill="#fff"
                fill-rule="evenodd"
              />
              <path
                d="m83.93 250.69h.53v-4.24h-.52l-1.13.81v.56l1.08-.78zm1.77-3h.51a.79.79 0 0 1 .84-.83.75.75 0 0 1 .8.78c0 .37-.15.59-.69 1.17l-1.43 1.55v.37h2.73v-.48h-2v-.05l1-1c.76-.79 1-1.14 1-1.63a1.21 1.21 0 0 0 -1.3-1.18 1.29 1.29 0 0 0 -1.46 1.26zm3.64 3.94 1.52-5.32h-.43l-1.52 5.32zm2-3.94h.51a.79.79 0 0 1 .84-.83.75.75 0 0 1 .81.78c0 .37-.16.59-.7 1.17l-1.43 1.55v.37h2.73v-.48h-2v-.05l1-1c.76-.79 1-1.14 1-1.63a1.22 1.22 0 0 0 -1.31-1.18 1.29 1.29 0 0 0 -1.46 1.26zm5.08 3.14c1 0 1.5-.81 1.5-2.21s-.56-2.22-1.5-2.22-1.5.81-1.5 2.21.54 2.18 1.49 2.18zm0-.46c-.62 0-1-.63-1-1.76s.35-1.75 1-1.75 1 .63 1 1.75-.42 1.72-1.01 1.72z"
                fill="#fff"
              />
              <image
                height="55"
                opacity=".6"
                transform="translate(7.57 129.27)"
                width="299"
                xlinkHref="data:image/png;base64,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"
              />
              <rect
                fill="url(#o)"
                height="29.63"
                rx="1.72"
                width="273.98"
                x="17.4"
                y="135.88"
              />
              <rect
                fill="#b7acf0"
                height="3.89"
                opacity=".3"
                rx=".96"
                width="143.65"
                x="24.01"
                y="140.18"
              />
              <rect
                fill="#b7acf0"
                height="3.89"
                opacity=".3"
                rx=".96"
                width="95.84"
                x="23.9"
                y="147.19"
              />
              <g mask="url(#p)">
                <circle
                  cx="278.8"
                  cy="154.28"
                  fill="url(#b)"
                  r="8.05"
                  transform="matrix(.16022575 -.9870804 .9870804 .16022575 81.85 404.77)"
                />
              </g>
              <g opacity=".9">
                <image
                  height="54"
                  opacity=".6"
                  transform="translate(259.57 90.27)"
                  width="155"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAA2CAYAAADQ4+u8AAAACXBIWXMAAAsSAAALEgHS3X78AAAFi0lEQVR4Xu2d3VLbShCE20DAITgnb8Q1T5zrPFKKAMYY61ys2tsazernxOXDiumqqZVs2VLVftWzu/ZIq6ZpEAqdQ1djB4zp18/H1dgxofp1/7D5a1dazXG2AbACuGXLhWQugKOwGcBK295+aBmygOj+cXsKeIOwCWgrZJjstrah5aqRtjH7x3YIOhc2BzIbF2Yf0oaWJQ8yxsF5rQjc0ATBwlWKgG65sqAdBoLv49fPRxe4nrO1ruZBdokE56UJC1zAthxZFzsAeJfYy7YFrwdcx9mc9KmQXQH4YlqFL4BblixoCtgewFsb3H6Xzx6BU3lp1Loa4bpu40a2r5GBs2k1VLc80AjYDsCrtPYzK6CfTsdgo6tdA1i38bWNG2TwPOBC9YqAMC3SzQjXFsBLG9rXvcmC6gibjNWADJu62hrAN4lbZOiYVm06DdUp62oK2guAZ6T+vpDjeSwBXcEAN9XZbpDA+gZgA+A7gDt0geMYTp0tgKtPnqu9oQvaF2TQFEim24v29ZWm0hJsOgOlsxG27wD+adsNEnCaTr3lkFA90jSorrYF8ITU15ftsQojQ/t/0NlsGtUx2w0SWHdIoP1Adrg1srtFKq1bFjZ1NfYxzHtbdMftbt9PTaOE7SsScEylP5DTKcduAVvdsuM1AsVxGpDczKZVD7aOu10B7r85pgB3h+xyt0juRthi3FanGmkJG1OoBe0Zefik/V5cjVBns3AQOC7acmbKJY81EmS3SGO5NdKJB6009OFlnW2HLmhb5GGTLnt5rgYgmdn9w6YZGrNp2F8S6HKEjutvtNOArV4pbHvkyQAdTd2MPAwZzDGVemM2eyBhs8DR6ThbZRvLH/XKplEub7wj97EHmQVN28FfECjP3Sx4GnoBnCSE6hRnokCCzva1QmZTZ7Hfx5wN6H+RB6GGnSCE6pM6nO1faz6Q1wY1BTaV/fKxCNWrKX07q5/nwgbMO+nkCwl9GNkf0L1+ngUZdYG/l5509gWEPrRO2rengC0UmqSALXQ2BWyhsylgC51NAVvobDoFbDpV7v3vPFS1mpGYpf+yzuadsHTy2RcUqkqz+ncObB5cJ6M+9KHUINd+jvXx5D6fApv9Yr0IW4LP/0ABJ1gEDP1vsv1pK6c0JhvNEGz2C+wF2NgjjwEbdH/iCNUhayqsmNKW2yXg7PccZWHzDlbQvPL7XRtacRN/nqxT2u80kZ3Emwkt3ys523FfYVM34j5Bs5CxYFUra9AeF38Lr1ees+2QClu2bbDfPeA8l+vWjd4/bBoperGpU9OkLb+3FTe2BgEI4GpSydm2AP4g1Y0+I4NHt9PU6rkbgPKYzaZOdbMX5GJVBe0V/eqqAK0uec72hlyg/Ig+dHQ5Hce5KdUbs3np05bfW9C2iLrRJagEG0v3/gD4jQTdExIPvJuRAue6m+dsHmy0Uhak2ooblvGxBiFgq1MWNmY1Dp3obr+RHY7p1KbSnqbApq7Gyim072mxqpbx8ZiArS5Z2A7IEwGazRMSaOpuOnYrptHObU7bSQJhYakeq+B5Yxnvlln2Hm3havWKQBA2XYHgxPAJedym6fQVZjlk7GaAXhp9RYbnIK89I4MWrrYcDY3b7c0AdVaqk4SexmajTKP6Ol/bIheteuX3oXqlaVCXvnQRX291qim0OEEYulu41oFeonvzZu8GzgpawFa3GvjA0Wj2Tttb+hi8W7iIzqb7etI39CujA7RlSWE7SKjTcVvfd0EDHNjMrwkEzubwUpU0ELAtRY20HnQ29DhXxWdXDTxSyLpYgLZcecDZIGjH40uPE5rzoDTbBmSfRxY6b3v0yXyjj4AE4jGQn1gWDt3vvDcGGjARNlU84PbTqQjIFMBUs2HzFI/uXrbmQlXSSWALhaboX1+qE8xczu+mAAAAAElFTkSuQmCC"
                />
                <rect
                  fill="url(#q)"
                  height="29.19"
                  rx="1.72"
                  width="130.33"
                  x="268.57"
                  y="96.44"
                />
              </g>
              <rect
                fill="#8d81d3"
                height="3.89"
                opacity=".3"
                rx=".96"
                width="67.42"
                x="275.4"
                y="103.6"
              />
              <rect
                fill="#8d81d3"
                height="3.89"
                opacity=".3"
                rx=".96"
                width="41.86"
                x="275.4"
                y="110.61"
              />
              <g opacity=".9">
                <image
                  height="54"
                  opacity=".6"
                  transform="translate(241.57 222.27)"
                  width="156"
                  xlinkHref="data:image/png;base64,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"
                />
                <rect
                  fill="url(#r)"
                  height="29.19"
                  rx="1.72"
                  width="130.33"
                  x="251.43"
                  y="228.98"
                />
              </g>
              <rect
                fill="#b7acf0"
                height="3.89"
                opacity=".3"
                rx=".96"
                width="79.32"
                x="258.26"
                y="235.5"
              />
              <rect
                fill="#b7acf0"
                height="3.89"
                opacity=".3"
                rx=".96"
                width="32.12"
                x="258.24"
                y="242.51"
              />
              <g mask="url(#s)">
                <circle cx="370.25" cy="246.37" fill="url(#c)" r="8.05" />
              </g>
              <g mask="url(#t)">
                <circle cx="356.43" cy="194.1" fill="url(#d)" r="8.05" />
              </g>
              <g mask="url(#u)">
                <circle cx="226.77" cy="248.02" fill="url(#v)" r="8.05" />
              </g>
              <g mask="url(#w)">
                <circle cx="208.85" cy="248.02" fill="url(#f)" r="8.05" />
              </g>
              <g mask="url(#x)">
                <circle cx="387.43" cy="113.74" fill="url(#g)" r="8.05" />
              </g>
              <g fill="#b2d4ff">
                <path d="m25.31 70.6v7.31h-1.43v-8.25h2.53l1.59 4.17.72 2.41.71-2.41 1.61-4.17h2.37v8.25h-1.48v-7.21l-.92 3-1.62 4.16h-1.39l-1.6-4.16z" />
                <path d="m34.94 73.77c0-2.49 1.46-4.24 4.05-4.24s4 1.75 4 4.24-1.42 4.23-3.99 4.23-4.06-1.71-4.06-4.23zm1.5 0c0 1.58.73 2.89 2.55 2.89s2.54-1.31 2.54-2.89-.73-2.86-2.53-2.86-2.56 1.31-2.56 2.86z" />
                <path d="m51.49 69.66v8.25h-1.58l-2.62-4.28-1.29-2.4v6.68h-1.45v-8.25h2l2.3 3.74 1.15 2.24v-6z" />
                <path d="m105 69.66v1.34h-2.34v6.9h-1.5v-6.9h-2.36v-1.34z" />
                <path d="m106 74.7v-5h1.51v5c0 1.15.44 2 1.7 2s1.69-.81 1.69-2v-5h1.51v5c0 2-.94 3.34-3.2 3.34s-3.21-1.36-3.21-3.34z" />
                <path d="m114.38 69.66h5.54v1.34h-4v2.22h3.65v1.25h-3.65v2.1h4.08v1.33h-5.62z" />
                <path d="m124.2 78a6 6 0 0 1 -3-.66v-1.4a7.45 7.45 0 0 0 3.06.7c1.09 0 1.48-.41 1.48-1s-.41-.94-1.73-1.25c-2-.44-2.81-1.17-2.81-2.5s1-2.33 3-2.33a5.56 5.56 0 0 1 2.64.6v1.41a6.17 6.17 0 0 0 -2.69-.64c-1 0-1.49.33-1.49 1s.47.87 1.76 1.18c1.93.43 2.81 1.09 2.81 2.51s-.9 2.38-3.03 2.38z" />
                <path d="m174.5 69.66h1.56l1.85 7 2.13-7h1.69l2.13 7 1.85-7h1.53l-2.46 8.25h-1.95l-2-6.67-2 6.67h-1.83z" />
                <path d="m188.16 69.66h5.54v1.34h-4v2.22h3.66v1.25h-3.66v2.1h4.11v1.33h-5.61z" />
                <path d="m195.49 69.66h3.19c2.73 0 4 1.67 4 4.14s-1.32 4.11-4 4.11h-3.19zm1.51 1.34v5.49h1.7c1.68 0 2.53-.89 2.53-2.7s-.82-2.79-2.6-2.79z" />
                <path d="m206.68 78a6 6 0 0 1 -3-.66v-1.4a7.45 7.45 0 0 0 3.06.7c1.08 0 1.47-.41 1.47-1s-.4-.94-1.72-1.25c-2-.44-2.81-1.17-2.81-2.5s1-2.33 3-2.33a5.56 5.56 0 0 1 2.64.6v1.41a6.17 6.17 0 0 0 -2.69-.64c-.95 0-1.49.33-1.49 1s.47.87 1.76 1.18c1.93.43 2.81 1.09 2.81 2.51s-.9 2.38-3.03 2.38z" />
                <path d="m256.76 69.66v1.34h-2.33v6.9h-1.51v-6.9h-2.34v-1.34z" />
                <path d="m264.85 69.66v8.25h-1.51v-3.42h-3.87v3.42h-1.47v-8.25h1.51v3.46h3.87v-3.46z" />
                <path d="m266.88 74.7v-5h1.5v5c0 1.15.44 2 1.7 2s1.7-.81 1.7-2v-5h1.51v5c0 2-1 3.34-3.21 3.34s-3.2-1.36-3.2-3.34z" />
                <path d="m280 74.77 1.9 3.14h-1.78l-1.58-2.91h-1.72v2.9h-1.51v-8.24h3.22c2 0 3 1 3 2.67a2.35 2.35 0 0 1 -1.53 2.44zm-3.18-3.77v2.72h1.5c1.29 0 1.71-.51 1.71-1.36s-.43-1.36-1.71-1.36z" />
                <path d="m285.82 78a6 6 0 0 1 -3-.66v-1.4a7.45 7.45 0 0 0 3.06.7c1.08 0 1.47-.41 1.47-1s-.4-.94-1.72-1.25c-2-.44-2.81-1.17-2.81-2.5s1-2.33 3-2.33a5.53 5.53 0 0 1 2.64.6v1.41a6.11 6.11 0 0 0 -2.69-.64c-.94 0-1.48.33-1.48 1s.47.87 1.76 1.18c1.92.43 2.8 1.09 2.8 2.51s-.85 2.38-3.03 2.38z" />
                <path d="m328.85 75v2.9h-1.51v-8.24h5.53v1.34h-4v2.64h3.64v1.36z" />
                <path d="m339.44 74.77 1.9 3.14h-1.77l-1.57-2.91h-1.72v2.9h-1.51v-8.24h3.22c2 0 3 1 3 2.67a2.34 2.34 0 0 1 -1.55 2.44zm-3.21-3.77v2.72h1.49c1.3 0 1.71-.51 1.71-1.36s-.43-1.36-1.71-1.36z" />
                <path d="m344.3 69.66v8.25h-1.51v-8.25z" />
              </g>
              <path
                d="m377.15 86.48h-377.15"
                fill="none"
                stroke="#b2d4ff"
                stroke-miterlimit="10"
              />
              <image
                height="63"
                opacity=".49"
                transform="translate(156.57 31.27)"
                width="54"
                xlinkHref="data:image/png;base64,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"
              />
              <path
                d="m184.35 57.38 6.81-5a1 1 0 0 0 -.1-1.6l-23.14-12.55a1 1 0 0 0 -1.38 1l4.92 25.87a1 1 0 0 0 1.49.59l6.81-5 10.88 14.9 4.58-3.35z"
                fill="#403294"
              />
            </svg>
            <div className="cont-main-2-right">
              <span>CHOOSE A VIEW</span>
              <h2>The board is just the beginning</h2>
              <p>
                Lists and cards are the building blocks of organizing work on a{" "}
                <br className="br-6" /> Trello board. Grow from there with task
                assignments, timelines, <br className="br-6" /> productivity
                metrics, calendars, and more.
              </p>
              <h3>Learn more</h3>
            </div>
          </div>
        </div>

        <div className="container-cont-main-3">
          <div className="cont-main-3">
            <div className="cont-text-image-two">
              <span>DIVE INTO THE DETAILS</span>
              <h2>Cards contain everything you need</h2>
              <p>
                Trello cards are your portal to more organized work—where every{" "}
                <br /> single part of your task can be managed, tracked, and
                shared with <br /> teammates. Open any card to uncover an
                ecosystem of checklists, <br /> due dates, attachments,
                conversations, and more.
              </p>
              <h3>Learn more</h3>
            </div>
            <div className="cont-image">
              <img className="cardbacck" src={cardback} />
            </div>
          </div>
        </div>

        <div className="container-cont-main-4">
          <div className="cont-main-4">
            <img className="automation" src={automation} />
            <div>
              <span>MEET YOUR NEW BUTLER</span>
              <h2>No-code automation</h2>
              <p>
                Let the robots do the work—so your team can focus on work that{" "}
                <br /> matters. With Trello’s built-in automation, Butler,
                reduce the <br /> number of tedious tasks (and clicks) on your
                project board by <br /> harnessing the power of automation
                across your entire team.
              </p>
              <h3>Learn more</h3>
            </div>
          </div>
        </div>

        <div className="container-cont-main-5">
          <div className="cont-main-5">
            <div>
              <span>POWER-UPS</span>
              <h2>Integrate top work tools</h2>
              <p>
                Easily connect the apps your team already uses into your Trello{" "}
                <br /> workflow, or add a Power-Up that helps fine-tune one
                specific <br /> need. With hundreds of Power-Ups available, your
                team’s workflow <br /> wishes are covered.
              </p>
              <h3>Learn more</h3>
            </div>
            <img className="powerups" src={powerups} />
          </div>
        </div>

        <div className="cont-carts">
          <div className="carts-left">
            <img className="tag" src={tag} />
            <div className="dis-carts-left">
              <h3>See our pricing</h3>
              <p>
                Whether you’re a team of 2 or 2,000, <br className="vr-8" />{" "}
                there’s a Trello tailor-made for your
                <br className="vr-8" /> organization.
              </p>
              <a href="/Btnpricing">
                {" "}
                <button class="btn-start-2">Trello pricing</button>
              </a>
            </div>
          </div>
          <div className="carts-right">
            <img className="Compass" src={compass} />
            <div className="dis-carts-left">
              <h3>See our pricing</h3>
              <p>
                Explore the world of boards and
                <br className="vr-8" /> beyond in Trello. Dive deeper into our
                <br className="vr-8" /> most popular features.
              </p>
              <a href="/about">
                <button class="btn-start-2">Tour Trello</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}