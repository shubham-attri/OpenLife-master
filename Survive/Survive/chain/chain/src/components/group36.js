import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './group36.css'

const Group36 = (props) => {
  return (
    <Link to="/">
      <div className={`group36-group36 ${props.rootClassName} `}>
        <span className="group36-text">
          <span>Home</span>
        </span>
        <span className="group36-text2">
          <span>About</span>
        </span>
        <span className="group36-text4">
          <span>Services</span>
        </span>
        <span className="group36-text6">
          <span>Contact us</span>
        </span>
        <img
          alt={props.Openlife2_alt}
          src={props.Openlife2_src}
          className="group36-openlife2"
        />
        <img
          alt={props.Openlife1_alt}
          src={props.Openlife1_src}
          className="group36-openlife1"
        />
      </div>
    </Link>
  )
}

Group36.defaultProps = {
  Openlife2_src: '/playground_assets/openlife27558-mkknm-200w.png',
  Openlife1_alt: 'Openlife17558',
  Openlife2_alt: 'Openlife27558',
  rootClassName: '',
  Openlife1_src: '/playground_assets/openlife17558-bhx-200h.png',
}

Group36.propTypes = {
  Openlife2_src: PropTypes.string,
  Openlife1_alt: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Openlife1_src: PropTypes.string,
}

export default Group36
