import React from "react";
import "./Login.css";
import trello from "../static/images/png/trello-sign-up.png";
import signgoogle from "../static/images/svg/sign-in-with-google.svg";
import sigmmirosoft from "../static/images/svg/microsoft-logo.svg";
import signapple from "../static/images/svg/apple-logo-black.svg";
import footerleft from "../static/images/svg/footer-left.svg";
import footerright from "../static/images/svg/footer-right.svg";
import atlassian from "../static/images/svg/atlassian-logo-blue-small.svg";

export default function login() {
  return (
    <>
      <div className="cont-About">
        <div className="div-image-trello">
          <img className="image-trello" src={trello} />
        </div>
        <div className="cont-div">
          <div className="cart-sign-up">
            <div className="header-cart-sign-up">Sign up for your account</div>{" "}
            <div className="cont-input-eamil-cart-sign-up">
              <input
                className="input-eamil-cart-sign-up"
                placeholder="Enter email"
                type="email"
              />
            </div>
            <input
              className="input-eamil-cart-sign-up"
              placeholder="Enter password"
              type="password"
            />
            <button className="btn-log-in">Log in</button>
            <div className="or-cart-sign-up">OR</div>
            <button className="sign-google">
              {" "}
              <img className="signgoogle" src={signgoogle} /> Continue with
              Google
            </button>
            <button className="sign-Microsoft">
              {" "}
              <img className="sigmmirosoft" src={sigmmirosoft} /> Continue with
              Microsoft
            </button>
            <button className="sign-apple">
              {" "}
              <img className="icon-apple" src={signapple} /> Continue with Apple
            </button>
            <a href="" className="have-account">
              Log in with SSO{" "}
            </a>
            <hr />
            <a href="" className="have-account-2">
              Can't log in? Sign up for an account
            </a>
          </div>
        </div>
        <div className="footer-log-in">
          <img className="image-footer" src={footerleft} />

          <div className="cont-mid-footer">
            <div class="select-container">
              {" "}
              <select name="language-picker" id="language-picker">
                {" "}
                <option value="choose-one" id="choose" disabled="true">
                  Select your language…
                </option>{" "}
                <option value="cs" data-url="https://trello.com/cs/signup">
                  Čeština
                </option>{" "}
                <option value="de" data-url="https://trello.com/de/signup">
                  Deutsch
                </option>{" "}
                <option value="en" data-url="https://trello.com/en/signup">
                  English
                </option>{" "}
                <option
                  value="en-AU"
                  data-url="https://trello.com/en-AU/signup"
                >
                  English (AU)
                </option>{" "}
                <option
                  value="en-GB"
                  data-url="https://trello.com/en-GB/signup"
                >
                  English (UK)
                </option>{" "}
                <option
                  value="en-US"
                  data-url="https://trello.com/en-US/signup"
                >
                  English (US)
                </option>{" "}
                <option value="es" data-url="https://trello.com/es/signup">
                  Español
                </option>{" "}
                <option value="fr" data-url="https://trello.com/fr/signup">
                  Français
                </option>{" "}
                <option value="it" data-url="https://trello.com/it/signup">
                  Italiano
                </option>{" "}
                <option value="hu" data-url="https://trello.com/hu/signup">
                  Magyar
                </option>{" "}
                <option value="nl" data-url="https://trello.com/nl/signup">
                  Nederlands
                </option>{" "}
                <option value="nb" data-url="https://trello.com/nb/signup">
                  Norsk (bokmål)
                </option>{" "}
                <option value="pl" data-url="https://trello.com/pl/signup">
                  Polski
                </option>{" "}
                <option
                  value="pt-BR"
                  data-url="https://trello.com/pt-BR/signup"
                >
                  Português (Brasil)
                </option>{" "}
                <option value="fi" data-url="https://trello.com/fi/signup">
                  Suomi
                </option>{" "}
                <option value="sv" data-url="https://trello.com/sv/signup">
                  Svenska
                </option>{" "}
                <option value="vi" data-url="https://trello.com/vi/signup">
                  Tiếng Việt
                </option>{" "}
                <option value="tr" data-url="https://trello.com/tr/signup">
                  Türkçe
                </option>{" "}
                <option value="ru" data-url="https://trello.com/ru/signup">
                  Русский
                </option>{" "}
                <option value="uk" data-url="https://trello.com/uk/signup">
                  Українська
                </option>{" "}
                <option value="th" data-url="https://trello.com/th/signup">
                  ภาษาไทย
                </option>{" "}
                <option
                  value="zh-Hans"
                  data-url="https://trello.com/zh-Hans/signup"
                >
                  中文 (简体)
                </option>{" "}
                <option
                  value="zh-Hant"
                  data-url="https://trello.com/zh-Hant/signup"
                >
                  中文 (繁體)
                </option>{" "}
                <option value="ja" data-url="https://trello.com/ja/signup">
                  日本語
                </option>{" "}
              </select>{" "}
            </div>
            <img className="atlassian" src={atlassian} />
            <div className="cont-a">
              <a className="item-a" href="https://trello.com/templates">
                Templates
              </a>
              <a className="item-a" href="https://trello.com/pricing">
                Pricing
              </a>
              <a className="item-a" href="https://trello.com/platforms">
                Apps
              </a>
              <a
                className="item-a"
                href="https://www.atlassian.com/company/careers/trello"
              >
                Jobs
              </a>
              <a className="item-a" href="https://blog.trello.com/">
                Blog
              </a>
              <a
                className="item-a"
                href="https://developer.atlassian.com/cloud/trello/"
              >
                Developers
              </a>
              <a className="item-a" href="https://trello.com/about">
                About
              </a>
              <a className="item-a" href="https://help.trello.com/">
                Help
              </a>
              <a className="item-a" href="">
                Cookie Settings
              </a>
            </div>
          </div>

          <img className="image-footer" src={footerright} />
        </div>
      </div>{" "}
    </>
  );
}
