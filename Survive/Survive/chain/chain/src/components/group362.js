import React from 'react'

import PropTypes from 'prop-types'

import './group362.css'

const Group362 = (props) => {
  return (
    <div className="group362-group36">
      <span className="group362-text">
        <span>Home</span>
      </span>
      <span className="group362-text2">
        <span>About</span>
      </span>
      <span className="group362-text4">
        <span>Services</span>
      </span>
      <span className="group362-text6">
        <span>Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group362-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group362-openlife1"
      />
    </div>
  )
}

Group362.defaultProps = {
  Openlife1_alt: 'Openlife17558',
  Openlife2_alt: 'Openlife27558',
  Openlife2_src: '/playground_assets/openlife27558-mkknm-200w.png',
  Openlife1_src: '/playground_assets/openlife17558-bhx-200h.png',
}

Group362.propTypes = {
  Openlife1_alt: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife2_src: PropTypes.string,
  Openlife1_src: PropTypes.string,
}

export default Group362
