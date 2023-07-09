import React from 'react'

import PropTypes from 'prop-types'

import './group51.css'

const Group51 = (props) => {
  return (
    <div className={`group51-group51 ${props.rootClassName} `}>
      <div className="group51-group19">
        <span className="group51-text">
          <span className="">HOME</span>
        </span>
        <span className="group51-text02">
          <span className="">Useful Links</span>
        </span>
        <span className="group51-text04">
          <span className="">ABOUT</span>
        </span>
        <span className="group51-text06">
          <span className="">SERVICES</span>
        </span>
      </div>
      <div className="group51-group21">
        <span className="group51-text08">
          <span className="">Get in touch</span>
        </span>
        <span className="group51-text10">
          <span className="">Head Office</span>
        </span>
        <span className="group51-text12">
          <span className="">Email</span>
        </span>
        <span className="group51-text14">
          <span className="">Phone</span>
        </span>
        <span className="group51-text16">
          <span className="">
            <span className="">
              IIITD, Okhla Industrial Estate, Phase III,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className=""></br>
            <span className="">New Delhi, Delhi 110020</span>
          </span>
        </span>
        <span className="group51-text21">
          <span className="">
            <span className="">sidhant21495@iiitd.ac.in</span>
            <br className=""></br>
            <span className="">daksh21459@iiitd.ac.in</span>
            <br className=""></br>
            <span className="">rajorshi21187@iiitd.ac.in</span>
            <br className=""></br>
            <span className="">upal21214@iiitd.ac.in</span>
          </span>
        </span>
        <span className="group51-text30">
          <span className="">
            <span className="">+91 9711232008</span>
            <br className=""></br>
            <span className="">+91 7982963117</span>
            <br className=""></br>
            <span className="">+91 9717810601</span>
            <br className=""></br>
            <span className="">+91 8584077990</span>
          </span>
        </span>
      </div>
      <div className="group51-group20">
        <span className="group51-text39">
          <span className="">OUR SERVICES</span>
        </span>
        <span className="group51-text41">
          <span className="">Donate an Organ</span>
        </span>
        <span className="group51-text43">
          <span className="">Request an Organ</span>
        </span>
        <span className="group51-text45">
          <span className="">Check Eligibility</span>
        </span>
      </div>
      <div className="group51-group18">
        <img
          alt={props.Openlife3_alt}
          src={props.Openlife3_src}
          className="group51-openlife3"
        />
        <span className="group51-text47">
          <span className="">
            A decentralized platform that uses blockchain technology and smart
            contracts to facilitate the matching of organ donors with recipients
            and improve the transparency, efficiency, and security of the organ
            donation process
          </span>
        </span>
        <img
          alt={props.Openlife2_alt}
          src={props.Openlife2_src}
          className="group51-openlife2"
        />
      </div>
    </div>
  )
}

Group51.defaultProps = {
  Openlife3_alt: 'Openlife39062',
  rootClassName: '',
  Openlife2_src: '/playground_assets/openlife29062-1upg-200h.png',
  Openlife2_alt: 'Openlife29062',
  Openlife3_src: '/playground_assets/openlife39062-k18z-200h.png',
}

Group51.propTypes = {
  Openlife3_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife2_src: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife3_src: PropTypes.string,
}

export default Group51
