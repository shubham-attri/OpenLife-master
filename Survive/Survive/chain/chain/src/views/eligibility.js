import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group363 from '../components/group363'
import Group221 from '../components/group221'
import Group17 from '../components/group17'
import './eligibility.css'

const Eligibility = (props) => {
  return (
    <div className="eligibility-container">
      <Helmet>
        <title>Eligibility - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Eligibility - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="eligibility-eligibility">
        <Link to="/landing-page" className="eligibility-navlink">
          <Group363
            rootClassName="group363-root-class-name"
            className="eligibility-component"
          ></Group363>
        </Link>
        <Link to="/landing-page" className="eligibility-navlink1">
          <Group221
            rootClassName="group221-root-class-name"
            className="eligibility-component1"
          ></Group221>
        </Link>
        <div className="eligibility-open-life91">
          <span className="eligibility-text">
            <span>Verification and Eligibility</span>
          </span>
        </div>
        <div className="eligibility-group59">
          <Group17 rootClassName="group17-root-class-name"></Group17>
          <div className="eligibility-group13">
            <span className="eligibility-text02">
              <span>Phone Number*</span>
            </span>
            <input
              type="text"
              placeholder="Enter Your Contact Number"
              className="eligibility-textinput input"
            />
          </div>
          <div className="eligibility-group37">
            <span className="eligibility-text04">
              <span>Identification Number*</span>
            </span>
            <input
              type="text"
              placeholder="Enter Your Identification Number"
              className="eligibility-textinput1 input"
            />
          </div>
          <span className="eligibility-text06">
            <span>Status:</span>
          </span>
          <span className="eligibility-text08">
            <span>Pending....</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Eligibility
