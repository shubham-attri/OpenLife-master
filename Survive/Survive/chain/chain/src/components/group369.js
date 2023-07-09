import React from 'react'

import PropTypes from 'prop-types'

import './group369.css'

const Group369 = (props) => {
  return (
    <div className={`group369-group36 ${props.rootClassName} `}>
      <span className="group369-text">
        <span className="">Home</span>
      </span>
      <span className="group369-text2">
        <span className="">About</span>
      </span>
      <span className="group369-text4">
        <span className="">Services</span>
      </span>
      <span className="group369-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group369-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group369-openlife1"
      />
    </div>
  )
}

Group369.defaultProps = {
  Openlife1_src: '/playground_assets/openlife11027-l3e9-200h.png',
  rootClassName: '',
  Openlife1_alt: 'Openlife11027',
  Openlife2_alt: 'Openlife21027',
  Openlife2_src: '/playground_assets/openlife21027-gpn-200h.png',
}

Group369.propTypes = {
  Openlife1_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife1_alt: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife2_src: PropTypes.string,
}

export default Group369
