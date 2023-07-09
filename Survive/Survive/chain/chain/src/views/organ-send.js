import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group368 from '../components/group368'
import Group511 from '../components/group511'
import './organ-send.css'

const OrganSend = (props) => {
  return (
    <div className="organ-send-container">
      <Helmet>
        <title>Organ-Send - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Organ-Send - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="organ-send-send">
        <Link to="/landing-page" className="organ-send-navlink">
          <Group368
            rootClassName="group368-root-class-name"
            className="organ-send-component"
          ></Group368>
        </Link>
        <div className="organ-send-group22">
          <div className="organ-send-group19">
            <span className="organ-send-text">
              <span>HOME</span>
            </span>
            <span className="organ-send-text02">
              <span>Useful Links</span>
            </span>
            <span className="organ-send-text04">
              <span>ABOUT</span>
            </span>
            <span className="organ-send-text06">
              <span>SERVICES</span>
            </span>
          </div>
          <div className="organ-send-group21">
            <span className="organ-send-text08">
              <span>Get in touch</span>
            </span>
            <span className="organ-send-text10">
              <span>Head Office</span>
            </span>
            <span className="organ-send-text12">
              <span>Email</span>
            </span>
            <span className="organ-send-text14">
              <span>Phone</span>
            </span>
            <span className="organ-send-text16">
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
            <span className="organ-send-text21">
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
            <span className="organ-send-text30">
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
          <div className="organ-send-group20">
            <span className="organ-send-text39">
              <span>OUR SERVICES</span>
            </span>
            <span className="organ-send-text41">
              <span>Sell an Organ</span>
            </span>
            <span className="organ-send-text43">
              <span>Request an Organ</span>
            </span>
            <span className="organ-send-text45">
              <span>Check Eligibility</span>
            </span>
          </div>
          <div className="organ-send-group18">
            <img
              alt="Openlife39060"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/118b681c-dd64-41c4-bdee-51bfcaba7140?org_if_sml=1123"
              className="organ-send-openlife3"
            />
            <span className="organ-send-text47">
              <span>
                A decentralized platform that uses blockchain technology and
                smart contracts to facilitate the matching of organ donors with
                recipients and improve the transparency, efficiency, and
                security of the organ donation process
              </span>
            </span>
            <img
              alt="Openlife29060"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/60934569-a738-4d1d-b612-6cde1cb1b83f?org_if_sml=1123"
              className="organ-send-openlife2"
            />
          </div>
        </div>
        <span className="organ-send-text49">SENT</span>
        <Link to="/landing-page" className="organ-send-navlink1">
          <Group511
            rootClassName="group511-root-class-name"
            className="organ-send-component1"
          ></Group511>
        </Link>
        <div className="organ-send-dark-dark5">
          <div className="organ-send-fluid-shape">
            <img
              alt="MaskI102"
              src="/playground_assets/maski102-14t-1500w.png"
              className="organ-send-mask"
            />
            <img
              alt="imgI102"
              src="/playground_assets/imgi102-lb3-300h.png"
              className="organ-send-img"
            />
          </div>
          <span className="organ-send-text50">Organ Matching</span>
        </div>
        <span className="organ-send-text51">
          <span>
            The organ has been sent
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>successfully.</span>
          <br></br>
          <span>You can now check the status or track the organ.</span>
        </span>
        <Link to="/organ-tracking" className="organ-send-navlink2">
          <img
            alt="Screenshot2023010619585021027"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/825f29ac-4e4d-432a-aa7a-f7ddd32dc722?org_if_sml=116891"
            className="organ-send-screenshot202301061958502"
          />
        </Link>
        <span className="organ-send-text57">
          <span>Go To Organ Tracking</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default OrganSend
