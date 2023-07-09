import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './text11.css'

const Text11 = (props) => {
  return (
    <div className={`text11-container ${props.rootClassName} `}>
      <Link to="/organ-matching-a4" className="text11-text">
        <span className="">BLOCKCHAIN</span>
      </Link>
    </div>
  )
}

Text11.defaultProps = {
  rootClassName: '',
}

Text11.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text11
