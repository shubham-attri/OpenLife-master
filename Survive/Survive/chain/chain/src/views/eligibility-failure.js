import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group364 from '../components/group364'
import Group222 from '../components/group222'
import './eligibility-failure.css'

const EligibilityFailure = (props) => {
  return (
    <div className="eligibility-failure-container">
      <Helmet>
        <title>Eligibility-Failure - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Eligibility-Failure - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="eligibility-failure-eligibility">
        <button className="eligibility-failure-button">
          <span className="eligibility-failure-text TextManrope20Medium">
            <span>Do not have an Account? Sign Up</span>
          </span>
          <img
            alt="IconsFeatherarrowrightcircleI786"
            src="/playground_assets/iconsfeatherarrowrightcirclei786-1le.svg"
            className="eligibility-failure-icons-featherarrowrightcircle"
          />
        </button>
        <img
          alt="Container7860"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/8dff39b6-33ad-4dd3-beed-bb4ad248ed74?org_if_sml=14288"
          className="eligibility-failure-container1"
        />
        <img
          alt="IconsFeatherxcircle7861"
          src="/playground_assets/iconsfeatherxcircle7861-3cn.svg"
          className="eligibility-failure-icons-featherxcircle"
        />
        <div className="eligibility-failure-group17">
          <span className="eligibility-failure-text02">
            <span>Check Eligibility</span>
          </span>
        </div>
        <div className="eligibility-failure-group13">
          <span className="eligibility-failure-text04">
            <span>Phone Number*</span>
          </span>
          <input
            type="text"
            placeholder="Enter Your Contact Number"
            className="eligibility-failure-textinput input"
          />
        </div>
        <div className="eligibility-failure-group37">
          <span className="eligibility-failure-text06">
            <span>Identification Number*</span>
          </span>
          <input
            type="text"
            placeholder="Enter Your Identification Number"
            className="eligibility-failure-textinput1 input"
          />
        </div>
        <Link to="/landing-page" className="eligibility-failure-navlink">
          <Group364
            rootClassName="group364-root-class-name"
            className="eligibility-failure-component"
          ></Group364>
        </Link>
        <Link to="/landing-page" className="eligibility-failure-navlink1">
          <Group222
            rootClassName="group222-root-class-name"
            className="eligibility-failure-component1"
          ></Group222>
        </Link>
        <img
          alt="OpenLife917861"
          src="/playground_assets/openlife917861-marn-400h.png"
          className="eligibility-failure-open-life91"
        />
        <span className="eligibility-failure-text08">
          <span>Verification and Eligibility</span>
        </span>
        <span className="eligibility-failure-text10">
          <span>Status:</span>
        </span>
        <span className="eligibility-failure-text12">
          <span>
            <span>
              We’re Sorry, you’re not
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>Eligible</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default EligibilityFailure
