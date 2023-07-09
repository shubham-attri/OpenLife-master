import React from 'react'

import PropTypes from 'prop-types'

import './group3613.css'

const Group3613 = (props) => {
  return (
    <div className={`group3613-group36 ${props.rootClassName} `}>
      <span className="group3613-text">
        <span className="">Home</span>
      </span>
      <span className="group3613-text2">
        <span className="">About</span>
      </span>
      <span className="group3613-text4">
        <span className="">Services</span>
      </span>
      <span className="group3613-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group3613-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group3613-openlife1"
      />
    </div>
  )
}

Group3613.defaultProps = {
  Openlife2_alt: 'Openlife27957',
  Openlife1_src: '/playground_assets/openlife17957-1hld-200h.png',
  Openlife2_src: '/playground_assets/openlife27957-fptg-200h.png',
  Openlife1_alt: 'Openlife17957',
  rootClassName: '',
}

Group3613.propTypes = {
  Openlife2_alt: PropTypes.string,
  Openlife1_src: PropTypes.string,
  Openlife2_src: PropTypes.string,
  Openlife1_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group3613
