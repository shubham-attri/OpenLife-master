import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './group32.css'

const Group32 = (props) => {
  return (
    <Link to="/donor-registration" className="">
      <div className={`group32-group32 ${props.rootClassName} `}>
        <span className="group32-text">
          <span className="">Register as an organ donor</span>
        </span>
        <span className="group32-text2">
          <span className="">Donor Registration</span>
        </span>
        <img
          alt={props.Ellipse2_alt}
          src={props.Ellipse2_src}
          className="group32-ellipse2"
        />
        <img
          alt={props.IdentificationBadge_alt}
          src={props.IdentificationBadge_src}
          className="group32-identification-badge"
        />
      </div>
    </Link>
  )
}

Group32.defaultProps = {
  Ellipse2_alt: 'Ellipse22356',
  Ellipse2_src: '/playground_assets/ellipse22356-oom-200h.png',
  IdentificationBadge_src: '/playground_assets/identificationbadge2357-qmx.svg',
  IdentificationBadge_alt: 'IdentificationBadge2357',
  rootClassName: '',
}

Group32.propTypes = {
  Ellipse2_alt: PropTypes.string,
  Ellipse2_src: PropTypes.string,
  IdentificationBadge_src: PropTypes.string,
  IdentificationBadge_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group32
