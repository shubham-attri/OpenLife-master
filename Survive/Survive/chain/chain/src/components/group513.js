import React from 'react'

import PropTypes from 'prop-types'

import './group513.css'

const Group513 = (props) => {
  return (
    <div className={`group513-group51 ${props.rootClassName} `}>
      <div className="group513-group19">
        <span className="group513-text">
          <span className="">HOME</span>
        </span>
        <span className="group513-text02">
          <span className="">Useful Links</span>
        </span>
        <span className="group513-text04">
          <span className="">ABOUT</span>
        </span>
        <span className="group513-text06">
          <span className="">SERVICES</span>
        </span>
      </div>
      <div className="group513-group21">
        <span className="group513-text08">
          <span className="">Get in touch</span>
        </span>
        <span className="group513-text10">
          <span className="">Head Office</span>
        </span>
        <span className="group513-text12">
          <span className="">Email</span>
        </span>
        <span className="group513-text14">
          <span className="">Phone</span>
        </span>
        <span className="group513-text16">
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
        <span className="group513-text21">
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
        <span className="group513-text30">
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
      <div className="group513-group20">
        <span className="group513-text39">
          <span className="">OUR SERVICES</span>
        </span>
        <span className="group513-text41">
          <span className="">Donate an Organ</span>
        </span>
        <span className="group513-text43">
          <span className="">Request an Organ</span>
        </span>
        <span className="group513-text45">
          <span className="">Check Eligibility</span>
        </span>
      </div>
      <div className="group513-group18">
        <img
          alt={props.Openlife3_alt}
          src={props.Openlife3_src}
          className="group513-openlife3"
        />
        <span className="group513-text47">
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
          className="group513-openlife2"
        />
      </div>
    </div>
  )
}

Group513.defaultProps = {
  Openlife2_src: '/playground_assets/openlife29059-cwp-200h.png',
  Openlife3_alt: 'Openlife39059',
  rootClassName: '',
  Openlife2_alt: 'Openlife29059',
  Openlife3_src: '/playground_assets/openlife39059-idfv-200h.png',
}

Group513.propTypes = {
  Openlife2_src: PropTypes.string,
  Openlife3_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife3_src: PropTypes.string,
}

export default Group513
