import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './text6.css'

const Text6 = (props) => {
  return (
    <div className={`text6-container ${props.rootClassName} `}>
      <Link to="/landing-page" className="text6-text">
        <span className="">Services</span>
      </Link>
    </div>
  )
}

Text6.defaultProps = {
  rootClassName: '',
}

Text6.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text6
