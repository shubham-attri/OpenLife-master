import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group191 from '../components/group191'
import Group201 from '../components/group201'
import './notifications.css'

const Notifications = (props) => {
  return (
    <div className="notifications-container">
      <Helmet>
        <title>Notifications - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Notifications - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="notifications-notifications">
        <div className="notifications-b-g">
          <span className="notifications-text">Notifications</span>
        </div>
        <Link to="/landing-page" className="notifications-navlink">
          <div className="notifications-group36">
            <span className="notifications-text01">
              <span>Home</span>
            </span>
            <span className="notifications-text03">
              <span>About</span>
            </span>
            <span className="notifications-text05">
              <span>Services</span>
            </span>
            <span className="notifications-text07">
              <span>Contact us</span>
            </span>
            <img
              alt="Openlife27357"
              src="/playground_assets/openlife27357-s3x-200h.png"
              className="notifications-openlife2"
            />
            <img
              alt="Openlife17357"
              src="/playground_assets/openlife17357-3m2-200h.png"
              className="notifications-openlife1"
            />
          </div>
        </Link>
        <img
          alt="Container7058"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/e31fcb98-0b88-418a-8550-c3b56ec5f64c?org_if_sml=18099"
          className="notifications-container1"
        />
        <div className="notifications-light-theme">
          <div className="notifications-success">
            <img
              alt="Rectangle167357"
              src="/playground_assets/rectangle167357-qa6o-300h.png"
              className="notifications-rectangle16"
            />
            <img
              alt="Rectangle177357"
              src="/playground_assets/rectangle177357-zjdy-200w.png"
              className="notifications-rectangle17"
            />
            <div className="notifications-group5">
              <span className="notifications-text09">
                <span>Success</span>
              </span>
              <span className="notifications-text11">
                <span>
                  Organ Donor matched successfully with Organ Receiver.
                </span>
              </span>
            </div>
            <img
              alt="Ellipse57357"
              src="/playground_assets/ellipse57357-op1-200h.png"
              className="notifications-ellipse5"
            />
            <div className="notifications-group">
              <img
                alt="Vector7357"
                src="/playground_assets/vector7357-6yq.svg"
                className="notifications-vector"
              />
            </div>
          </div>
          <div className="notifications-error">
            <img
              alt="Rectangle167357"
              src="/playground_assets/rectangle167357-ckoq-300h.png"
              className="notifications-rectangle161"
            />
            <img
              alt="Rectangle177357"
              src="/playground_assets/rectangle177357-7a3p-200w.png"
              className="notifications-rectangle171"
            />
            <div className="notifications-group51">
              <span className="notifications-text13">
                <span>Error</span>
              </span>
              <span className="notifications-text15">
                <span>
                  Not able to process Organ Donor/ Receiver details.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <img
              alt="Ellipse57357"
              src="/playground_assets/ellipse57357-lrhd-200h.png"
              className="notifications-ellipse51"
            />
            <div className="notifications-group1">
              <img
                alt="Vector7357"
                src="/playground_assets/vector7357-ira.svg"
                className="notifications-vector1"
              />
            </div>
          </div>
          <div className="notifications-warning">
            <img
              alt="Rectangle167357"
              src="/playground_assets/rectangle167357-d05e-300h.png"
              className="notifications-rectangle162"
            />
            <img
              alt="Rectangle177357"
              src="/playground_assets/rectangle177357-3smp-200w.png"
              className="notifications-rectangle172"
            />
            <div className="notifications-group52">
              <span className="notifications-text17">
                <span>Warning</span>
              </span>
              <span className="notifications-text19">
                <span>
                  Please complete your profile to get matched with Donor/
                  Receiver.
                </span>
              </span>
            </div>
            <img
              alt="Ellipse57357"
              src="/playground_assets/ellipse57357-43lf-200h.png"
              className="notifications-ellipse52"
            />
            <div className="notifications-group2">
              <img
                alt="Vector7357"
                src="/playground_assets/vector7357-tis9.svg"
                className="notifications-vector2"
              />
            </div>
          </div>
          <div className="notifications-info">
            <img
              alt="Rectangle167357"
              src="/playground_assets/rectangle167357-6jqf-300h.png"
              className="notifications-rectangle163"
            />
            <img
              alt="Rectangle177357"
              src="/playground_assets/rectangle177357-bkye-200w.png"
              className="notifications-rectangle173"
            />
            <div className="notifications-group53">
              <span className="notifications-text21">
                <span>Info</span>
              </span>
              <span className="notifications-text23">
                <span>
                  You will receive an organ tracking link as soon as the organ
                  is removed from the donor.
                </span>
              </span>
            </div>
            <img
              alt="Ellipse57357"
              src="/playground_assets/ellipse57357-qqxp-200h.png"
              className="notifications-ellipse53"
            />
            <img
              alt="Vector7357"
              src="/playground_assets/vector7357-dgu.svg"
              className="notifications-vector3"
            />
          </div>
        </div>
        <div className="notifications-group22">
          <Link to="/landing-page" className="notifications-navlink1">
            <Group191
              rootClassName="group191-root-class-name"
              className="notifications-component"
            ></Group191>
          </Link>
          <div className="notifications-group21">
            <span className="notifications-text25">
              <span>Get in touch</span>
            </span>
            <span className="notifications-text27">
              <span>Head Office</span>
            </span>
            <span className="notifications-text29">
              <span>Email</span>
            </span>
            <span className="notifications-text31">
              <span>Phone</span>
            </span>
            <span className="notifications-text33">
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
            <span className="notifications-text38">
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
            <span className="notifications-text47">
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
          <Link to="/landing-page" className="notifications-navlink2">
            <Group201
              rootClassName="group201-root-class-name"
              className="notifications-component1"
            ></Group201>
          </Link>
          <div className="notifications-group18">
            <img
              alt="Openlife37058"
              src="/playground_assets/openlife37058-t65-200h.png"
              className="notifications-openlife3"
            />
            <span className="notifications-text56">
              <span>
                A decentralized platform that uses blockchain technology and
                smart contracts to facilitate the matching of organ donors with
                recipients and improve the transparency, efficiency, and
                security of the organ donation process
              </span>
            </span>
            <img
              alt="Openlife27058"
              src="/playground_assets/openlife27058-7h2i-200h.png"
              className="notifications-openlife21"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
