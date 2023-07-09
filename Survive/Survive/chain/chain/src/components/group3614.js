import React from 'react'

import PropTypes from 'prop-types'

import './group3614.css'

const Group3614 = (props) => {
  return (
    <div className={`group3614-group36 ${props.rootClassName} `}>
      <span className="group3614-text">
        <span className="">Home</span>
      </span>
      <span className="group3614-text2">
        <span className="">About</span>
      </span>
      <span className="group3614-text4">
        <span className="">Services</span>
      </span>
      <span className="group3614-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group3614-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group3614-openlife1"
      />
    </div>
  )
}

Group3614.defaultProps = {
  Openlife1_alt: 'Openlife17459',
  rootClassName: '',
  Openlife2_alt: 'Openlife27459',
  Openlife1_src: '/playground_assets/openlife17459-5h7g-200h.png',
  Openlife2_src: '/playground_assets/openlife27459-x8uq-200h.png',
}

Group3614.propTypes = {
  Openlife1_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife1_src: PropTypes.string,
  Openlife2_src: PropTypes.string,
}

export default Group3614
