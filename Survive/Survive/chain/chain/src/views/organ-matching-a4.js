import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group3610 from '../components/group3610'
import Text10 from '../components/text10'
import Group513 from '../components/group513'
import './organ-matching-a4.css'

const OrganMatchingA4 = (props) => {
  return (
    <div className="organ-matching-a4-container">
      <Helmet>
        <title>Organ-Matching-A4 - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Organ-Matching-A4 - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="organ-matching-a4-matching-i-ibvi">
        <Link to="/landing-page" className="organ-matching-a4-navlink">
          <Group3610
            rootClassName="group3610-root-class-name"
            className="organ-matching-a4-component"
          ></Group3610>
        </Link>
        <div className="organ-matching-a4-group22">
          <div className="organ-matching-a4-group19">
            <span className="organ-matching-a4-text">
              <span>HOME</span>
            </span>
            <span className="organ-matching-a4-text02">
              <span>Useful Links</span>
            </span>
            <span className="organ-matching-a4-text04">
              <span>ABOUT</span>
            </span>
            <span className="organ-matching-a4-text06">
              <span>SERVICES</span>
            </span>
          </div>
          <div className="organ-matching-a4-group21">
            <span className="organ-matching-a4-text08">
              <span>Get in touch</span>
            </span>
            <span className="organ-matching-a4-text10">
              <span>Head Office</span>
            </span>
            <span className="organ-matching-a4-text12">
              <span>Email</span>
            </span>
            <span className="organ-matching-a4-text14">
              <span>Phone</span>
            </span>
            <span className="organ-matching-a4-text16">
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
            <span className="organ-matching-a4-text21">
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
            <span className="organ-matching-a4-text30">
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
          <div className="organ-matching-a4-group20">
            <span className="organ-matching-a4-text39">
              <span>OUR SERVICES</span>
            </span>
            <span className="organ-matching-a4-text41">
              <span>Sell an Organ</span>
            </span>
            <span className="organ-matching-a4-text43">
              <span>Request an Organ</span>
            </span>
            <span className="organ-matching-a4-text45">
              <span>Check Eligibility</span>
            </span>
          </div>
          <div className="organ-matching-a4-group18">
            <img
              alt="Openlife39059"
              src="/playground_assets/openlife39059-a27a-300w.png"
              className="organ-matching-a4-openlife3"
            />
            <span className="organ-matching-a4-text47">
              <span>
                A decentralized platform that uses blockchain technology and
                smart contracts to facilitate the matching of organ donors with
                recipients and improve the transparency, efficiency, and
                security of the organ donation process
              </span>
            </span>
            <img
              alt="Openlife29059"
              src="/playground_assets/openlife29059-jwd-200h.png"
              className="organ-matching-a4-openlife2"
            />
          </div>
        </div>
        <div className="organ-matching-a4-container1">
          <div className="organ-matching-a4-container2">
            <div className="organ-matching-a4-container3">
              <Link to="/organ-send" className="organ-matching-a4-navlink1">
                <img
                  alt="Ellipse29059"
                  src="/playground_assets/ellipse29059-a4b5-300h.png"
                  className="organ-matching-a4-ellipse2"
                />
              </Link>
              <Link to="/organ-send" className="organ-matching-a4-navlink2">
                <img
                  alt="IconsPhosphorCommerceGift1027"
                  src="/playground_assets/iconsphosphorcommercegift1027-jr.svg"
                  className="organ-matching-a4-icons-phosphor-commerce-gift"
                />
              </Link>
            </div>
            <div className="organ-matching-a4-container4">
              <Link to="/organ-receive" className="organ-matching-a4-navlink3">
                <img
                  alt="Ellipse29059"
                  src="/playground_assets/ellipse29059-7mjr-300w.png"
                  className="organ-matching-a4-ellipse21"
                />
              </Link>
              <Link to="/organ-receive" className="organ-matching-a4-navlink4">
                <img
                  alt="IconsPhosphorHealthHeartbeat1027"
                  src="/playground_assets/iconsphosphorhealthheartbeat1027-38f.svg"
                  className="organ-matching-a4-icons-phosphor-health-heartbeat"
                />
              </Link>
            </div>
            <span className="organ-matching-a4-text49">
              Receive an Organ as a Recipient
            </span>
            <span className="organ-matching-a4-text50">
              <span>Send an Organ as</span>
              <br></br>
              <br></br>
              <span> Donor</span>
            </span>
            <span className="organ-matching-a4-text55">
              <span>SEND</span>
            </span>
          </div>
        </div>
        <span className="organ-matching-a4-text57">
          <span>RECEIVE</span>
        </span>
        <span className="organ-matching-a4-text59">
          <span>BLOCKCHAIN</span>
        </span>
        <Text10 rootClassName="text10-root-class-name"></Text10>
        <img
          alt="Rectangle29059"
          src="/playground_assets/rectangle29059-ai4b-200h.png"
          className="organ-matching-a4-rectangle2"
        />
        <Link to="/landing-page" className="organ-matching-a4-navlink5">
          <Group513
            rootClassName="group513-root-class-name"
            className="organ-matching-a4-component2"
          ></Group513>
        </Link>
        <img
          alt="IMAGE74Lightbrowser9059"
          src="/playground_assets/image74lightbrowser9059-1wf-400w.png"
          className="organ-matching-a4-i-m-a-g-e74lightbrowser"
        />
        <span className="organ-matching-a4-text61">
          <span>
            <span>
              Your details as an organ recipient/ donor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              would be connected directly on Ethereum
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>blockchain without any interference from third</span>
            <br></br>
            <span></span>
            <br></br>
            <span> parties or middle-men.</span>
          </span>
        </span>
        <div className="organ-matching-a4-dark-dark9">
          <div className="organ-matching-a4-fluid-shape">
            <img
              alt="MaskI102"
              src="/playground_assets/maski102-u6f2-1500w.png"
              className="organ-matching-a4-mask"
            />
            <img
              alt="imgI102"
              src="/playground_assets/imgi102-xll-300h.png"
              className="organ-matching-a4-img"
            />
          </div>
          <span className="organ-matching-a4-text76">Organ Matching</span>
        </div>
      </div>
    </div>
  )
}

export default OrganMatchingA4
