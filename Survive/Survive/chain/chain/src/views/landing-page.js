import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Group31 from '../components/group31'
import Group33 from '../components/group33'
import Group34 from '../components/group34'
import Group32 from '../components/group32'
import Group19 from '../components/group19'
import Group20 from '../components/group20'
import Group10 from '../components/group10'
import Group11 from '../components/group11'
import Group12 from '../components/group12'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Landing-Page - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Landing-Page - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="landing-page-home-landing-page">
        <div className="landing-page-rectangle4">
          <span className="landing-page-text">OPEN LIFE</span>
          <span className="landing-page-text01">
            <span>THE GIFT OF LIFE STARTS WITH YOU</span>
          </span>
        </div>
        <div className="landing-page-group38">
          <img
            id="AboutSection"
            alt="Rectangle352355"
            src="/playground_assets/rectangle352355-ei9-1600w.png"
            className="landing-page-rectangle35"
          />
          <div className="landing-page-group29">
            <img
              alt="Rectangle52356"
              src="/playground_assets/rectangle52356-5gin-200h.png"
              className="landing-page-rectangle5"
            />
            <span className="landing-page-text03">
              <span>About</span>
            </span>
            <span className="landing-page-text05">
              <span>
                A decentralized platform that uses blockchain technology and
                smart contracts to facilitate the matching of organ donors with
                recipients and improve the transparency, efficiency, and
                security of the organ donation process
              </span>
            </span>
          </div>
          <div className="landing-page-group30">
            <img
              alt="Rectangle182356"
              src="/playground_assets/rectangle182356-d8fb-200h.png"
              className="landing-page-rectangle18"
            />
            <span className="landing-page-text07">
              <span>Why Choose Us?</span>
            </span>
            <div className="landing-page-group23">
              <img
                alt="Rectangle282356"
                src="/playground_assets/rectangle282356-559q-200h.png"
                className="landing-page-rectangle28"
              />
              <span className="landing-page-text09">
                <span>
                  Using a blockchain to record and track the movement of organs,
                  creates a transparent and immutable record. This ensures that
                  organs are being used efficiently and ethically.
                </span>
              </span>
              <span className="landing-page-text11">
                <span>Increased Transparency</span>
              </span>
            </div>
            <div className="landing-page-group26">
              <img
                alt="Rectangle332356"
                src="/playground_assets/rectangle332356-e4us-200h.png"
                className="landing-page-rectangle33"
              />
              <span className="landing-page-text13">
                <span>
                  By automating certain processes and using a decentralized
                  platform, it may be possible to streamline the organ donation
                  process and make it more efficient.
                </span>
              </span>
              <span className="landing-page-text15">
                <span>Increased Efficiency</span>
              </span>
            </div>
            <div className="landing-page-group24">
              <img
                alt="Rectangle262356"
                src="/playground_assets/rectangle262356-13vf-200h.png"
                className="landing-page-rectangle26"
              />
              <span className="landing-page-text17">
                <span>
                  Smart contracts can be used to automate the matching process
                  between organ donors and recipients, which can help to ensure
                  that organs are matched in a timely and efficient manner.
                </span>
              </span>
              <span className="landing-page-text19">
                <span>Improved Matching Process</span>
              </span>
            </div>
            <div className="landing-page-group27">
              <img
                alt="Rectangle322356"
                src="/playground_assets/rectangle322356-5a4-200h.png"
                className="landing-page-rectangle32"
              />
              <span className="landing-page-text21">
                <span>
                  A blockchain-based organ donation website could potentially be
                  accessed by people all over the world, making it easier for
                  people to connect with potential organ donors or recipients.
                </span>
              </span>
              <span className="landing-page-text23">
                <span>Improved accessibility</span>
              </span>
            </div>
            <div className="landing-page-group25">
              <img
                alt="Rectangle272356"
                src="/playground_assets/rectangle272356-kdn8-200h.png"
                className="landing-page-rectangle27"
              />
              <span className="landing-page-text25">
                <span>
                  Blockchain technology is known for its security and
                  immutability, which can help to protect against fraud and
                  tampering.
                </span>
              </span>
              <span className="landing-page-text27">
                <span>Enhanced Security</span>
              </span>
            </div>
            <div className="landing-page-group28">
              <img
                alt="Rectangle342356"
                src="/playground_assets/rectangle342356-rzc-200h.png"
                className="landing-page-rectangle34"
              />
              <span className="landing-page-text29">
                <span>
                  As people will opt for sites like ours, then the dependency on
                  black market will reduce.
                </span>
              </span>
              <span className="landing-page-text31">
                <span>Reduced Dependency</span>
              </span>
            </div>
          </div>
        </div>
        <div className="landing-page-container1">
          <Link to="/notifications" className="landing-page-navlink">
            <Group31
              rootClassName="group31-root-class-name"
              className="landing-page-component"
            ></Group31>
          </Link>
          <Link to="/recipient-registration" className="landing-page-navlink1">
            <Group33
              rootClassName="group33-root-class-name"
              className="landing-page-component1"
            ></Group33>
          </Link>
          <Group34 rootClassName="group34-root-class-name"></Group34>
          <Group32 rootClassName="group32-root-class-name"></Group32>
        </div>
        <div id="Contact" className="landing-page-container2">
          <div className="landing-page-group13">
            <span className="landing-page-text33">
              <span>Your Name</span>
            </span>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="landing-page-textinput input"
            />
          </div>
          <div className="landing-page-group15">
            <span className="landing-page-text35">
              <span>Subject</span>
            </span>
            <input
              type="text"
              placeholder="Enter the Subject"
              className="landing-page-textinput1 input"
            />
          </div>
          <div className="landing-page-group16">
            <span className="landing-page-text37">
              <span>Any Note (Optional)</span>
            </span>
            <textarea
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus, diam arcu scelerisque maecenas. Viverra aliquam pellentesque dolor nec nibh tristique congue euismod pharetra. Fermentum mi morbi arcu justo suspendisse ut aliquam. Cras sed lorem purus quis morbi suspendisse quam dolor nullam. Nam porttitor pellentesque nunc enim erat turpis gravida tellus sem.Feugiat pharetra sed nunc ultricies faucibus. Bibendum dictum facilisis volutpat viverra lorem pretium, ullamcorper. Pellentesque condimentum et amet sed. Id suscipit scelerisque pharetra, faucibus elementum fames sed magna arcu. Ac viverra interdum velit sed eget eget blandit. Condimentum iaculis quisque nisl, tortor tortor faucibus commodo quam mattis. Tellus gravida sit duis id. Tortor quisque at habitant auctor nec mi. Sapien aenean ultricies donec neque nibh est orci ultrices gravida. Proin platea volutpat, id elementum, vestibulum imperdiet. Morbi aliquet lorem massa, a. Id sed morbi fusce amet, blandit tortor. Ultricies varius volutpat tempus quam malesuada quisque habitant.Elementum, congue fusce pulvinar nulla. Viverra commodo sed dictum odio. Sed sit cursus mi, lobortis blandit non dignissim. Sociis amet platea cursus ultrices. Justo, volutpat arcu, elit elit. Massa non nullam lacus, ipsum senectus odio. Vel sodales turpis adipiscing urna vehicula elementum vel lectus. Enim aliquet nibh ipsum lobortis ac. Magna porttitor molestie vestibulum odio faucibus scelerisque lectus neque. Nunc......."
              className="landing-page-textarea textarea"
            ></textarea>
          </div>
          <div className="landing-page-group14">
            <span className="landing-page-text39">
              <span>Your Email</span>
            </span>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="landing-page-textinput2 input"
            />
          </div>
          <div className="landing-page-group17">
            <span className="landing-page-text41">Send Message</span>
          </div>
          <div className="landing-page-group35">
            <img
              alt="Rectangle82357"
              src="/playground_assets/rectangle82357-qpbu-200h.png"
              className="landing-page-rectangle8"
            />
            <span className="landing-page-text42">Request a call</span>
          </div>
        </div>
        <div className="landing-page-group22">
          <a href="#AboutSection" className="landing-page-link">
            <Group19
              rootClassName="group19-root-class-name1"
              className="landing-page-component4"
            ></Group19>
          </a>
          <div className="landing-page-group21">
            <span className="landing-page-text43">
              <span>Get in touch</span>
            </span>
            <span className="landing-page-text45">
              <span>Head Office</span>
            </span>
            <span className="landing-page-text47">
              <span>Email</span>
            </span>
            <span className="landing-page-text49">
              <span>Phone</span>
            </span>
            <span className="landing-page-text51">
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
            <span className="landing-page-text56">
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
            <span className="landing-page-text65">
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
          <a href="#Services" className="landing-page-link1">
            <Group20
              rootClassName="group20-root-class-name1"
              className="landing-page-component5"
            ></Group20>
          </a>
          <div className="landing-page-group18">
            <img
              alt="Openlife37057"
              src="/playground_assets/openlife37057-ji8b-200h.png"
              className="landing-page-openlife3"
            />
            <span className="landing-page-text74">
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
              className="landing-page-openlife2"
            />
          </div>
        </div>
        <div id="Services" className="landing-page-group39">
          <img
            alt="Rectangle102356"
            src="/playground_assets/rectangle102356-pfh-200h.png"
            className="landing-page-rectangle10"
          />
          <span className="landing-page-text76">
            <span>Services</span>
          </span>
          <Link to="/organ-matching-1" className="landing-page-navlink2">
            <Group10
              rootClassName="group10-root-class-name"
              className="landing-page-component6"
            ></Group10>
          </Link>
          <Link to="/organ-matching-1" className="landing-page-navlink3">
            <Group11
              rootClassName="group11-root-class-name"
              className="landing-page-component7"
            ></Group11>
          </Link>
          <Link to="/eligibility" className="landing-page-navlink4">
            <Group12
              rootClassName="group12-root-class-name"
              className="landing-page-component8"
            ></Group12>
          </Link>
        </div>
        <div className="landing-page-group36">
          <span className="landing-page-text78">Home</span>
          <a href="#AboutSection" className="landing-page-text79">
            About
          </a>
          <a href="#Services" className="landing-page-text80">
            Services
          </a>
          <a href="#Contact" className="landing-page-text81">
            Contact us
          </a>
          <img
            alt="Rectangle22356"
            src="/playground_assets/rectangle22356-478a-200h.png"
            className="landing-page-rectangle2"
          />
          <img
            alt="Openlife25756"
            src="/playground_assets/openlife25756-2dqh-200w.png"
            className="landing-page-openlife21"
          />
          <img
            alt="Openlife15756"
            src="/playground_assets/openlife15756-jbj8-200h.png"
            className="landing-page-openlife1"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
