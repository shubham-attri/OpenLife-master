import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group3612 from '../components/group3612'
import Group226 from '../components/group226'
import Screenshot202301061958501 from '../components/screenshot202301061958501'
import './organ-matching-a1.css'

const OrganMatchingA1 = (props) => {
  return (
    <div className="organ-matching-a1-container">
      <Helmet>
        <title>Organ-Matching-A1 - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Organ-Matching-A1 - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="organ-matching-a1-matching-i-ia">
        <Link to="/landing-page" className="organ-matching-a1-navlink">
          <Group3612
            rootClassName="group3612-root-class-name"
            className="organ-matching-a1-component"
          ></Group3612>
        </Link>
        <span className="organ-matching-a1-text">
          <span>Import From Seed</span>
        </span>
        <Link to="/landing-page" className="organ-matching-a1-navlink1">
          <Group226
            rootClassName="group226-root-class-name"
            className="organ-matching-a1-component1"
          ></Group226>
        </Link>
        <div className="organ-matching-a1-container1">
          <div className="organ-matching-a1-container2">
            <span className="organ-matching-a1-text02">
              <span>Sign in with Face ID?</span>
            </span>
            <div className="organ-matching-a1-container3">
              <span className="organ-matching-a1-text04">
                <span>
                  I agree to
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <img
                alt="IMAGE7Lightimportseedphrasefilledform7465"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/edda6ac6-5fcb-4d2f-9ee7-04badfb97785?org_if_sml=11672"
                className="organ-matching-a1-i-m-a-g-e7lightimportseedphrasefilledform"
              />
            </div>
          </div>
          <span className="organ-matching-a1-text06">
            Terms &amp; Conditions*
          </span>
          <img
            alt="IMAGE12Lightcreatepasswordfilledform7960"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/ab9419f0-8ff1-4e79-b346-dec4f405bd6d?org_if_sml=1962"
            className="organ-matching-a1-i-m-a-g-e12lightcreatepasswordfilledform"
          />
        </div>
        <div className="organ-matching-a1-group50">
          <span className="organ-matching-a1-text07">
            <span>Organ Matching</span>
          </span>
        </div>
        <Link to="/organ-matching-a2" className="organ-matching-a1-navlink2">
          <Screenshot202301061958501
            rootClassName="screenshot202301061958501-root-class-name"
            className="organ-matching-a1-component2"
          ></Screenshot202301061958501>
        </Link>
        <span className="organ-matching-a1-text09">
          <span>Import</span>
        </span>
        <div className="organ-matching-a1-dark-dark5">
          <div className="organ-matching-a1-fluid-shape">
            <img
              alt="MaskI102"
              src="/playground_assets/maski102-lx1-1500w.png"
              className="organ-matching-a1-mask"
            />
            <img
              alt="imgI102"
              src="/playground_assets/imgi102-cdsk-300h.png"
              className="organ-matching-a1-img"
            />
          </div>
          <span className="organ-matching-a1-text11">Organ Matching</span>
        </div>
        <div className="organ-matching-a1-group13">
          <span className="organ-matching-a1-text12">Seed Phrase</span>
          <input
            type="text"
            placeholder="Enter Seed Phrase"
            className="organ-matching-a1-textinput input"
          />
          <div className="organ-matching-a1-group131">
            <span className="organ-matching-a1-text13">
              Enter Your Password
            </span>
            <input
              type="text"
              placeholder="Enter Password"
              className="organ-matching-a1-textinput1 input"
            />
            <div className="organ-matching-a1-group132">
              <span className="organ-matching-a1-text14">
                Enter Your Password
              </span>
              <input
                type="text"
                placeholder="Enter Password"
                className="organ-matching-a1-textinput2 input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganMatchingA1
