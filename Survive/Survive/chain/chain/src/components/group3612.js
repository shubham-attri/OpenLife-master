import React from 'react'

import PropTypes from 'prop-types'

import './group3612.css'

const Group3612 = (props) => {
  return (
    <div className={`group3612-group36 ${props.rootClassName} `}>
      <span className="group3612-text">
        <span className="">Home</span>
      </span>
      <span className="group3612-text2">
        <span className="">About</span>
      </span>
      <span className="group3612-text4">
        <span className="">Services</span>
      </span>
      <span className="group3612-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group3612-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group3612-openlife1"
      />
    </div>
  )
}

Group3612.defaultProps = {
  Openlife1_alt: 'Openlife17464',
  Openlife2_alt: 'Openlife27464',
  Openlife1_src: '/playground_assets/openlife17464-3dv-200h.png',
  rootClassName: '',
  Openlife2_src: '/playground_assets/openlife27464-yurh-200h.png',
}

Group3612.propTypes = {
  Openlife1_alt: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife1_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife2_src: PropTypes.string,
}

export default Group3612
