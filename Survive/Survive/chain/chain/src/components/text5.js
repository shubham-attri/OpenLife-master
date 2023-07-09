import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './text5.css'

const Text5 = (props) => {
  return (
    <div className={`text5-container ${props.rootClassName} `}>
      <Link to="/landing-page" className="text5-text">
        <span className="">Contact us</span>
      </Link>
    </div>
  )
}

Text5.defaultProps = {
  rootClassName: '',
}

Text5.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text5
