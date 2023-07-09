import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group366 from '../components/group366'
import Group224 from '../components/group224'
import './organ-tracking.css'

const OrganTracking = (props) => {
  return (
    <div className="organ-tracking-container">
      <Helmet>
        <title>Organ-Tracking - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Organ-Tracking - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="organ-tracking-organ-tracking">
        <div className="organ-tracking-group61">
          <img
            alt="SpashScreen17358"
            src="/playground_assets/spashscreen17358-oje8-1200h.png"
            className="organ-tracking-spash-screen1"
          />
          <span className="organ-tracking-text">
            <span>
              <span>
                Welcome John Doe!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>You are matched with XYZ.</span>
              <br></br>
              <span>Expected delivery of organ in: 3 hours!</span>
            </span>
          </span>
        </div>
        <Link to="/landing-page" className="organ-tracking-navlink">
          <Group366
            rootClassName="group366-root-class-name"
            className="organ-tracking-component"
          ></Group366>
        </Link>
        <Link to="/landing-page" className="organ-tracking-navlink1">
          <Group224
            rootClassName="group224-root-class-name"
            className="organ-tracking-component1"
          ></Group224>
        </Link>
        <div className="organ-tracking-success">
          <span className="organ-tracking-text07">
            <span>
              Organ Donor and Receiver Matched Successfully
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img
            alt="Rectangle67458"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/d6cfb71d-0500-4fda-a0f6-91d3f4d1d7a7?org_if_sml=1900"
            className="organ-tracking-rectangle6"
          />
          <img
            alt="Ellipse17458"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/cbd18bce-39aa-4aef-855f-51dfb704ec70?org_if_sml=1795"
            className="organ-tracking-ellipse1"
          />
          <img
            alt="Vector7458"
            src="/playground_assets/vector7458-qa.svg"
            className="organ-tracking-vector"
          />
        </div>
        <div className="organ-tracking-dark-dark04">
          <div className="organ-tracking-fluid-shape">
            <img
              alt="MaskI148"
              src="/playground_assets/maski148-amcv-1600w.png"
              className="organ-tracking-mask"
            />
            <img
              alt="imgI148"
              src="/playground_assets/imgi148-gpr-1600w.png"
              className="organ-tracking-img"
            />
          </div>
          <span className="organ-tracking-text09">
            <span className="organ-tracking-text10">
              ORGAN
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="organ-tracking-text11"></br>
            <br></br>
            <br></br>
            <span className="organ-tracking-text14">TRACKING</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrganTracking
