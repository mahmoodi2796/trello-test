import React, { useState } from "react";
import tick from "../static/images/svg/tick.svg";
import sec from "../static/images/svg/sec.svg";
import trellofooterpricing from "../static/images/svg/trello-footer-pricing.svg";
import "./Btnpricing.css";

export default function Mianpricing() {
  const [countTwo, setCountTwo] = useState(false);
  const [countTree, setCountTree] = useState(false);
  const [countFour, setCountFour] = useState(false);
  const [countFive, setCountFive] = useState(false);
  const [countSix, setCountSix] = useState(false);
  const [countSeven, setCountSeven] = useState(false);
  const [countEghit, setCountEghit] = useState(false);
  return (
    <>
      <div className="top-main-pricing">
        <h1 className="h1-pricing">Trello your way.</h1>
        <p className="p-pricing">
          Trusted by millions, Trello powers teams all around the world. <br />
          Explore which option is right for you.
        </p>
      </div>

      <div className="main-pricing">
        <div className="cart-row-1">
          <div className="cart-buy-account">
            <div className="type">FREE</div>
            <div className="price">
              $<span className="number-price">0</span>USD
            </div>
            <div className="caption-price"> Free for your whole team</div>
            <div className="caption-cart">
              For individuals or teams looking <br /> to organize anything.
            </div>
            <a className="kjyCFg" href="/signup">
              <span>Get started</span>
            </a>
            <div className="Site-Features-1">
              <h3>Included in Free:</h3>

              <div className="Included-item">
                {" "}
                <img src={tick} />
                Unlimited cards
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Up to 10 boards per <br /> Workspace
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Unlimited Power-Ups per
                <br /> board
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Unlimited storage <br />
                (10MB/file)
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                250 Workspace command
                <br /> runs per month
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Custom backgrounds
                <br /> stickers
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Unlimited activity log
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Assignee and due dates
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                iOS and Android mobile apps
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                2-factor authentication
              </div>
            </div>
          </div>
          <div className="cart-buy-account">
            <div className="type">STANDARD</div>
            <div className="price">
              $<span className="number-price">5</span>USD
            </div>
            <div className="caption-price">
              Per user per month billed annually ($6 <br /> billed monthly)
            </div>
            <div className="caption-cart-2">
              For teams that need to manage <br /> more work and scale
              <br /> collaboration.
            </div>
            <a className="kjyCFg-2" href="/about">
              <span>Sign up now</span>
            </a>
            <div className="Site-Features-2">
              <h3>Everything in Free, plus:</h3>

              <div className="Included-item">
                {" "}
                <img src={tick} />
                Unlimited boards
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Advanced checklists
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Custom Fields
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Unlimited storage <br />
                (250MB/file)
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                1,000 Workspace command <br />
                runs per month
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Single board guests
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Saved searches
              </div>
              <div className="margin-top-a-1">
                {" "}
                <a
                  className="a-down-cart-Features"
                  hre="https://trello.com/standard"
                >
                  Learn more about Standard
                </a>
              </div>
            </div>
          </div>
          <div className="cart-buy-account">
            <div className="type">PREMIUM</div>
            <div className="price">
              $<span className="number-price">10</span>USD
            </div>
            <div className="caption-price">
              Per user per month billed annually ($6 <br /> billed monthly)
            </div>
            <div className="caption-cart-2">
              Best for teams up to 100 that <br /> need to track multiple
              projects <br />
              and visualize work in a variety
              <br /> of ways.
            </div>
            <a className="kjyCFg-3" href="/signup">
              <span>Try for free</span>
            </a>
            <div className="Site-Features-3">
              <h3>Everything in Standard, plus:</h3>

              <div className="Included-item">
                {" "}
                <img src={tick} />
                Dashboard view
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Timeline view
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Workspace
                <br /> Table view
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Calendar view
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Map view
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Unlimited Workspace
                <br /> command runs{" "}
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Admin and security features
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Workspace-level templates
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Collections
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Observers
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Priority support
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Google Apps sign-on
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Simple data export
              </div>
              <div className="margin-top-a-2">
                <a
                  className="a-down-cart-Features"
                  hre="https://trello.com/premium"
                >
                  Learn more about Standard
                </a>
              </div>
            </div>
          </div>

          <div className="cart-buy-account null-margin">
            <div className="type">ENTERPRISE</div>
            <div className="price">
              $<span className="number-price">17.50</span>USD
            </div>
            <div className="caption-price">
              Per user per month billed annually
              <br /> ($210.00 annual price per user)
            </div>
            <div className="caption-cart-2">
              For organizations that need to
              <br /> connect work across teams
              <br /> with more security and controls.
            </div>
            <a className="kjyCFg-4" href="/signup">
              <span>Contact sales</span>
            </a>
            <div className="Site-Features-4">
              <h3>Everything in Premium, plus:</h3>

              <div className="Included-item">
                {" "}
                <img src={tick} />
                Unlimited Workspaces
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Organization wide <br />
                permissions
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Organization visible boards
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Public board management
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Multi-board guests
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Attachment permissions{" "}
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Power-Up administration
              </div>
              <div className="Included-item">
                {" "}
                <img src={tick} />
                Free SSO and user
                <br /> provisioning with Atlassian <br />
                Access
              </div>
              <div className="margin-top-a">
                {" "}
                <a
                  className="a-down-cart-Features"
                  hre="https://trello.com/enterprise"
                >
                  Learn more about Enterprise
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-2">
        <h2 className="important-text-main-2">Compare our plans</h2>
        <input
          type="search"
          data-testid="feature-search"
          value=""
          placeholder="Search"
          class="UiFeatureComparisonTablestyles__SearchInput-sc-d89oq6-4 ioDTnz"
        ></input>
      </div>
      <section className="UiSection__Section-sc-3wi7m3-0 hrmOyD ui-section">
        <div className="grid__Container-sc-p40pqe-0 iNTDis ui-section__container">
          <div className="grid__Row-sc-p40pqe-1 oFuOf ui-section__row">
            <div className="grid__Column-sc-p40pqe-2 iXkSiH ui-column">
              <table
                data-testid="feature-comparison-table"
                className="UiFeatureComparisonTablestyles__FeatureTable-sc-d89oq6-0 cGgHnD"
              >
                <thead data-testid="feature-comparison-table-thead">
                  <tr>
                    <th></th>
                    <th data-product="Free">
                      <div>Free</div>
                    </th>
                    <th data-product="Standard">
                      <div>Standard</div>
                    </th>
                    <th data-product="Premium">
                      <div>Premium</div>
                    </th>
                    <th data-product="Enterprise">
                      <img src={tick} />
                      <div>Enterprise</div>
                    </th>
                  </tr>
                </thead>
                <tbody data-testid="feature-comparison-table-tbody">
                  <tr>
                    <td>
                      <strong>
                        <span>Unlimited cards</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs">
                        true
                      </span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs">
                        true
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Built-in automation</span>
                      </strong>
                      <p>
                        Powerful no-code automation is built into every Trello
                        board.
                      </p>
                      <p>
                        <a
                          href="/butler-automation"
                          data-testid="3x0eG2Q9WbpKAD2pHr8vGG"
                        >
                          Start automating
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Assignee and due dates</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>iOS and Android mobile apps</span>
                      </strong>
                      <p>
                        <a
                          href="/platforms"
                          data-testid="1XINBI8RGB0XqnU4nrMFe7"
                        >
                          Download mobile apps
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Desktop app</span>
                      </strong>
                      <p>
                        <a
                          href="/platforms"
                          data-testid="15CSPzBT0rHFY51X7jKivI"
                        >
                          Download desktop app
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Unlimited activity logs</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Trello templates</span>
                      </strong>
                      <p>
                        Give your team a blueprint for success with tried-and-
                        templates from the Trello community.
                      </p>
                      <p>
                        <a
                          href="/templates"
                          data-testid="1a7Pbkhs8uF4wJCbs2CPTX"
                        >
                          Try a template
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>2-Factor Authentication</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Mobile Device Management</span>
                      </strong>
                      <p>
                        Enforce security controls on mobile app usage through
                        built-in mobile device management (MDM) support for iOS
                        and Android.
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Unlimited Power-Ups</span>
                      </strong>
                      <p>
                        Integrate with more than 200+ apps and tools your team
                        depends on like Slack, Google Drive, Salesforce, Dropbox
                        and more directly into your Trello boards. (Note: Some
                        Power-Ups by our partners require an additional
                        subscription fee.)
                      </p>
                      <p>
                        <a
                          href="/power-ups"
                          data-testid="5DiqOXQU8Bvr13Cu677UbU"
                        >
                          Learn more
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Unlimited boards</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Advanced checklists</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Custom Fields</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Dashboard view</span>
                        <span>NEW</span>
                      </strong>
                      <p>
                        Trello’s reporting tool lets you access real-time
                        insights and communicate your team’s progress in a
                        visual and meaningful way.{" "}
                      </p>
                      <p>
                        <a href="/views" data-testid="4SnauK4G54Ay28XREzdnWY">
                          Learn more
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Timeline view</span>
                        <span>NEW</span>
                      </strong>
                      <p>
                        Plan your project, stay on top of every sprint, and see
                        how all of the moving parts fit together over time with
                        Timeline.{" "}
                      </p>
                      <p>
                        <a href="/views" data-testid="4SnauK4G54Ay28XREzdnWY">
                          Learn more
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Workspace Table view</span>
                        <span>BETA</span>
                      </strong>
                      <p>
                        See your projects and tasks across Workspaces and boards
                        in a spreadsheet-style list that can be sorted and
                        filtered to drill down to exactly the cards you need to
                        see.
                      </p>
                      <p>
                        <a href="/views" data-testid="4SnauK4G54Ay28XREzdnWY">
                          Learn more
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Calendar view</span>
                        <span>NEW</span>
                      </strong>
                      <p>
                        Calendar displays start dates, due dates, and advanced
                        checklist items so you can see what lies ahead for your
                        project and stay on top of today’s to-dos.
                      </p>
                      <p>
                        <a href="/views" data-testid="4SnauK4G54Ay28XREzdnWY">
                          Learn more
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Map view</span>
                      </strong>
                      <p>
                        Plan an offsite, scout new office locations, or manage
                        product distribution points by adding locations to your
                        cards and visualizing them geographically on a map.
                      </p>
                      <p>
                        <a href="/views" data-testid="4SnauK4G54Ay28XREzdnWY">
                          Learn more
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Workspace-level templates</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Command run administration</span>
                      </strong>
                      <p>
                        Premium or Enterprise administrators can disable
                        commands on behalf of other users, and perform other
                        command maintenance.
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Board collections</span>
                      </strong>
                      <p>
                        Premium and Enterprise teams can use Board Collections
                        to easily group boards together whether by Workspace,
                        department, or major project.
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Priority support</span>
                      </strong>
                      <p>
                        Customers with Premium or Enterprise get priority email
                        support, meaning we’ll make sure your questions get
                        answered within one business day.
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Observers</span>
                      </strong>
                      <p>
                        Observers are a Premium security setting that limit a
                        user’s actions within a board.
                      </p>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Domain-restricted invites</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Deactivate members</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Google Apps Sign-on</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Simple data export</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>SAML SSO via Atlassian Access</span>
                      </strong>
                      <p>
                        Atlassian Access is a separate subscription that your
                        company can enable across all your Atlassian products
                        and starts at $3/month/user.
                      </p>
                      <p>
                        <a
                          href="https://www.atlassian.com/software/access"
                          target="_blank"
                          rel="noopener"
                          data-testid="4ye3Ul6ng6z0GdhFBCVWXS"
                        >
                          Learn more
                        </a>
                      </p>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Unlimited command runs</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Unlimited Workspaces</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Power-Up administration</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Attachment restrictions</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Organization wide permissions</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Organization visible boards</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span>Public board management</span>
                      </strong>
                    </td>
                    <td data-product="Free">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Standard">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Premium">
                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__X-sc-d89oq6-2 gALlrn djvluQ">
                        false
                      </span>
                    </td>
                    <td data-product="Enterprise">
                      <img src={tick} />

                      <span className="UiFeatureComparisonTablestyles__ProductHasFeature-sc-d89oq6-1 UiFeatureComparisonTablestyles__Check-sc-d89oq6-3 gALlrn bzkLFs"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="StyledMarkdown-sc-1dq67zk-0 kMHGJv"></div>
            </div>
          </div>
        </div>
      </section>

      <h3 className="text-down-table">
        Didn’t find what you were looking for?
      </h3>
      <div className="cont-kjyCFg">
        <a
          className="kjyCFg"
          href="https://help.trello.com/article/724-submitting-feature-requests-for-trello"
          target="_blank"
          rel="noopener"
        >
          <span>Make a suggestion</span>
        </a>
      </div>
      <h2 className="text-down-table">Frequently asked questions</h2>

      <div className="cont-question">
        <div
          data-open="false"
          className="UiAccordionstyles__ListItem-sc-v3jyki-2 jfYqRs"
        >
          <button className="not-button" onClick={() => setCountTwo(!countTwo)}>
            <h3 data-testid="list-accordion-click">
              Does Trello offer a Premium free trial?
            </h3>
          </button>
          <div style={{ maxHeight: countTwo ? "100px" : "0px" }}>
            <p className="captin-question">
              We sure do. All users can enroll their Workspace in a{" "}
              <a href="/premium">free trial of Trello Premium</a>. With that
              trial your Workspace will get <br /> access to create unlimited
              Trello boards, automate as much as you’d like, take advantage of
              Timeline, Dashboard, and other <br />
              new views, and much more!
            </p>
          </div>
        </div>

        <hr className="hr-question" />

        <div
          data-open="false"
          className="UiAccordionstyles__ListItem-sc-v3jyki-2 jfYqRs"
        >
          <button
            className="not-button"
            onClick={() => setCountTree(!countTree)}
          >
            <h3 data-testid="list-accordion-click">
              Does Trello offer a Premium free trial?
            </h3>
          </button>
          <div style={{ maxHeight: countTree ? "100px" : "0px" }}>
            <p className="captin-question">
              We sure do. All users can enroll their Workspace in a{" "}
              <a href="/premium">free trial of Trello Premium</a>. With that
              trial your Workspace will get <br /> access to create unlimited
              Trello boards, automate as much as you’d like, take advantage of
              Timeline, Dashboard, and other <br />
              new views, and much more!
            </p>
          </div>
        </div>

        <hr className="hr-question" />

        <div
          data-open="false"
          className="UiAccordionstyles__ListItem-sc-v3jyki-2 jfYqRs"
        >
          <button
            className="not-button"
            onClick={() => setCountFour(!countFour)}
          >
            <h3 data-testid="list-accordion-click">
              Does Trello offer a Premium free trial?
            </h3>
          </button>
          <div style={{ maxHeight: countFour ? "100px" : "0px" }}>
            <p className="captin-question">
              We sure do. All users can enroll their Workspace in a{" "}
              <a href="/premium">free trial of Trello Premium</a>. With that
              trial your Workspace will get <br /> access to create unlimited
              Trello boards, automate as much as you’d like, take advantage of
              Timeline, Dashboard, and other <br />
              new views, and much more!
            </p>
          </div>
        </div>

        <hr className="hr-question" />

        <div
          data-open="false"
          className="UiAccordionstyles__ListItem-sc-v3jyki-2 jfYqRs"
        >
          <button
            className="not-button"
            onClick={() => setCountFive(!countFive)}
          >
            <h3 data-testid="list-accordion-click">
              Does Trello offer a Premium free trial?
            </h3>
          </button>
          <div style={{ maxHeight: countFive ? "100px" : "0px" }}>
            <p className="captin-question">
              We sure do. All users can enroll their Workspace in a{" "}
              <a href="/premium">free trial of Trello Premium</a>. With that
              trial your Workspace will get <br /> access to create unlimited
              Trello boards, automate as much as you’d like, take advantage of
              Timeline, Dashboard, and other <br />
              new views, and much more!
            </p>
          </div>
        </div>

        <hr className="hr-question" />

        <div
          data-open="false"
          className="UiAccordionstyles__ListItem-sc-v3jyki-2 jfYqRs"
        >
          <button className="not-button" onClick={() => setCountSix(!countSix)}>
            <h3 data-testid="list-accordion-click">
              Does Trello offer a Premium free trial?
            </h3>
          </button>
          <div style={{ maxHeight: countSix ? "100px" : "0px" }}>
            <p className="captin-question">
              We sure do. All users can enroll their Workspace in a{" "}
              <a href="/premium">free trial of Trello Premium</a>. With that
              trial your Workspace will get <br /> access to create unlimited
              Trello boards, automate as much as you’d like, take advantage of
              Timeline, Dashboard, and other <br />
              new views, and much more!
            </p>
          </div>
        </div>

        <hr className="hr-question" />

        <div
          data-open="false"
          className="UiAccordionstyles__ListItem-sc-v3jyki-2 jfYqRs"
        >
          <button
            className="not-button"
            onClick={() => setCountSeven(!countSeven)}
          >
            <h3 data-testid="list-accordion-click">
              Does Trello offer a Premium free trial?
            </h3>
          </button>
          <div style={{ maxHeight: countSeven ? "100px" : "0px" }}>
            <p className="captin-question">
              We sure do. All users can enroll their Workspace in a{" "}
              <a href="/premium">free trial of Trello Premium</a>. With that
              trial your Workspace will get <br /> access to create unlimited
              Trello boards, automate as much as you’d like, take advantage of
              Timeline, Dashboard, and other <br />
              new views, and much more!
            </p>
          </div>
        </div>

        <hr className="hr-question" />

        <div
          data-open="false"
          className="UiAccordionstyles__ListItem-sc-v3jyki-2 jfYqRs"
        >
          <button
            className="not-button"
            onClick={() => setCountEghit(!countEghit)}
          >
            <h3 data-testid="list-accordion-click">
              Does Trello offer a Premium free trial?
            </h3>
          </button>
          <div style={{ maxHeight: countEghit ? "100px" : "0px" }}>
            <p className="captin-question">
              We sure do. All users can enroll their Workspace in a{" "}
              <a href="/premium">free trial of Trello Premium</a>. With that
              trial your Workspace will get <br /> access to create unlimited
              Trello boards, automate as much as you’d like, take advantage of
              Timeline, Dashboard, and other <br />
              new views, and much more!
            </p>
          </div>
        </div>

        <hr className="hr-question" />
      </div>

      <div className="cont-Security">
        <div className="cont-Security-left">
          <img className="sec" src={sec} />
        </div>
        <div className="cont-Security-right">
          <h3 className="important-text-Security">
            Best-in-class security and centralized administration with Atlassian
            <br />
            Access
          </h3>
          <ul>
            <li>SAML single sign-on</li>
            <li>Enforced 2FA</li>
            <div className="caption-text-security">
              Atlassian Access is a separate subscription that your company can
              enable
              <br /> across all your Atlassian products and starts at
              $3/month/user. Trello is an
              <br /> Atlassian product.
            </div>
            <a className="kjyCFg-10" href="/about">
              <span>learn more</span>
            </a>
          </ul>
        </div>
      </div>
      <div className="cont-footer-pricing-page">
        <div className="footer-pricing-page-row-1">
          <div className="cont-column-1-footer-pricing-page rows-footer-pricing-page">
            <img className="trellofooterpricing" src={trellofooterpricing} />
            <div className="log-in-column-1-footer-pricing-page">Log in</div>
          </div>
          <div className="cont-column-2-footer-pricing-page rows-footer-pricing-page">
            <div className="log-in-column-2-footer-pricing-page">
              About trello
            </div>
            <div className="log-in-column-1-footer-pricing-page font-10 ">
              What’s behind the boards.
            </div>
            <div className="cont-column-3-footer-pricing-page rows-footer-pricing-page bist">
              <div className="about-column-2-footer-pricing-page ">
                Contact us
              </div>
              <div className="log-in-column-1-footer-pricing-page font-10">
                Need anything? Get in touch and <br /> we can help.
              </div>
            </div>
          </div>
          <div className="cont-column-3-footer-pricing-page rows-footer-pricing-page">
            <div className="about-column-2-footer-pricing-page">jobs</div>
            <div className="log-in-column-1-footer-pricing-page font-10">
              Learn about open roles on the
              <br /> Trello team.
            </div>
          </div>
          <div className="cont-column-3-footer-pricing-page rows-footer-pricing-page">
            <div className="about-column-2-footer-pricing-page">Apps</div>
            <div className="log-in-column-1-footer-pricing-page font-10">
              Download the Trello App for your
              <br /> Desktop or Mobile devices.
            </div>
          </div>
          <div className="cont-column-3-footer-pricing-page rows-footer-pricing-page">
            <div className="about-column-2-footer-pricing-page">
              Integrations
            </div>
            <div className="log-in-column-1-footer-pricing-page">
              Get perspective with Trello and
              <br /> your favorite services.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
