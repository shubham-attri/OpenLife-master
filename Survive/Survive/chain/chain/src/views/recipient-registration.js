import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group362 from '../components/group362'
import Group22 from '../components/group22'
import './recipient-registration.css'

const RecipientRegistration = (props) => {
  return (
    <div className="recipient-registration-container">
      <Helmet>
        <title>RecipientRegistration - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="RecipientRegistration - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="recipient-registration-donor-registration">
        <div className="recipient-registration-group37">
          <form
            enctype="multipart/form-data"
            className="recipient-registration-form"
          >
            <div className="recipient-registration-group13">
              <span className="recipient-registration-text">
                <span>Name*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="recipient-registration-textinput input"
              />
            </div>
            <div className="recipient-registration-group131">
              <div className="recipient-registration-container1">
                <span className="recipient-registration-text02">
                  <span>Blood Group*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter Your Blood Group"
                  className="recipient-registration-textinput1 input"
                />
              </div>
              <div className="recipient-registration-group132">
                <span className="recipient-registration-text04">
                  <span>Phone Number*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter Your Contact Number"
                  className="recipient-registration-textinput2 input"
                />
              </div>
            </div>
            <div className="recipient-registration-group14">
              <span className="recipient-registration-text06">
                <span>Email*</span>
              </span>
              <input
                type="text"
                placeholder="Enter YourEmail"
                className="recipient-registration-textinput3 input"
              />
            </div>
            <div className="recipient-registration-group41">
              <span className="recipient-registration-text08">
                <span>Date of Birth*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Your Date of Birth"
                className="recipient-registration-textinput4 input"
              />
            </div>
            <div className="recipient-registration-group40">
              <span className="recipient-registration-text10">
                <span>Age*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Your Age"
                className="recipient-registration-textinput5 input"
              />
            </div>
            <div className="recipient-registration-group47">
              <span className="recipient-registration-text12">
                <span>
                  Medical History (Previous Surgeries/ Pre-Existing Medical
                  Conditions*
                </span>
              </span>
              <textarea
                placeholder="Medical History...."
                className="recipient-registration-textarea textarea"
              ></textarea>
            </div>
            <div className="recipient-registration-group15">
              <span className="recipient-registration-text14">
                <span>Address*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="recipient-registration-textinput6 input"
              />
            </div>
            <div className="recipient-registration-group44">
              <span className="recipient-registration-text16">
                <span>Identity Proof*</span>
              </span>
              <button className="recipient-registration-button-primary">
                <span className="recipient-registration-text18">
                  <span>Upload File</span>
                </span>
              </button>
            </div>
            <div className="recipient-registration-group45">
              <span className="recipient-registration-text20">
                Consent Signature*
              </span>
              <button className="recipient-registration-button-primary1">
                <span className="recipient-registration-text21">
                  <span>Upload File</span>
                </span>
              </button>
            </div>
            <div className="recipient-registration-group46">
              <span className="recipient-registration-text23">
                <span>Organs up for donation*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Organs You Wish to Donate"
                className="recipient-registration-textinput7 input"
              />
            </div>
            <button className="recipient-registration-button button">
              <span className="recipient-registration-text25">
                <span>Register</span>
                <br></br>
              </span>
            </button>
          </form>
        </div>
        <div className="recipient-registration-group461">
          <img
            alt="index215356"
            src="/playground_assets/index215356-odnt-1600w.png"
            className="recipient-registration-index21"
          />
          <span className="recipient-registration-text28">
            <span>OPEN LIFE</span>
          </span>
          <span className="recipient-registration-text30">
            Recipient Registration
          </span>
        </div>
        <Link to="/landing-page" className="recipient-registration-navlink">
          <Group362 className="recipient-registration-component"></Group362>
        </Link>
        <Link to="/landing-page" className="recipient-registration-navlink1">
          <Group22
            rootClassName="group22-root-class-name1"
            className="recipient-registration-component1"
          ></Group22>
        </Link>
        <div className="recipient-registration-group39">
          <img
            alt="Rectangle107558"
            src="/playground_assets/rectangle107558-yz8q-200h.png"
            className="recipient-registration-rectangle10"
          />
          <span className="recipient-registration-text31">
            <span>Services</span>
          </span>
          <div className="recipient-registration-group10">
            <span className="recipient-registration-text33">
              <span>Make requests for organ as a recipient...</span>
            </span>
            <span className="recipient-registration-text35">
              <span> Request an Organ</span>
            </span>
            <img
              alt="Rectangle127558"
              src="/playground_assets/rectangle127558-1aeo-200h.png"
              className="recipient-registration-rectangle12"
            />
            <span className="recipient-registration-text37">
              <span>READ MORE</span>
            </span>
            <img
              alt="IconsPhosphorHealthHeartbeat7558"
              src="/playground_assets/iconsphosphorhealthheartbeat7558-at2.svg"
              className="recipient-registration-icons-phosphor-health-heartbeat"
            />
          </div>
          <div className="recipient-registration-group11">
            <span className="recipient-registration-text39">
              <span>Sell organ as an organ donor...</span>
            </span>
            <span className="recipient-registration-text41">
              <span>Donate an Organ</span>
            </span>
            <img
              alt="Rectangle157559"
              src="/playground_assets/rectangle157559-tyhl-200h.png"
              className="recipient-registration-rectangle15"
            />
            <span className="recipient-registration-text43">
              <span>READ MORE</span>
            </span>
            <img
              alt="IconsPhosphorHealthBrain7559"
              src="/playground_assets/iconsphosphorhealthbrain7559-97tm.svg"
              className="recipient-registration-icons-phosphor-health-brain"
            />
          </div>
          <div className="recipient-registration-group12">
            <span className="recipient-registration-text45">
              <span>
                Check if you are eligible to receive/ donate an organ...
              </span>
            </span>
            <span className="recipient-registration-text47">
              <span>Check Eligibility</span>
            </span>
            <img
              alt="Rectangle167559"
              src="/playground_assets/rectangle167559-b3b7-200h.png"
              className="recipient-registration-rectangle16"
            />
            <span className="recipient-registration-text49">
              <span>READ MORE</span>
            </span>
            <img
              alt="IconsPhosphorSecurityCircleWavyCheck7559"
              src="/playground_assets/iconsphosphorsecuritycirclewavycheck7559-tvx.svg"
              className="recipient-registration-icons-phosphor-security-circle-wavy-check"
            />
          </div>
        </div>
        <span className="recipient-registration-text51">
          <span className="recipient-registration-text52">
            Registering as a Recipient
          </span>
          <br className="recipient-registration-text53"></br>
          <span className="recipient-registration-text54">
            Please enter your details:
          </span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default RecipientRegistration
