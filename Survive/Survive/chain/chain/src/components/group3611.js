import React from 'react'

import PropTypes from 'prop-types'

import './group3611.css'

const Group3611 = (props) => {
  return (
    <div className={`group3611-group36 ${props.rootClassName} `}>
      <span className="group3611-text">
        <span className="">Home</span>
      </span>
      <span className="group3611-text2">
        <span className="">About</span>
      </span>
      <span className="group3611-text4">
        <span className="">Services</span>
      </span>
      <span className="group3611-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group3611-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group3611-openlife1"
      />
    </div>
  )
}

Group3611.defaultProps = {
  Openlife2_alt: 'Openlife28262',
  Openlife2_src: '/playground_assets/openlife28262-ce2d-200h.png',
  rootClassName: '',
  Openlife1_src: '/playground_assets/openlife18262-5rfo-200h.png',
  Openlife1_alt: 'Openlife18262',
}

Group3611.propTypes = {
  Openlife2_alt: PropTypes.string,
  Openlife2_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife1_src: PropTypes.string,
  Openlife1_alt: PropTypes.string,
}

export default Group3611
