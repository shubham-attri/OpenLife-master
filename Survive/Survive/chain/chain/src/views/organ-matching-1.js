import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group3614 from '../components/group3614'
import Group228 from '../components/group228'
import './organ-matching-1.css'

const OrganMatching1 = (props) => {
  return (
    <div className="organ-matching1-container">
      <Helmet>
        <title>Organ-Matching-1 - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Organ-Matching-1 - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="organ-matching1-matching-i">
        <Link to="/landing-page" className="organ-matching1-navlink">
          <Group3614
            rootClassName="group3614-root-class-name"
            className="organ-matching1-component"
          ></Group3614>
        </Link>
        <span className="organ-matching1-text">
          <span>Organ Exchange Account Setup</span>
        </span>
        <span className="organ-matching1-text02">
          <span>
            Create your new Open Life - Exchange account or import using a seed
            phrase if you have an account
          </span>
        </span>
        <div className="organ-matching1-frame5lightwalletsetupoptions">
          <Link to="/organ-matching-a1" className="organ-matching1-navlink1">
            <img
              alt="IMAGE5Lightwalletsetupoptions7460"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/ab723709-87dc-42aa-a23a-8aa447a2b48c?org_if_sml=131916"
              className="organ-matching1-i-m-a-g-e5lightwalletsetupoptions"
            />
          </Link>
        </div>
        <Link to="/organ-matching-b1" className="organ-matching1-navlink2">
          <img
            alt="Screenshot2023010619585019969"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/b16230aa-1162-47a2-900b-6badd80cb054?org_if_sml=128870"
            className="organ-matching1-screenshot202301061958501"
          />
        </Link>
        <span className="organ-matching1-text04">
          <span>Create a new OLE account</span>
        </span>
        <img
          alt="IconsPhosphorHealthFirstAidKit1439"
          src="/playground_assets/iconsphosphorhealthfirstaidkit1439-7y7n.svg"
          className="organ-matching1-icons-phosphor-health-first-aid-kit"
        />
        <Link to="/landing-page" className="organ-matching1-navlink3">
          <Group228
            rootClassName="group228-root-class-name"
            className="organ-matching1-component1"
          ></Group228>
        </Link>
        <div className="organ-matching1-dark-dark04">
          <div className="organ-matching1-fluid-shape">
            <img
              alt="MaskI102"
              src="/playground_assets/maski102-ofs-1500w.png"
              className="organ-matching1-mask"
            />
            <img
              alt="imgI102"
              src="/playground_assets/imgi102-qy7w-300h.png"
              className="organ-matching1-img"
            />
          </div>
          <span className="organ-matching1-text06">
            <span className="organ-matching1-text07">Organ Matching</span>
            <br className="organ-matching1-text08"></br>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrganMatching1
