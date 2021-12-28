import React, { useState } from "react";
import "./Btnpricing.css";
import logotrellopricing from "../static/images/png/trello.png";

export default function Headerpricing() {
  const [state, setState] = React.useState(false);
  const [stateTwo, setStateTwo] = React.useState(false);
  const [stateTree, setStateTree] = React.useState(false);
  const [stateFour, setStateFour] = React.useState(false);

  return (
    <>
      <div className="header-fix">
        <div className="header-pricing">
          <div className="icon-trello">
            <div className="header-eft-pricing">
              <a href="/">
                <img
                  className="img-trello-pricing"
                  src={logotrellopricing}
                  alt="Logo"
                />{" "}
              </a>
              <button
                className="item-header-pricing  relative"
                onClick={() => setState((prevState) => !prevState)}
                style={{ position: "relative" }}
              >
                features
              </button>
              <div
                className="hide-side-features"
                // onMouseLeave={() => setState(false)}
                style={{
                  position: "absolute",
                  top: 20,
                  left: 0,
                  width: "100%",
                  height: state ? 400 : 0,
                  background: "white",
                  overflow: "hidden",
                  transition: "height 500ms",
                }}
              >
                <div className="hide-side-left">
                  <div className="cont-hide-side-left">
                    <h4 className="important-text-hide-side-left-features">
                      Explore the features that help your team succeed
                    </h4>
                    <hr className="hr-text-hide-side-left-features" />
                    <div className="cont-boxs-left-side-hide-features-row-1">
                      <div className="cont-views">
                        <div className="row-1-cont-views">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M31.8115 38.0924C31.393 37.0057 29.8555 37.0057 29.4369 38.0924L27.8317 42.2604L23.6637 43.8656C22.577 44.2842 22.577 45.8217 23.6637 46.2402L27.8317 47.8454L29.4369 52.0135C29.8555 53.1002 31.393 53.1002 31.8115 52.0135L33.4167 47.8454L37.5848 46.2402C38.6715 45.8217 38.6715 44.2842 37.5848 43.8656L33.4167 42.2604L31.8115 38.0924Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0ZM46.6329 24.4498C46.2144 23.3631 44.6769 23.3631 44.2584 24.4498L42.6531 28.6178L38.4851 30.223C37.3984 30.6416 37.3984 32.1791 38.4851 32.5976L42.6531 34.2028L44.2584 38.3709C44.6769 39.4576 46.2144 39.4576 46.6329 38.3709L48.2381 34.2028L52.4062 32.5976C53.4929 32.1791 53.4929 30.6416 52.4062 30.223L48.2381 28.6178L46.6329 24.4498ZM31.8119 38.0919C31.3934 37.0052 29.8558 37.0052 29.4373 38.0919L27.8321 42.26L23.6641 43.8652C22.5773 44.2837 22.5773 45.8213 23.6641 46.2398L27.8321 47.845L29.4373 52.013C29.8558 53.0998 31.3934 53.0998 31.8119 52.013L33.4171 47.845L37.5851 46.2398C38.6719 45.8213 38.6719 44.2837 37.5851 43.8652L33.4171 42.26L31.8119 38.0919ZM22.7155 13.3671C23.2177 12.0631 25.0627 12.0631 25.565 13.3671L27.5398 18.4949L32.6675 20.4697C33.9716 20.9719 33.9716 22.8169 32.6676 23.3192L27.5398 25.294L25.565 30.4217C25.0627 31.7258 23.2177 31.7258 22.7155 30.4217L20.7407 25.294L15.6129 23.3192C14.3089 22.8169 14.3088 20.9719 15.6129 20.4697L20.7407 18.4949L22.7155 13.3671Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">View</div>
                        </div>
                        <div className="caption-box-views">
                          View your team’s projects from every <br />
                          angle
                        </div>
                      </div>
                      <div className="cont-Automate">
                        <div className="row-1-cont-Automate">
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14 12.6591C14 13.7225 13.138 14.5845 12.0746 14.5845H1.92539C0.862025 14.5845 0 13.7225 0 12.6591V6.84793C0 5.78457 0.862025 4.92255 1.92539 4.92255H12.0746C13.138 4.92255 14 5.78457 14 6.84793V12.6591ZM5.93141 9.76875C5.93141 10.491 5.34594 11.0764 4.62372 11.0764C3.9015 11.0764 3.31603 10.491 3.31603 9.76875C3.31603 9.04653 3.9015 8.46106 4.62372 8.46106C5.34594 8.46106 5.93141 9.04653 5.93141 9.76875ZM9.39293 11.0764C10.1151 11.0764 10.7006 10.491 10.7006 9.76875C10.7006 9.04653 10.1151 8.46106 9.39293 8.46106C8.67071 8.46106 8.08523 9.04653 8.08523 9.76875C8.08523 10.491 8.67071 11.0764 9.39293 11.0764Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.00008 0C5.95938 0 5.11572 0.843654 5.11572 1.88435C5.11572 2.68063 5.60962 3.36154 6.30778 3.63747V4.92225L6.30853 4.95484C6.32555 5.32206 6.62866 5.61456 7.00009 5.61456C7.38244 5.61456 7.69239 5.3046 7.69239 4.92225V3.63746C8.39054 3.36153 8.88443 2.68062 8.88443 1.88435C8.88443 0.843654 8.04078 0 7.00008 0ZM7.00945 2.38385C7.28112 2.37885 7.49981 2.15706 7.49981 1.8842C7.49981 1.6082 7.27607 1.38446 7.00007 1.38446C6.72408 1.38446 6.50034 1.6082 6.50034 1.8842C6.50034 2.15707 6.71903 2.37886 6.99071 2.38385C6.99383 2.38381 6.99696 2.38379 7.00009 2.38379C7.00321 2.38379 7.00634 2.38381 7.00945 2.38385Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">Automation</div>
                        </div>
                        <div className="caption-box-Automation">
                          Automate tasks and workflows with
                          <br />
                          Butler automation.
                        </div>
                      </div>
                      <div className="cont-Automate">
                        <div className="row-1-cont-Automate">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 91 91"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M25.0609 81.7105C24.7484 83.0813 23.0486 83.5713 22.0543 82.5772L8.09029 68.6154C7.09602 67.6213 7.58579 65.9214 8.95652 65.6087L17.8101 63.5887L27.0795 72.8566L25.0609 81.7105Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M69.4191 47.7858L42.8745 21.2454L14.2278 49.8967C11.4358 52.6891 11.4362 57.2162 14.2286 60.0082L30.6609 76.4379C33.4534 79.2299 37.9804 79.2295 40.7723 76.4371L69.4191 47.7858ZM34.6624 61.9623C37.953 61.9621 40.6204 59.2943 40.6201 56.0036C40.6198 52.713 37.9521 50.0457 34.6614 50.0459C31.3708 50.0461 28.7034 52.714 28.7037 56.0046C28.704 59.2952 31.3718 61.9626 34.6624 61.9623ZM52.837 43.7846C52.8373 47.0753 50.1699 49.7431 46.8793 49.7433C43.5887 49.7436 40.9209 47.0762 40.9206 43.7856C40.9203 40.495 43.5877 37.8271 46.8783 37.8269C50.169 37.8267 52.8367 40.494 52.837 43.7846Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M69.4194 47.7855L76.8194 18.1752C77.4737 15.5569 75.102 13.1856 72.4838 13.8403L42.8748 21.2451L69.4194 47.7855Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">Power-Ups</div>
                        </div>
                        <div className="caption-box-Power-Ups">
                          Power up your teams by linking their
                          <br /> favorite tools with Trello plugins.
                        </div>
                      </div>
                    </div>
                    <div className="cont-boxs-left-side-hide-features-row-2">
                      <div className="cont-views">
                        <div className="row-1-cont-views">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M64.0008 47.0028C64.0008 50.3569 61.2817 53.076 57.9276 53.076H52.3397V48.015H17.9462C14.7624 48.015 12.1509 45.5652 11.8938 42.4478H45.5495V17.6491H11.873L11.873 7.02138C11.873 3.66728 14.5921 0.948242 17.9462 0.948242H57.9277C61.2817 0.948242 64.0008 3.66727 64.0008 7.02137V47.0028Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M52.3385 17.1434C52.3385 13.7893 49.6195 11.0703 46.2654 11.0703H6.07313C2.71903 11.0703 0 13.7893 0 17.1434V49.0274H52.3385V17.1434ZM45.548 17.6495H6.57875V42.4482H45.548V17.6495Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M46.2658 63.198C49.6199 63.198 52.339 60.479 52.339 57.1249V49.0273H0V57.1249C0 60.479 2.71903 63.198 6.07313 63.198H46.2658ZM26.0639 53.8353C27.3217 53.8353 28.3413 54.8549 28.3413 56.1127C28.3413 57.3346 27.3791 58.3317 26.1711 58.3877L26.0639 58.3902H8.60366C7.34587 58.3902 6.32623 57.3705 6.32623 56.1127C6.32623 54.8909 7.28844 53.8938 8.49645 53.8378L8.60366 53.8353H26.0639ZM41.7529 52.5701C43.7094 52.5701 45.2955 54.1562 45.2955 56.1128C45.2955 58.0693 43.7094 59.6554 41.7529 59.6554C39.7963 59.6554 38.2102 58.0693 38.2102 56.1128C38.2102 54.1562 39.7963 52.5701 41.7529 52.5701Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">Templates</div>
                        </div>
                        <div className="caption-box-views">
                          Give your team a blueprint for
                          <br /> success with easy-to-use templates
                          <br /> from industry leaders and the Trello <br />{" "}
                          community.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide-side-right">
                  <h4 className="text-header-hide-side-features">
                    Meet Trello
                  </h4>
                  <hr className="hr-top-caption-header-hide-side-features" />
                  <div className="caption-header-hide-side-features">
                    Trello makes it easy for your team to get work <br />
                    done. No matter the project, workflow, or type of <br />
                    team, Trello can help keep things organized. It’s <br />
                    simple – sign-up, create a board, and you’re off!
                    <br />
                    Productivity awaits.
                  </div>
                  <button className="btn-header-hide-side-features">
                    Check out Trello
                  </button>
                </div>
              </div>
              <button
                className="item-header-pricing  relative"
                onClick={() => setStateTwo((prevState) => !prevState)}
                style={{ position: "relative" }}
              >
                Solutions
              </button>
              <div
                className="hide-side-features"
                style={{
                  position: "absolute",
                  top: 20,
                  left: 0,
                  width: "100%",
                  height: stateTwo ? 570 : 0,
                  background: "white",
                  overflow: "hidden",
                  transition: "height 500ms",
                }}
              >
                <div className="hide-side-left">
                  <div className="cont-hide-side-left">
                    <h4 className="important-text-hide-side-left-features">
                      Take a page out of these pre-built Trello playbooks
                      designed for all teams
                    </h4>
                    <hr className="hr-text-hide-side-left-features" />
                    <div className="cont-boxs-left-side-hide-features-row-1">
                      <div className="cont-views">
                        <div className="row-1-cont-views">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 63 65"
                            fill="none"
                          >
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M36.027 36.5869H29.6118C24.9414 36.5869 21.1553 40.373 21.1553 45.0433L21.1553 52.9166C21.1553 59.3584 26.3775 64.5806 32.8194 64.5806C39.2612 64.5806 44.4834 59.3584 44.4834 52.9166V45.0433C44.4834 40.373 40.6973 36.5869 36.027 36.5869ZM29.6119 41.8362H36.0271C37.7987 41.8362 39.2348 43.2723 39.2348 45.0438V52.917C39.2348 56.46 36.3626 59.3322 32.8195 59.3322C29.2765 59.3322 26.4043 56.46 26.4043 52.917L26.4043 45.0438C26.4043 43.2723 27.8404 41.8362 29.6119 41.8362Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.78418 39.2118L58.3762 55.4036C60.6154 56.0558 62.854 54.3763 62.854 52.044V4.08358C62.854 1.62307 60.3816 -0.0690203 58.088 0.821709L2.78418 22.2989V39.2118Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.5"
                              d="M2.78456 18.5078C4.19257 18.5078 5.34161 19.6166 5.40612 21.0087L5.40897 21.1322V40.3779C5.40897 41.8273 4.23398 43.0023 2.78456 43.0023C1.37656 43.0023 0.227522 41.8935 0.163013 40.5014L0.160156 40.3779V21.1322C0.160156 19.6828 1.33514 18.5078 2.78456 18.5078Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">
                            Marketing teams
                          </div>
                        </div>
                        <div className="caption-box-views">
                          Whether launching a new product,
                          <br /> campaign, or creating content, Trello
                          <br /> helps marketing teams succeed.
                        </div>
                      </div>
                      <div className="cont-Automate">
                        <div className="row-1-cont-Automate">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 65 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16.4619 33.8066H49.394V55.5542H16.4619V33.8066Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.38404 0.875H29.1994V14.8557H36.6557V0.875H57.4714C61.5894 0.875 64.9277 4.2133 64.9277 8.33131V57.4187C64.9277 61.5367 61.5894 64.875 57.4714 64.875H8.38404C4.26603 64.875 0.927734 61.5367 0.927734 57.4187V8.33131C0.927734 4.2133 4.26604 0.875 8.38404 0.875ZM48.6607 34.429H17.0833V54.9339H48.6607V34.429Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">
                            Product management
                          </div>
                        </div>
                        <div className="caption-box-Automation">
                          Use Trello’s management boards and <br />
                          roadmap features to simplify <br />
                          complex projects and processes.
                        </div>
                      </div>
                      <div className="cont-Automate">
                        <div className="row-1-cont-Automate">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 65 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="10.002"
                              y="25.7305"
                              width="45.3592"
                              height="27.3398"
                              fill="currentColor"
                            ></rect>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M56.6294 0.876995C56.621 0.876967 56.6126 0.876953 56.6042 0.876953H7.51686C7.50845 0.876953 7.50005 0.876967 7.49164 0.876995H56.6294ZM64.0605 18.2751H0.0605469V57.4206C0.0605469 61.5386 3.39885 64.8769 7.51685 64.8769H56.6042C60.7222 64.8769 64.0605 61.5387 64.0605 57.4206L64.0605 18.2751ZM27.5134 31.2106C26.4214 30.1186 24.651 30.1186 23.5591 31.2106L16.7241 38.0455L16.625 38.1498C15.6332 39.2475 15.6663 40.942 16.7241 41.9998L23.5591 48.8348L23.6634 48.9339C24.761 49.9257 26.4556 49.8926 27.5134 48.8348L27.6126 48.7305C28.6043 47.6328 28.5712 45.9383 27.5134 44.8805L22.655 40.0227L27.5134 35.1649L27.6126 35.0606C28.6043 33.9629 28.5712 32.2684 27.5134 31.2106ZM41.1834 31.2105C40.0914 30.1186 38.321 30.1186 37.2291 31.2105C36.1712 32.2683 36.1382 33.9629 37.1299 35.0605L37.2291 35.1648L42.0875 40.0226L37.2291 44.8804C36.1712 45.9382 36.1382 47.6328 37.1299 48.7304L37.2291 48.8347C38.2869 49.8926 39.9814 49.9256 41.0791 48.9339L41.1834 48.8347L48.0183 41.9998C49.0762 40.9419 49.1092 39.2474 48.1175 38.1498L48.0183 38.0455L41.1834 31.2105Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M64.0605 18.275H0.0605469V8.33326C0.0605469 4.21526 3.39885 0.876953 7.51685 0.876953H56.6042C60.7222 0.876953 64.0605 4.21525 64.0605 8.33326V18.275ZM8.75951 13.9255C10.8185 13.9255 12.4877 12.2564 12.4877 10.1974C12.4877 8.13836 10.8185 6.46921 8.75951 6.46921C6.70051 6.46921 5.03136 8.13836 5.03136 10.1974C5.03136 12.2564 6.70051 13.9255 8.75951 13.9255ZM22.4293 10.1974C22.4293 12.2564 20.7602 13.9255 18.7012 13.9255C16.6422 13.9255 14.973 12.2564 14.973 10.1974C14.973 8.13836 16.6422 6.46921 18.7012 6.46921C20.7602 6.46921 22.4293 8.13836 22.4293 10.1974ZM28.643 13.9255C30.702 13.9255 32.3712 12.2564 32.3712 10.1974C32.3712 8.13836 30.702 6.46921 28.643 6.46921C26.584 6.46921 24.9148 8.13836 24.9148 10.1974C24.9148 12.2564 26.584 13.9255 28.643 13.9255Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">Design teams</div>
                        </div>
                        <div className="caption-box-Power-Ups">
                          Empower your design teams by using
                          <br /> Trello to streamline creative requests
                          <br /> and promote more fluid cross-team
                          <br />
                          collaboration.
                        </div>
                      </div>
                    </div>
                    <div className="cont-boxs-left-side-hide-features-row-2">
                      <div className="cont-views">
                        <div className="row-1-cont-views">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 64 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M32.6805 8.95703L4.8623 36.7752L9.26404 41.4215L36.8952 13.7903C37.0004 13.6851 37.112 13.59 37.2286 13.5052L32.6805 8.95703ZM18.8898 51.5819L13.0918 45.4619L40.8293 17.7244L40.9279 17.6206C40.9948 17.5466 41.0569 17.47 41.1144 17.3909L47.1197 23.3963C47.003 23.4811 46.8915 23.5762 46.7863 23.6814L18.9681 51.4995L18.8898 51.5819ZM22.7071 55.6113L27.1168 60.2661L55.5532 31.8297L51.0054 27.282C50.948 27.361 50.8858 27.4377 50.819 27.5117L50.7203 27.6155L22.9022 55.4336C22.8393 55.4965 22.7742 55.5557 22.7071 55.6113Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M32.6807 8.95739L55.5534 31.8301L61.7443 25.6392C64.6412 22.7422 64.6412 18.0453 61.7443 15.1483L49.3625 2.76648C46.4655 -0.130493 41.7686 -0.130495 38.8716 2.76648L32.6807 8.95739Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.86242 36.7754L1.62152 40.0163C0.925934 40.7119 0.535156 41.6553 0.535156 42.639V60.8845C0.535156 62.9329 2.19577 64.5935 4.24424 64.5935H21.2533C22.237 64.5935 23.1805 64.2028 23.876 63.5072L27.1169 60.2663L4.86242 36.7754Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">Templates</div>
                        </div>
                        <div className="caption-box-views">
                          Give your team a blueprint for
                          <br /> success with easy-to-use templates
                          <br /> from industry leaders and the Trello <br />{" "}
                          community.
                        </div>
                      </div>
                      <div className="cont-Startups">
                        <div className="row-1-cont-Startups">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 65 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.3545 3.76136C13.3545 1.70235 15.0236 0.0332031 17.0826 0.0332031H23.9176C25.9766 0.0332031 27.6458 1.70236 27.6458 3.76136V10.5963C27.6458 12.6553 25.9766 14.3245 23.9176 14.3245H17.0826C15.0236 14.3245 13.3545 12.6553 13.3545 10.5963V3.76136Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M38.209 3.76136C38.209 1.70235 39.8781 0.0332031 41.9371 0.0332031H48.7721C50.8311 0.0332031 52.5002 1.70236 52.5002 3.76136V10.5963C52.5002 12.6553 50.8311 14.3245 48.7721 14.3245H41.9371C39.8781 14.3245 38.209 12.6553 38.209 10.5963V3.76136Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M57.4714 10.5957C61.5894 10.5957 64.9277 13.934 64.9277 18.052V54.7122C64.9277 58.8302 61.5894 62.1685 57.4714 62.1685H8.38404C4.26603 62.1685 0.927734 58.8302 0.927734 54.7122L0.927734 18.052C0.927734 13.934 4.26604 10.5957 8.38405 10.5957L57.4714 10.5957Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">Startups</div>
                        </div>
                        <div className="caption-box-views">
                          From hitting revenue goals to
                          <br /> managing workflows, small
                          <br /> businesses thrive with Trello.ates
                        </div>
                      </div>
                      <div className="cont-Startups">
                        <div className="row-1-cont-Startups">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 65 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_2327:15250"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="64"
                              height="63"
                            >
                              <rect
                                x="63.0195"
                                y="62.6914"
                                width="62.1286"
                                height="62.1286"
                                rx="31.0643"
                                transform="rotate(-180 63.0195 62.6914)"
                                fill="#fff"
                              ></rect>
                            </mask>
                            <g mask="url(#mask0_2327:15250)">
                              <path
                                opacity="0.5"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M59.749 80.9474C86.6874 80.9474 108.525 59.1094 108.525 32.1709C108.525 5.23248 86.6874 -16.6055 59.749 -16.6055C49.3005 -16.6055 39.6193 -13.3202 31.6821 -7.72625C23.7449 -13.3202 14.0637 -16.6055 3.6152 -16.6055C-23.3233 -16.6055 -45.1612 5.23248 -45.1612 32.1709C-45.1612 59.1094 -23.3233 80.9474 3.6152 80.9474C14.0637 80.9474 23.7449 77.6621 31.6821 72.0681C39.6193 77.6621 49.3005 80.9474 59.749 80.9474ZM59.7491 -11.7009C50.8809 -11.7009 42.6272 -9.06967 35.7263 -4.54529C42.5722 1.44689 47.7276 9.3229 50.3833 18.2738L67.3788 18.2738C68.7332 18.2738 69.8312 19.3718 69.8312 20.7262C69.8312 22.042 68.7951 23.1157 67.4942 23.176L67.3788 23.1787H51.5644C51.7767 24.3175 51.9494 25.4702 52.081 26.6354C50.7683 27.7842 49.9392 29.472 49.9392 31.3535C49.9392 33.3042 50.8304 35.0468 52.2279 36.1963C52.1211 37.5039 51.9627 38.7969 51.7548 40.0732H67.3788C68.7332 40.0732 69.8312 41.1712 69.8312 42.5257C69.8312 43.8414 68.7951 44.9152 67.4942 44.9755L67.3788 44.9781H50.6929C48.1414 54.3794 42.849 62.6526 35.7268 68.8868C42.6276 73.411 50.8811 76.0421 59.7491 76.0421C83.9786 76.0421 103.621 56.4002 103.621 32.1706C103.621 7.94102 83.9786 -11.7009 59.7491 -11.7009ZM3.61544 -11.7009C12.4836 -11.7009 20.7371 -9.06972 27.638 -4.54541C20.792 1.44678 15.6366 9.32284 12.9809 18.2738L-1.28968 18.2738L-1.40513 18.2764C-2.70597 18.3367 -3.74213 19.4105 -3.74213 20.7262C-3.74213 22.0807 -2.64413 23.1787 -1.28968 23.1787H11.7997C11.2565 26.0932 10.9725 29.0989 10.9725 32.1709C10.9725 34.8615 11.1904 37.5011 11.6094 40.0732H-1.28968L-1.40513 40.0759C-2.70597 40.1362 -3.74213 41.2099 -3.74213 42.5257C-3.74213 43.8801 -2.64413 44.9781 -1.28968 44.9781L12.6713 44.9781C15.2228 54.3794 20.5152 62.6527 27.6376 68.8869C20.7367 73.411 12.4834 76.0421 3.61543 76.0421C-20.6141 76.0421 -40.2561 56.4002 -40.2561 32.1706C-40.2561 7.94102 -20.6141 -11.7009 3.61544 -11.7009ZM32.961 64.7832C32.542 65.1605 32.1157 65.5298 31.6823 65.891C31.2491 65.5301 30.8231 65.161 30.4043 64.7839C30.7764 65.0115 31.2139 65.1427 31.6821 65.1427C32.1507 65.1427 32.5886 65.0112 32.961 64.7832ZM45.588 44.9781C43.3298 52.388 39.1632 58.9659 33.6609 64.1393C33.9586 63.7333 34.1345 63.2323 34.1345 62.6902V44.9781H45.588ZM47.487 32.1706C47.487 34.8686 47.2434 37.5098 46.7771 40.0732H34.1345V24.6599C32.7997 23.5106 31.9546 21.8084 31.9546 19.9087C31.9546 18.0091 32.7997 16.3069 34.1345 15.1576V0.653927C39.1351 5.49725 42.9866 11.52 45.2404 18.2738H44.2739C44.4144 18.795 44.4893 19.3431 44.4893 19.9087C44.4893 21.107 44.1531 22.2267 43.5697 23.1787H46.5646C47.1692 26.0811 47.487 29.0887 47.487 32.1706ZM18.3296 46.6685C20.6816 53.3885 24.6227 59.3619 29.7025 64.1382C29.4264 63.7614 29.2553 63.3029 29.2323 62.8057L29.2296 62.6902V44.9781H26.3003C27.1121 43.9215 27.5947 42.5987 27.5947 41.1633C27.5947 40.7915 27.5624 40.4272 27.5003 40.0732H29.2296V23.1787H16.7999C16.1953 26.0811 15.8775 29.0887 15.8775 32.1706C15.8775 33.9925 15.9886 35.7885 16.2043 37.5521C15.4835 38.5729 15.06 39.8186 15.06 41.1633C15.06 43.5387 16.3816 45.6055 18.3296 46.6685ZM29.2296 0.654284C24.2292 5.49754 20.3778 11.5202 18.1241 18.2738H29.2296V0.654284Z"
                                fill="currentColor"
                              ></path>
                            </g>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M29.2304 0.679388L29.2023 0.681836C24.2156 5.52034 20.3745 11.533 18.125 18.2737H29.2304V0.679388ZM27.9926 62.4398C28.4028 62.492 28.8154 62.5362 29.2304 62.5723L29.2304 44.9781H26.3009C25.1552 46.4693 23.3538 47.4305 21.328 47.4305C20.2421 47.4305 19.2207 47.1544 18.3302 46.6685C20.4111 52.6139 23.7359 57.9751 27.9926 62.4398ZM16.205 37.5519C15.9893 35.7885 15.8783 33.9927 15.8783 32.171C15.8783 29.089 16.1961 26.0812 16.8007 23.1786H29.2304V40.0732H27.5009C26.985 37.1314 24.4176 34.8958 21.328 34.8958C19.2113 34.8958 17.3397 35.9451 16.205 37.5519ZM34.1352 62.6148C34.5271 62.5877 34.9169 62.5532 35.3046 62.5117C39.995 57.6143 43.5613 51.6316 45.5889 44.9781L34.1352 44.9781L34.1352 62.6148ZM60.0116 44.9781C56.6309 52.0689 50.6413 57.6767 43.2845 60.5595C46.6182 55.9094 49.1545 50.649 50.6936 44.9781H60.0116ZM63.0195 31.6258C63.0195 34.5539 62.6144 37.3874 61.8572 40.0732H51.7555C51.9634 38.7969 52.1218 37.5039 52.2286 36.1963C53.3108 37.0864 54.6966 37.6208 56.2072 37.6208C59.6686 37.6208 62.4746 34.8148 62.4746 31.3534C62.4746 27.8921 59.6686 25.0861 56.2072 25.0861C54.6273 25.0861 53.184 25.6706 52.0817 26.6353C51.9501 25.4701 51.7774 24.3174 51.5652 23.1786L61.8572 23.1786C62.6144 25.8644 63.0195 28.6978 63.0195 31.6258ZM50.384 18.2737L60.0116 18.2737C56.4605 10.8251 50.0304 5.01304 42.1608 2.27685C45.825 6.99458 48.6422 12.403 50.384 18.2737ZM3.89888 44.9781C7.16126 51.8209 12.8533 57.2825 19.859 60.247C16.6347 55.6743 14.1767 50.5223 12.672 44.9781L3.89888 44.9781ZM11.6101 40.0732L2.05326 40.0732C1.29602 37.3874 0.890907 34.5539 0.890907 31.6258C0.890907 28.6978 1.29601 25.8644 2.05322 23.1786H11.8005C11.2573 26.0932 10.9733 29.0989 10.9733 32.1709C10.9733 34.8615 11.1911 37.5011 11.6101 40.0732ZM20.9936 2.55082C13.4687 5.38921 7.33556 11.0651 3.8988 18.2737H12.9816C14.6898 12.5163 17.4323 7.20354 20.9936 2.55082ZM46.7779 40.0732C47.2442 37.5099 47.4877 34.8689 47.4877 32.171C47.4877 29.089 47.1699 26.0812 46.5653 23.1786H43.5703C42.4686 24.9765 40.4857 26.176 38.2226 26.176C36.6609 26.176 35.2326 25.6048 34.1352 24.66L34.1352 40.0732L46.7779 40.0732ZM38.2226 13.6413C36.6609 13.6413 35.2326 14.2125 34.1352 15.1574V0.654297C39.1358 5.49752 42.9872 11.5202 45.241 18.2737H44.2745C43.5554 15.6052 41.1183 13.6413 38.2226 13.6413Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-views">Remote teams</div>
                        </div>
                        <div className="caption-box-views">
                          Keep your remote team connected <br />
                          and motivated, no matter where
                          <br /> they’re located around the world.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide-side-right">
                  <h4 className="text-header-hide-side-features">
                    Our product in action
                  </h4>
                  <hr className="hr-top-caption-header-hide-side-features" />
                  <div className="important-text-hide-side-Solutions-2">
                    Use case: Project management
                  </div>
                  <div className="caption-header-hide-side-features">
                    Keep tasks in order, deadlines on track, and team
                    <br /> members aligned with Trello.
                  </div>
                  <div className="important-text-hide-side-Solutions-2">
                    Use case: Brainstorming
                  </div>
                  <div className="caption-header-hide-side-features">
                    Unleash your team’s creativity and keep ideas <br />
                    visible, collaborative, and actionable.
                  </div>
                  <div className="important-text-hide-side-Solutions-2">
                    Use case: Meetings{" "}
                  </div>
                  <div className="caption-header-hide-side-features">
                    Empower your team meetings to be more
                    <br /> productive, empowering, and dare we say—fun.
                  </div>
                  <div className="important-text-hide-side-Solutions-2">
                    Use case: Task management
                  </div>
                  <div className="caption-header-hide-side-features">
                    Use Trello to track, manage, complete, and bring <br />
                    tasks together like the pieces of a puzzle, and
                    <br /> make your team’s projects a cohesive success
                    <br /> every time.
                  </div>
                </div>
              </div>
              <button
                className="item-header-pricing  relative"
                onClick={() => setStateTree((prevState) => !prevState)}
                style={{ position: "relative" }}
              >
                Plans
              </button>
              <div
                className="hide-side-features"
                // onMouseLeave={() => setState(false)}
                style={{
                  position: "absolute",
                  top: 20,
                  left: 0,
                  width: "100%",
                  height: stateTree ? 400 : 0,
                  background: "white",
                  overflow: "hidden",
                  transition: "height 500ms",
                }}
              >
                <div className="hide-side-left">
                  <div className="cont-hide-side-left">
                    <div className="cont-boxs-left-side-hide-features-row-2">
                      <div className="cont-views">
                        <div className="row-1-cont-views">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 46 65"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M39.4898 38.0009C47.9832 29.5074 47.9832 15.7367 39.4898 7.24318C30.5822 -1.66439 16.1402 -1.66439 7.23258 7.24318C6.98864 7.48712 6.75055 7.73682 6.51849 7.99208C-1.5614 16.88 -0.906394 30.6351 7.98148 38.7149L11.9763 42.3466V49.731H34.7461V42.3466L38.7409 38.7149C38.9961 38.4829 39.2458 38.2448 39.4898 38.0009ZM25.4829 10.0102C25.4829 8.58721 24.3294 7.43362 22.9063 7.43362C14.5263 7.43362 7.73301 14.227 7.73301 22.607V23.1795L7.73581 23.3008C7.79915 24.6675 8.92725 25.7561 10.3096 25.7561C11.7326 25.7561 12.8862 24.6026 12.8862 23.1795V22.607L12.8879 22.4187C12.9883 16.9716 17.4353 12.5868 22.9063 12.5868C24.3294 12.5868 25.4829 11.4332 25.4829 10.0102Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.9756 54.8838V56.8794C11.9756 61.1224 15.4152 64.5621 19.6582 64.5621H27.0627C31.3057 64.5621 34.7454 61.1224 34.7454 56.8794V54.8838L34.7453 54.8838H11.9756Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-Standard">Standard</div>
                        </div>
                        <div className="caption-box-views">
                          For teams that need to manage more <br />
                          work and scale collaboration.
                        </div>
                      </div>
                      <div className="cont-Premium">
                        <div className="row-1-cont-views">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 65 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M26.9976 4.47265L20.5966 17.4649L6.284 19.5483C4.88278 19.7523 3.58776 20.4133 2.59942 21.429L2.45904 21.5778C0.120359 24.1361 0.2185 28.1108 2.71579 30.5494L13.0726 40.6623L10.6277 54.9423C10.3883 56.3403 10.6157 57.7783 11.2746 59.0338L11.367 59.2038C13.0705 62.2298 16.8792 63.3687 19.9694 61.7413L32.7711 54.9993L45.5728 61.7413C46.826 62.4013 48.2616 62.6291 49.6572 62.3893L49.8438 62.3545C53.2449 61.668 55.5048 58.3903 54.9145 54.9423L52.4688 40.6623L62.8263 30.5494C63.8403 29.5593 64.5001 28.262 64.7037 26.8583L64.7279 26.673C65.1292 23.2193 62.7152 20.0515 59.2581 19.5483L44.9448 17.4649L38.5446 4.47265C37.9179 3.2007 36.8902 2.17117 35.6204 1.54343C32.4318 -0.0330011 28.5713 1.27846 26.9976 4.47265Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-Standard">Premium</div>
                        </div>
                        <div className="caption-box-views">
                          Best for teams up to 100 that need to <br />
                          track multiple projects and visualize
                          <br /> work in a variety of ways.
                        </div>
                      </div>
                      <div className="cont-Premium">
                        <div className="row-1-cont-views">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 65 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M38.9929 15.1289C40.2694 15.4199 41.2217 16.557 41.2217 17.9155C41.2217 19.4943 39.9355 20.7742 38.3489 20.7742C36.7623 20.7742 35.4762 19.4943 35.4762 17.9155C35.4762 16.557 36.4284 15.4199 37.7049 15.1289H27.0953C28.571 15.2488 29.731 16.4786 29.731 17.978C29.731 19.5568 28.4449 20.8367 26.8583 20.8367C25.2717 20.8367 23.9855 19.5568 23.9855 17.978C23.9855 16.4786 25.1456 15.2488 26.6213 15.1289H10.2425C7.704 15.1289 5.34277 17.1767 5.34277 19.7028V39.4512H60.1911V19.7028C60.1911 17.1767 58.1332 15.1289 55.5947 15.1289H38.9929Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16.7074 37.1377V4.76532C16.7074 2.23922 18.7653 0.191406 21.3038 0.191406H43.9028C46.4413 0.191406 48.4992 2.23922 48.4992 4.76532V37.1377H62.6716C63.7386 37.1377 64.6035 38.0027 64.6035 39.0696C64.6035 40.1366 63.7386 41.0015 62.6716 41.0015H2.53539C1.46845 41.0015 0.603516 40.1366 0.603516 39.0696C0.603516 38.0027 1.46845 37.1377 2.53539 37.1377H16.7074ZM28.9645 37.1377V31.1644C28.9645 29.215 30.5526 27.6348 32.5115 27.6348C34.4705 27.6348 36.0585 29.215 36.0585 31.1644V37.1377H28.9645ZM29.7306 17.9787C29.7306 16.3999 28.4444 15.12 26.8579 15.12C25.2713 15.12 23.9851 16.3999 23.9851 17.9787C23.9851 19.5575 25.2713 20.8374 26.8579 20.8374C28.4444 20.8374 29.7306 19.5575 29.7306 17.9787ZM38.3488 15.0575C39.9354 15.0575 41.2216 16.3374 41.2216 17.9162C41.2216 19.495 39.9354 20.7749 38.3488 20.7749C36.7622 20.7749 35.4761 19.495 35.4761 17.9162C35.4761 16.3374 36.7622 15.0575 38.3488 15.0575ZM29.7306 8.76872C29.7306 7.18991 28.4444 5.91002 26.8579 5.91002C25.2713 5.91002 23.9851 7.18991 23.9851 8.76872C23.9851 10.3475 25.2713 11.6274 26.8579 11.6274C28.4444 11.6274 29.7306 10.3475 29.7306 8.76872ZM38.3488 5.91002C39.9354 5.91002 41.2216 7.18991 41.2216 8.76872C41.2216 10.3475 39.9354 11.6274 38.3488 11.6274C36.7622 11.6274 35.4761 10.3475 35.4761 8.76872C35.4761 7.18991 36.7622 5.91002 38.3488 5.91002Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          <div className="header-box-Standard">Enterprise</div>
                        </div>
                        <div className="caption-box-views">
                          Everything your enterprise teams and <br />
                          admins need to manage projects.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="UiBannerstyles__Banner-sc-uif6rl-0 gfxJye">
                    <div>
                      <div class="UiBannerstyles__BannerTitleContainer-sc-uif6rl-2 idxJQb">
                        <div class="UiBannerstyles__BannerIcon-sc-uif6rl-1 efCdfJ">
                          <svg
                            width="44"
                            height="65"
                            viewBox="0 0 44 65"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M26.8662 1.12885C28.0159 -0.433068 30.49 0.573172 30.2232 2.49419L25.0065 40.0545H1.90981C0.37708 40.0545 -0.504269 38.3114 0.40436 37.077L26.8662 1.12885Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M41.4564 24.668C42.9892 24.668 43.8705 26.4111 42.9619 27.6455L16.5 63.5937C15.3503 65.1556 12.8762 64.1493 13.143 62.2283L18.3597 24.668L41.4564 24.668Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <h4 class="UiBannerstyles__BannerTitle-sc-uif6rl-3 kSIxPC">
                          Free plan
                        </h4>
                      </div>
                      <p class="UiBannerstyles__BannerDescription-sc-uif6rl-4 bgRfWz">
                        For individuals or small teams looking to keep work
                        organized.
                      </p>
                    </div>
                    <div>
                      <div
                        data-testid="ui-banner-button"
                        class="link-buttonstyles__BxpLink-sc-1utqn26-0 kTZRtw"
                      >
                        <a href="/tour">
                          <span>Take a tour of Trello</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide-side-right">
                  <h4 className="text-header-hide-side-features">
                    Meet Trello
                  </h4>
                  <hr className="hr-top-caption-header-hide-side-features" />
                  <div className="caption-header-hide-side-features">
                    Trello makes it easy for your team to get work <br />
                    done. No matter the project, workflow, or type of <br />
                    team, Trello can help keep things organized. It’s <br />
                    simple – sign-up, create a board, and you’re off!
                    <br />
                    Productivity awaits.
                  </div>

                  <button className="btn-header-hide-side-features">
                    Check out Trello
                  </button>
                </div>
              </div>
              <a className="item-header-pricing" href="">
                Pricing
              </a>
              <button
                className="item-header-pricing  relative"
                onClick={() => setStateFour((prevState) => !prevState)}
                style={{ position: "relative" }}
              >
                Resources
              </button>
              <div
                className="hide-side-features"
                // onMouseLeave={() => setState(false)}
                style={{
                  position: "absolute",
                  top: 20,
                  left: 0,
                  width: "100%",
                  height: stateFour ? 400 : 0,
                  background: "white",
                  overflow: "hidden",
                  transition: "height 500ms",
                }}
              >
                <div className="hide-side-left-2">
                  <div className="cont-hide-side-left">
                    <div className="cont-boxs-left-side-hide-features-row-2">
                      <div className="cont-views">
                        <div className="row-1-cont-views">
                          <div className="header-box-Standard">Standard</div>
                        </div>
                        <div className="caption-box-views">
                          For teams that need to manage more <br />
                          work and scale collaboration.
                        </div>
                      </div>
                      <div className="cont-Premium">
                        <div className="row-1-cont-views">
                          <div className="header-box-Standard">Premium</div>
                        </div>
                        <div className="caption-box-views">
                          Best for teams up to 100 that need to <br />
                          track multiple projects and visualize
                          <br /> work in a variety of ways.
                        </div>
                      </div>
                      <div className="cont-Premium">
                        <div className="row-1-cont-views">
                          <div className="header-box-Standard">Enterprise</div>
                        </div>
                        <div className="caption-box-views">
                          Everything your enterprise teams and <br />
                          admins need to manage projects.
                        </div>
                      </div>
                    </div>
                    <div className="cont-box-row-2-Resources">
                      <div className="cont-Premium">
                        <div className="row-1-cont-views">
                          <div className="header-box-Standard">Enterprise</div>
                        </div>
                        <div className="caption-box-views">
                          Everything your enterprise teams and <br />
                          admins need to manage projects.
                        </div>
                      </div>
                      <div className="cont-Premium">
                        <div className="row-1-cont-views">
                          <div className="header-box-Standard">Enterprise</div>
                        </div>
                        <div className="caption-box-views">
                          Everything your enterprise teams and <br />
                          admins need to manage projects.
                        </div>
                      </div>
                      <div className="cont-Premium">
                        <div className="row-1-cont-views">
                          <div className="header-box-Standard">Enterprise</div>
                        </div>
                        <div className="caption-box-views">
                          Everything your enterprise teams and <br />
                          admins need to manage projects.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide-side-right">
                  <h4 className="text-header-hide-side-features">
                    Meet Trello
                  </h4>
                  <hr className="hr-top-caption-header-hide-side-features" />
                  <div className="caption-header-hide-side-features">
                    Trello makes it easy for your team to get work <br />
                    done. No matter the project, workflow, or type of <br />
                    team, Trello can help keep things organized. It’s <br />
                    simple – sign-up, create a board, and you’re off!
                    <br />
                    Productivity awaits.
                  </div>

                  <button className="btn-header-hide-side-features">
                    Check out Trello
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <a href="/login" className="btn log-in-pricinig">
              Login
            </a>

            <a href="/about" className="btn sign-up-pricing">
              Get Trello for free
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
