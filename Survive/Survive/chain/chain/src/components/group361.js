import React from 'react'

import PropTypes from 'prop-types'

import './group361.css'

const Group361 = (props) => {
  return (
    <div className="group361-group36">
      <span className="group361-text">
        <span>Home</span>
      </span>
      <span className="group361-text2">
        <span>About</span>
      </span>
      <span className="group361-text4">
        <span>Services</span>
      </span>
      <span className="group361-text6">
        <span>Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group361-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group361-openlife1"
      />
    </div>
  )
}

Group361.defaultProps = {
  Openlife1_src: '/playground_assets/openlife17558-bhx-200h.png',
  Openlife2_src: '/playground_assets/openlife27558-mkknm-200w.png',
  Openlife1_alt: 'Openlife17558',
  Openlife2_alt: 'Openlife27558',
}

Group361.propTypes = {
  Openlife1_src: PropTypes.string,
  Openlife2_src: PropTypes.string,
  Openlife1_alt: PropTypes.string,
  Openlife2_alt: PropTypes.string,
}

export default Group361
