import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './text12.css'

const Text12 = (props) => {
  return (
    <div className={`text12-container ${props.rootClassName} `}>
      <Link to="/organ-matching-b8" className="text12-text">
        <span className="">Unique ID</span>
      </Link>
    </div>
  )
}

Text12.defaultProps = {
  rootClassName: '',
}

Text12.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text12
