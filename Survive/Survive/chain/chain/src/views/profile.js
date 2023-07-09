import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Text7 from '../components/text7'
import Text6 from '../components/text6'
import Text5 from '../components/text5'
import Group19 from '../components/group19'
import Group20 from '../components/group20'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Tender Svelte Dolphin</title>
        <meta property="og:title" content="Profile - Tender Svelte Dolphin" />
      </Helmet>
      <div className="profile-profile">
        <div className="profile-desktop1">
          <img
            alt="Rectangle16656"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/46401d9e-cc9a-49f0-b058-f1dfef2e027a?org_if_sml=1123"
            className="profile-rectangle1"
          />
          <img
            alt="Openlife36656"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/be3ccfa3-3a42-400a-ad60-22ed24c82ecf?org_if_sml=164100"
            className="profile-openlife3"
          />
          <div className="profile-input">
            <span className="profile-text TextManrope14Regular">
              <span>Email..........</span>
            </span>
          </div>
          <div className="profile-input1">
            <span className="profile-text02 TextManrope14Regular">
              <span>Password..........</span>
            </span>
          </div>
          <button className="profile-button">
            <span className="profile-text04 TextManrope20Medium">
              <span>Login</span>
            </span>
          </button>
        </div>
        <button className="profile-button1">
          <span className="profile-text06 TextManrope20Medium">
            <span>Do not have an Account? Sign Up</span>
          </span>
          <img
            alt="IconsFeatherarrowrightcircleI665"
            src="/playground_assets/iconsfeatherarrowrightcirclei665-erwp.svg"
            className="profile-icons-featherarrowrightcircle"
          />
        </button>
        <div className="profile-profile-screen1080"></div>
        <img
          alt="Container6957"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/2bf0f25b-9b66-4a8f-98b2-9432cc8dbe05?org_if_sml=14639"
          className="profile-container1"
        />
        <img
          alt="ProfileBackground6957"
          src="/playground_assets/profilebackground6957-6qqj-1600w.png"
          className="profile-profile-background"
        />
        <div className="profile-group43">
          <span className="profile-text08">
            <span>John Doe</span>
          </span>
          <span className="profile-text10">•</span>
          <span className="profile-text11">
            <span>@johndoe</span>
          </span>
          <span className="profile-text13">
            <span>Registered as RECIPIENT</span>
          </span>
          <img
            alt="ProfilePic6957"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/83bffe16-671d-4b55-be45-b95056988f85/414e4e3f-8906-4ccf-a193-ad5e4836af54?org_if_sml=168668"
            className="profile-profile-pic"
          />
          <div className="profile-btnfollow">
            <span className="profile-text15">
              <span>Contact</span>
            </span>
          </div>
        </div>
        <div className="profile-post1">
          <span className="profile-text17">
            <span>Email Address: xyz@abc.com</span>
          </span>
          <span className="profile-text19">
            <span>Contact Details: XYZ</span>
          </span>
          <span className="profile-text21">
            <span>Location: New York</span>
          </span>
          <span className="profile-text23">
            <span>Gender: Male</span>
          </span>
          <span className="profile-text25">
            <span>Account Details</span>
          </span>
          <span className="profile-text27">
            <span>Age: 32</span>
          </span>
          <span className="profile-text29">
            <span>Blood Type: O+</span>
          </span>
        </div>
        <div className="profile-group36">
          <Link to="/landing-page" className="profile-text31">
            <span>Home</span>
          </Link>
          <Text7 rootClassName="text7-root-class-name"></Text7>
          <Text6 rootClassName="text6-root-class-name"></Text6>
          <Text5 rootClassName="text5-root-class-name"></Text5>
          <img
            alt="Openlife27057"
            src="/playground_assets/openlife27057-m2a-200w.png"
            className="profile-openlife2"
          />
          <img
            alt="Openlife17057"
            src="/playground_assets/openlife17057-tgg-200h.png"
            className="profile-openlife1"
          />
        </div>
        <div className="profile-group42">
          <div className="profile-group11">
            <div className="profile-group9">
              <div className="profile-fluentmailcopy24filled">
                <div className="profile-group">
                  <img
                    alt="Vector6958"
                    src="/playground_assets/vector6958-bohs.svg"
                    className="profile-vector"
                  />
                </div>
              </div>
            </div>
            <div className="profile-group10">
              <span className="profile-text33">+</span>
              <span className="profile-text34">
                <span>45</span>
              </span>
            </div>
          </div>
          <span className="profile-text36">
            <span>Check Notifications</span>
          </span>
        </div>
        <div className="profile-group40">
          <span className="profile-text38">
            <span>Complete KYC</span>
          </span>
          <img
            alt="IconsPhosphorSecurityFingerprintSimple6958"
            src="/playground_assets/iconsphosphorsecurityfingerprintsimple6958-2ei.svg"
            className="profile-icons-phosphor-security-fingerprint-simple"
          />
          <img
            alt="IconsPhosphorSecurityLockLaminated6958"
            src="/playground_assets/iconsphosphorsecuritylocklaminated6958-xfk.svg"
            className="profile-icons-phosphor-security-lock-laminated"
          />
        </div>
        <div className="profile-group22">
          <Link to="/landing-page" className="profile-navlink">
            <Group19
              rootClassName="group19-root-class-name"
              className="profile-component3"
            ></Group19>
          </Link>
          <div className="profile-group21">
            <span className="profile-text40">
              <span>Get in touch</span>
            </span>
            <span className="profile-text42">
              <span>Head Office</span>
            </span>
            <span className="profile-text44">
              <span>Email</span>
            </span>
            <span className="profile-text46">
              <span>Phone</span>
            </span>
            <span className="profile-text48">
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
            <span className="profile-text53">
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
            <span className="profile-text62">
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
          <Link to="/landing-page" className="profile-navlink1">
            <Group20
              rootClassName="group20-root-class-name"
              className="profile-component4"
            ></Group20>
          </Link>
          <div className="profile-group18">
            <img
              alt="Openlife37057"
              src="/playground_assets/openlife37057-ji8b-200h.png"
              className="profile-openlife31"
            />
            <span className="profile-text71">
              <span>
                A decentralized platform that uses blockchain technology and
                smart contracts to facilitate the matching of organ donors with
                recipients and improve the transparency, efficiency, and
                security of the organ donation process
              </span>
            </span>
            <img
              alt="Openlife27057"
              src="/playground_assets/openlife27057-t71-200h.png"
              className="profile-openlife21"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
