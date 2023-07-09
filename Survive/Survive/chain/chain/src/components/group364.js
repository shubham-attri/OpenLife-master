import React from 'react'

import PropTypes from 'prop-types'

import './group364.css'

const Group364 = (props) => {
  return (
    <div className={`group364-group36 ${props.rootClassName} `}>
      <span className="group364-text">
        <span className="">Home</span>
      </span>
      <span className="group364-text2">
        <span className="">About</span>
      </span>
      <span className="group364-text4">
        <span className="">Services</span>
      </span>
      <span className="group364-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group364-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group364-openlife1"
      />
    </div>
  )
}

Group364.defaultProps = {
  Openlife2_src: '/playground_assets/openlife27861-1e09-200w.png',
  rootClassName: '',
  Openlife2_alt: 'Openlife27861',
  Openlife1_src: '/playground_assets/openlife17861-sf6c-200h.png',
  Openlife1_alt: 'Openlife17861',
}

Group364.propTypes = {
  Openlife2_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife1_src: PropTypes.string,
  Openlife1_alt: PropTypes.string,
}

export default Group364
