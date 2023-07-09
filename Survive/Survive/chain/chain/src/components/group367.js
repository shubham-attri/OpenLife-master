import React from 'react'

import PropTypes from 'prop-types'

import './group367.css'

const Group367 = (props) => {
  return (
    <div className={`group367-group36 ${props.rootClassName} `}>
      <span className="group367-text">
        <span className="">Home</span>
      </span>
      <span className="group367-text2">
        <span className="">About</span>
      </span>
      <span className="group367-text4">
        <span className="">Services</span>
      </span>
      <span className="group367-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group367-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group367-openlife1"
      />
    </div>
  )
}

Group367.defaultProps = {
  Openlife1_alt: 'Openlife19061',
  Openlife2_alt: 'Openlife29061',
  Openlife1_src: '/playground_assets/openlife19061-fw0a-200h.png',
  Openlife2_src: '/playground_assets/openlife29061-bxqh-200h.png',
  rootClassName: '',
}

Group367.propTypes = {
  Openlife1_alt: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife1_src: PropTypes.string,
  Openlife2_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group367
