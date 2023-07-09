import React from 'react'

import PropTypes from 'prop-types'

import './group365.css'

const Group365 = (props) => {
  return (
    <div className={`group365-group36 ${props.rootClassName} `}>
      <span className="group365-text">
        <span className="">Home</span>
      </span>
      <span className="group365-text2">
        <span className="">About</span>
      </span>
      <span className="group365-text4">
        <span className="">Services</span>
      </span>
      <span className="group365-text6">
        <span className="">Contact us</span>
      </span>
      <img
        alt={props.Openlife2_alt}
        src={props.Openlife2_src}
        className="group365-openlife2"
      />
      <img
        alt={props.Openlife1_alt}
        src={props.Openlife1_src}
        className="group365-openlife1"
      />
    </div>
  )
}

Group365.defaultProps = {
  Openlife1_alt: 'Openlife17860',
  Openlife2_alt: 'Openlife27860',
  Openlife2_src: '/playground_assets/openlife27860-s3wh-200w.png',
  Openlife1_src: '/playground_assets/openlife17860-0otx-200h.png',
  rootClassName: '',
}

Group365.propTypes = {
  Openlife1_alt: PropTypes.string,
  Openlife2_alt: PropTypes.string,
  Openlife2_src: PropTypes.string,
  Openlife1_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group365
