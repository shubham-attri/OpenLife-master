import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group367 from '../components/group367'
import Group51 from '../components/group51'
import './organ-receive.css'

const OrganReceive = (props) => {
  return (
    <div className="organ-receive-container">
      <Helmet>
        <title>Organ-Receive - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Organ-Receive - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="organ-receive-receive">
        <Link to="/landing-page" className="organ-receive-navlink">
          <Group367
            rootClassName="group367-root-class-name"
            className="organ-receive-component"
          ></Group367>
        </Link>
        <div className="organ-receive-group22">
          <div className="organ-receive-group19">
            <span className="organ-receive-text">
              <span>HOME</span>
            </span>
            <span className="organ-receive-text02">
              <span>Useful Links</span>
            </span>
            <span className="organ-receive-text04">
              <span>ABOUT</span>
            </span>
            <span className="organ-receive-text06">
              <span>SERVICES</span>
            </span>
          </div>
          <div className="organ-receive-group21">
            <span className="organ-receive-text08">
              <span>Get in touch</span>
            </span>
            <span className="organ-receive-text10">
              <span>Head Office</span>
            </span>
            <span className="organ-receive-text12">
              <span>Email</span>
            </span>
            <span className="organ-receive-text14">
              <span>Phone</span>
            </span>
            <span className="organ-receive-text16">
              <span>
                <span>
                  IIITD, Okhla Industrial Estate, Phase III,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>New Delhi, Delhi 110020</span>
              </span>
            </span>
            <span className="organ-receive-text21">
              <span>
                <span>sidhant21495@iiitd.ac.in</span>
                <br></br>
                <span>daksh21459@iiitd.ac.in</span>
                <br></br>
                <span>rajorshi21187@iiitd.ac.in</span>
                <br></br>
                <span>upal21214@iiitd.ac.in</span>
              </span>
            </span>
            <span className="organ-receive-text30">
              <span>
                <span>+91 9711232008</span>
                <br></br>
                <span>+91 7982963117</span>
                <br></br>
                <span>+91 9717810601</span>
                <br></br>
                <span>+91 8584077990</span>
              </span>
            </span>
          </div>
          <div className="organ-receive-group20">
            <span className="organ-receive-text39">
              <span>OUR SERVICES</span>
            </span>
            <span className="organ-receive-text41">
              <span>Sell an Organ</span>
            </span>
            <span className="organ-receive-text43">
              <span>Request an Organ</span>
            </span>
            <span className="organ-receive-text45">
              <span>Check Eligibility</span>
            </span>
          </div>
          <div className="organ-receive-group18">
            <img
              alt="Openlife39061"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/60cb2913-e489-4878-a918-bc3fb421c325?org_if_sml=1123"
              className="organ-receive-openlife3"
            />
            <span className="organ-receive-text47">
              <span>
                A decentralized platform that uses blockchain technology and
                smart contracts to facilitate the matching of organ donors with
                recipients and improve the transparency, efficiency, and
                security of the organ donation process
              </span>
            </span>
            <img
              alt="Openlife29061"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/dc4df9a2-59af-4ba0-bf46-7496f718bb25?org_if_sml=1123"
              className="organ-receive-openlife2"
            />
          </div>
        </div>
        <span className="organ-receive-text49">RECEIVED</span>
        <Link to="/landing-page" className="organ-receive-navlink1">
          <Group51
            rootClassName="group51-root-class-name"
            className="organ-receive-component1"
          ></Group51>
        </Link>
        <div className="organ-receive-dark-dark5">
          <div className="organ-receive-fluid-shape">
            <img
              alt="MaskI102"
              src="/playground_assets/maski102-bcw-1500w.png"
              className="organ-receive-mask"
            />
            <img
              alt="imgI102"
              src="/playground_assets/imgi102-j1kc-300h.png"
              className="organ-receive-img"
            />
          </div>
          <span className="organ-receive-text50">Organ Matching</span>
        </div>
        <span className="organ-receive-text51">
          <span>Your request to receive an organ has been accepted!</span>
          <br></br>
          <span>
            You can now check the status or track the organ when your request is
            completed.
          </span>
        </span>
        <Link to="/organ-tracking" className="organ-receive-navlink2">
          <img
            alt="Screenshot2023010619585021027"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/12d2e5ef-2680-43e5-8f46-78a5aca1118b?org_if_sml=116891"
            className="organ-receive-screenshot202301061958502"
          />
        </Link>
        <span className="organ-receive-text55">
          <span>
            <span>Go To Organ Tracking</span>
            <br></br>
            <span></span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default OrganReceive
