import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './text10.css'

const Text10 = (props) => {
  return (
    <div className={`text10-container ${props.rootClassName} `}>
      <Link to="/organ-matching-a5" className="text10-text">
        <span className="">Unique ID</span>
      </Link>
    </div>
  )
}

Text10.defaultProps = {
  rootClassName: '',
}

Text10.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text10
