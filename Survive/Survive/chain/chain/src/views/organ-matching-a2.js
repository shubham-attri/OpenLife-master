import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group3613 from '../components/group3613'
import Group227 from '../components/group227'
import './organ-matching-a2.css'

const OrganMatchingA2 = (props) => {
  return (
    <div className="organ-matching-a2-container">
      <Helmet>
        <title>Organ-Matching-A2 - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Organ-Matching-A2 - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="organ-matching-a2-matching-i-iai">
        <div className="organ-matching-a2-dark-dark5">
          <div className="organ-matching-a2-fluid-shape">
            <img
              alt="MaskI102"
              src="/playground_assets/maski102-7dib-1500w.png"
              className="organ-matching-a2-mask"
            />
            <img
              alt="imgI102"
              src="/playground_assets/imgi102-175g-300h.png"
              className="organ-matching-a2-img"
            />
          </div>
          <span className="organ-matching-a2-text">Organ Matching</span>
        </div>
        <Link to="/landing-page" className="organ-matching-a2-navlink">
          <Group3613
            rootClassName="group3613-root-class-name"
            className="organ-matching-a2-component"
          ></Group3613>
        </Link>
        <Link to="/landing-page" className="organ-matching-a2-navlink1">
          <Group227
            rootClassName="group227-root-class-name"
            className="organ-matching-a2-component1"
          ></Group227>
        </Link>
        <img
          alt="IMAGE9Lightfacescan7959"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/df1dd012-6b3a-4217-aa31-ebe77ba27f8e?org_if_sml=1832497"
          className="organ-matching-a2-i-m-a-g-e9lightfacescan"
        />
        <Link to="/organ-matching-a3" className="organ-matching-a2-navlink2">
          <img
            alt="Screenshot2023010619585018262"
            src="/playground_assets/screenshot2023010619585018262-c48-200h.png"
            className="organ-matching-a2-screenshot202301061958501"
          />
        </Link>
        <span className="organ-matching-a2-text1">
          <span>Continue</span>
        </span>
      </div>
    </div>
  )
}

export default OrganMatchingA2
