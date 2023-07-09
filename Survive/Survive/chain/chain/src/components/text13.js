import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './text13.css'

const Text13 = (props) => {
  return (
    <div className={`text13-container ${props.rootClassName} `}>
      <Link to="/organ-matching-b7" className="text13-text">
        <span className="">BLOCKCHAIN</span>
      </Link>
    </div>
  )
}

Text13.defaultProps = {
  rootClassName: '',
}

Text13.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text13
