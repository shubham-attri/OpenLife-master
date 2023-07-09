import React from 'react'

import PropTypes from 'prop-types'

import './group368.css'

const Group368 = (props) => {
  return (
    <div className={`group368-group36 ${props.rootClassName} `}>
      <span className="group368-text">
        <span className="">Home</span>
      </span>
      <span className="group368-text2">
        <span className="">About</span>
      </span>
      <span className="group368-text4">
        <span className="">Services</span>
      </span>
      <span className="group368-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group368-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group368-openlife1"
      />
    </div>
  )
}

Group368.defaultProps = {
  rootClassName: '',
  Openlife1_src: '/playground_assets/openlife19060-gqk8-200h.png',
  Openlife2_src: '/playground_assets/openlife29060-10h-200h.png',
  Openlife2_alt: 'Openlife29060',
  Openlife1_alt: 'Openlife19060',
}

Group368.propTypes = {
  rootClassName: PropTypes.string,
  Openlife1_src: PropTypes.string,
  Openlife2_src: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife1_alt: PropTypes.string,
}

export default Group368
