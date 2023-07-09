import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group361 from '../components/group361'
import Group22 from '../components/group22'
import './donor-registration.css'

const DonorRegistration = (props) => {
  return (
    <div className="donor-registration-container">
      <Helmet>
        <title>Donor-Registration - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Donor-Registration - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="donor-registration-donor-registration">
        <div className="donor-registration-group37">
          <form
            enctype="multipart/form-data"
            className="donor-registration-form"
          >
            <div className="donor-registration-group13">
              <span className="donor-registration-text">
                <span>Name*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="donor-registration-textinput input"
              />
            </div>
            <div className="donor-registration-group131">
              <div className="donor-registration-container1">
                <span className="donor-registration-text02">
                  <span>Blood Group*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter Your Blood Group"
                  className="donor-registration-textinput1 input"
                />
              </div>
              <div className="donor-registration-group132">
                <span className="donor-registration-text04">
                  <span>Phone Number*</span>
                </span>
                <input
                  type="text"
                  placeholder="Enter Your Contact Number"
                  className="donor-registration-textinput2 input"
                />
              </div>
            </div>
            <div className="donor-registration-group14">
              <span className="donor-registration-text06">
                <span>Email*</span>
              </span>
              <input
                type="text"
                placeholder="Enter YourEmail"
                className="donor-registration-textinput3 input"
              />
            </div>
            <div className="donor-registration-group41">
              <span className="donor-registration-text08">
                <span>Date of Birth*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Your Date of Birth"
                className="donor-registration-textinput4 input"
              />
            </div>
            <div className="donor-registration-group40">
              <span className="donor-registration-text10">
                <span>Age*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Your Age"
                className="donor-registration-textinput5 input"
              />
            </div>
            <div className="donor-registration-group47">
              <span className="donor-registration-text12">
                <span>
                  Medical History (Previous Surgeries/ Pre-Existing Medical
                  Conditions*
                </span>
              </span>
              <textarea
                placeholder="Medical History...."
                className="donor-registration-textarea textarea"
              ></textarea>
            </div>
            <div className="donor-registration-group15">
              <span className="donor-registration-text14">
                <span>Address*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="donor-registration-textinput6 input"
              />
            </div>
            <div className="donor-registration-group44">
              <span className="donor-registration-text16">
                <span>Identity Proof*</span>
              </span>
              <button className="donor-registration-button-primary">
                <span className="donor-registration-text18">
                  <span>Upload File</span>
                </span>
              </button>
            </div>
            <div className="donor-registration-group45">
              <span className="donor-registration-text20">
                <span>
                  Consent Signature(by the deceased’s family member/ a donor
                  card or their will)*
                </span>
              </span>
              <button className="donor-registration-button-primary1">
                <span className="donor-registration-text22">
                  <span>Upload File</span>
                </span>
              </button>
            </div>
            <div className="donor-registration-group48">
              <span className="donor-registration-text24">
                <span>Certified DNA Test*</span>
              </span>
              <button className="donor-registration-button-primary2">
                <span className="donor-registration-text26">
                  <span>Upload File</span>
                </span>
              </button>
            </div>
            <div className="donor-registration-group46">
              <span className="donor-registration-text28">
                <span>Organs up for donation*</span>
              </span>
              <input
                type="text"
                placeholder="Enter Organs You Wish to Donate"
                className="donor-registration-textinput7 input"
              />
            </div>
            <button className="donor-registration-button button">
              <span className="donor-registration-text30">
                <span>Register</span>
                <br></br>
              </span>
            </button>
          </form>
        </div>
        <div className="donor-registration-group461">
          <img
            alt="index215356"
            src="/playground_assets/index215356-odnt-1600w.png"
            className="donor-registration-index21"
          />
          <span className="donor-registration-text33">
            <span>OPEN LIFE</span>
          </span>
          <span className="donor-registration-text35">
            <span>Donor Registration</span>
          </span>
        </div>
        <Link to="/landing-page" className="donor-registration-navlink">
          <Group361 className="donor-registration-component"></Group361>
        </Link>
        <Link to="/landing-page" className="donor-registration-navlink1">
          <Group22
            rootClassName="group22-root-class-name"
            className="donor-registration-component1"
          ></Group22>
        </Link>
        <div className="donor-registration-group39">
          <img
            alt="Rectangle107558"
            src="/playground_assets/rectangle107558-yz8q-200h.png"
            className="donor-registration-rectangle10"
          />
          <span className="donor-registration-text37">
            <span>Services</span>
          </span>
          <div className="donor-registration-group10">
            <span className="donor-registration-text39">
              <span>Make requests for organ as a recipient...</span>
            </span>
            <span className="donor-registration-text41">
              <span> Request an Organ</span>
            </span>
            <img
              alt="Rectangle127558"
              src="/playground_assets/rectangle127558-1aeo-200h.png"
              className="donor-registration-rectangle12"
            />
            <span className="donor-registration-text43">
              <span>READ MORE</span>
            </span>
            <img
              alt="IconsPhosphorHealthHeartbeat7558"
              src="/playground_assets/iconsphosphorhealthheartbeat7558-at2.svg"
              className="donor-registration-icons-phosphor-health-heartbeat"
            />
          </div>
          <div className="donor-registration-group11">
            <span className="donor-registration-text45">
              <span>Sell organ as an organ donor...</span>
            </span>
            <span className="donor-registration-text47">
              <span>Donate an Organ</span>
            </span>
            <img
              alt="Rectangle157559"
              src="/playground_assets/rectangle157559-tyhl-200h.png"
              className="donor-registration-rectangle15"
            />
            <span className="donor-registration-text49">
              <span>READ MORE</span>
            </span>
            <img
              alt="IconsPhosphorHealthBrain7559"
              src="/playground_assets/iconsphosphorhealthbrain7559-97tm.svg"
              className="donor-registration-icons-phosphor-health-brain"
            />
          </div>
          <div className="donor-registration-group12">
            <span className="donor-registration-text51">
              <span>
                Check if you are eligible to receive/ donate an organ...
              </span>
            </span>
            <span className="donor-registration-text53">
              <span>Check Eligibility</span>
            </span>
            <img
              alt="Rectangle167559"
              src="/playground_assets/rectangle167559-b3b7-200h.png"
              className="donor-registration-rectangle16"
            />
            <span className="donor-registration-text55">
              <span>READ MORE</span>
            </span>
            <img
              alt="IconsPhosphorSecurityCircleWavyCheck7559"
              src="/playground_assets/iconsphosphorsecuritycirclewavycheck7559-tvx.svg"
              className="donor-registration-icons-phosphor-security-circle-wavy-check"
            />
          </div>
        </div>
        <span className="donor-registration-text57">
          <span className="donor-registration-text58">
            Registering as a Donor
          </span>
          <br className="donor-registration-text59"></br>
          <span className="donor-registration-text60">(</span>
          <span className="donor-registration-text61">
            Please note that only the family member/person related by blood to
            the brain-dead person can register from their side or through a
            donor card/ a document signed by the deceased before being
            brain-dead stating their intention to donate their organs can
            register according to the Transplantation of Human Organs Act by
            Government Of India, 1994)
          </span>
          <br className="donor-registration-text62"></br>
          <span>Please enter your details:</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default DonorRegistration
