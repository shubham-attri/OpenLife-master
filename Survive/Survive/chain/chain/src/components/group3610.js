import React from 'react'

import PropTypes from 'prop-types'

import './group3610.css'

const Group3610 = (props) => {
  return (
    <div className={`group3610-group36 ${props.rootClassName} `}>
      <span className="group3610-text">
        <span className="">Home</span>
      </span>
      <span className="group3610-text2">
        <span className="">About</span>
      </span>
      <span className="group3610-text4">
        <span className="">Services</span>
      </span>
      <span className="group3610-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group3610-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group3610-openlife1"
      />
    </div>
  )
}

Group3610.defaultProps = {
  Openlife2_src: '/playground_assets/openlife29058-f61h-200h.png',
  Openlife1_src: '/playground_assets/openlife19058-f18o-200h.png',
  Openlife1_alt: 'Openlife19058',
  rootClassName: '',
  Openlife2_alt: 'Openlife29058',
}

Group3610.propTypes = {
  Openlife2_src: PropTypes.string,
  Openlife1_src: PropTypes.string,
  Openlife1_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife2_alt: PropTypes.string,
}

export default Group3610
