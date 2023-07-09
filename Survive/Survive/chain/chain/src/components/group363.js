import React from 'react'

import PropTypes from 'prop-types'

import './group363.css'

const Group363 = (props) => {
  return (
    <div className={`group363-group36 ${props.rootClassName} `}>
      <span className="group363-text">
        <span className="">Home</span>
      </span>
      <span className="group363-text2">
        <span className="">About</span>
      </span>
      <span className="group363-text4">
        <span className="">Services</span>
      </span>
      <span className="group363-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group363-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group363-openlife1"
      />
    </div>
  )
}

Group363.defaultProps = {
  Openlife1_alt: 'Openlife17859',
  Openlife1_src: '/playground_assets/openlife17859-mwjy-200h.png',
  Openlife2_src: '/playground_assets/openlife27859-dz8g-200w.png',
  Openlife2_alt: 'Openlife27859',
  rootClassName: '',
}

Group363.propTypes = {
  Openlife1_alt: PropTypes.string,
  Openlife1_src: PropTypes.string,
  Openlife2_src: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group363
