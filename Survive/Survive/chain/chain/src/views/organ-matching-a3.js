import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group3611 from '../components/group3611'
import Group225 from '../components/group225'
import './organ-matching-a3.css'

const OrganMatchingA3 = (props) => {
  return (
    <div className="organ-matching-a3-container">
      <Helmet>
        <title>Organ-Matching-A3 - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Organ-Matching-A3 - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="organ-matching-a3-matching-i-ibv">
        <Link to="/landing-page" className="organ-matching-a3-navlink">
          <Group3611
            rootClassName="group3611-root-class-name"
            className="organ-matching-a3-component"
          ></Group3611>
        </Link>
        <Link to="/landing-page" className="organ-matching-a3-navlink1">
          <Group225
            rootClassName="group225-root-class-name"
            className="organ-matching-a3-component1"
          ></Group225>
        </Link>
        <div className="organ-matching-a3-container1">
          <Link to="/organ-matching-a4" className="organ-matching-a3-navlink2">
            <img
              alt="Screenshot2023010619585018262"
              src="/playground_assets/screenshot2023010619585018262-c48-200h.png"
              className="organ-matching-a3-screenshot202301061958501"
            />
          </Link>
          <span className="organ-matching-a3-text">
            <span>Continue</span>
            <br></br>
          </span>
        </div>
        <img
          alt="IMAGE10Lightimportseedphrasesuccessful8262"
          src="/playground_assets/image10lightimportseedphrasesuccessful8262-40ug-900h.png"
          className="organ-matching-a3-i-m-a-g-e10lightimportseedphrasesuccessful"
        />
        <div className="organ-matching-a3-dark-dark8">
          <div className="organ-matching-a3-fluid-shape">
            <img
              alt="MaskI102"
              src="/playground_assets/maski102-493r-1500w.png"
              className="organ-matching-a3-mask"
            />
            <img
              alt="imgI102"
              src="/playground_assets/imgi102-0k9g-300h.png"
              className="organ-matching-a3-img"
            />
          </div>
          <span className="organ-matching-a3-text3">Organ Matching</span>
        </div>
      </div>
    </div>
  )
}

export default OrganMatchingA3
