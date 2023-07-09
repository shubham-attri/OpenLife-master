import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './text7.css'

const Text7 = (props) => {
  return (
    <div className={`text7-container ${props.rootClassName} `}>
      <Link to="/landing-page" className="text7-text">
        <span className="">About</span>
      </Link>
    </div>
  )
}

Text7.defaultProps = {
  rootClassName: '',
}

Text7.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text7
