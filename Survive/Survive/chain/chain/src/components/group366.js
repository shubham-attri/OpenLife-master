import React from 'react'

import PropTypes from 'prop-types'

import './group366.css'

const Group366 = (props) => {
  return (
    <div className={`group366-group36 ${props.rootClassName} `}>
      <span className="group366-text">
        <span className="">Home</span>
      </span>
      <span className="group366-text2">
        <span className="">About</span>
      </span>
      <span className="group366-text4">
        <span className="">Services</span>
      </span>
      <span className="group366-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group366-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group366-openlife1"
      />
    </div>
  )
}

Group366.defaultProps = {
  Openlife2_src: '/playground_assets/openlife27358-s3fl-200w.png',
  Openlife1_alt: 'Openlife17358',
  Openlife1_src: '/playground_assets/openlife17358-3idm-200h.png',
  rootClassName: '',
  Openlife2_alt: 'Openlife27358',
}

Group366.propTypes = {
  Openlife2_src: PropTypes.string,
  Openlife1_alt: PropTypes.string,
  Openlife1_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife2_alt: PropTypes.string,
}

export default Group366
