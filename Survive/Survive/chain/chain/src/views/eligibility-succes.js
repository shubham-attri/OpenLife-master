import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group365 from '../components/group365'
import Group223 from '../components/group223'
import './eligibility-succes.css'

const EligibilitySucces = (props) => {
  return (
    <div className="eligibility-succes-container">
      <Helmet>
        <title>Eligibility-Succes - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Eligibility-Succes - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="eligibility-succes-eligibility">
        <button className="eligibility-succes-button">
          <span className="eligibility-succes-text TextManrope20Medium">
            <span>Do not have an Account? Sign Up</span>
          </span>
          <img
            alt="IconsFeatherarrowrightcircleI786"
            src="/playground_assets/iconsfeatherarrowrightcirclei786-lmj9.svg"
            className="eligibility-succes-icons-featherarrowrightcircle"
          />
        </button>
        <Link to="/landing-page" className="eligibility-succes-navlink">
          <Group365
            rootClassName="group365-root-class-name"
            className="eligibility-succes-component"
          ></Group365>
        </Link>
        <Link to="/landing-page" className="eligibility-succes-navlink1">
          <Group223
            rootClassName="group223-root-class-name"
            className="eligibility-succes-component1"
          ></Group223>
        </Link>
        <img
          alt="OpenLife917860"
          src="/playground_assets/openlife917860-s14e-400h.png"
          className="eligibility-succes-open-life91"
        />
        <span className="eligibility-succes-text02">
          <span>Verification and Eligibility</span>
        </span>
        <div className="eligibility-succes-group60">
          <img
            alt="Container7860"
            src="/playground_assets/container7860-odb-700h.png"
            className="eligibility-succes-container1"
          />
          <span className="eligibility-succes-text04">
            <span>
              <span>
                Congratulations, you are
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>an Organ Donor</span>
            </span>
          </span>
          <div className="eligibility-succes-group17">
            <span className="eligibility-succes-text11">
              <span>Check Eligibility</span>
            </span>
          </div>
          <div className="eligibility-succes-group13">
            <span className="eligibility-succes-text13">
              <span>Phone Number*</span>
            </span>
            <input
              type="text"
              placeholder="Enter Your Contact Number"
              className="eligibility-succes-textinput input"
            />
          </div>
          <div className="eligibility-succes-group37">
            <span className="eligibility-succes-text15">
              <span>Identification Number*</span>
            </span>
            <input
              type="text"
              placeholder="Enter Your Identification Number"
              className="eligibility-succes-textinput1 input"
            />
          </div>
          <span className="eligibility-succes-text17">
            <span>Status:</span>
          </span>
          <img
            alt="IconsPhosphorSystemCheckCircle7861"
            src="/playground_assets/iconsphosphorsystemcheckcircle7861-45v.svg"
            className="eligibility-succes-icons-phosphor-system-check-circle"
          />
        </div>
      </div>
    </div>
  )
}

export default EligibilitySucces
