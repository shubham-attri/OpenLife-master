import React from 'react'

import PropTypes from 'prop-types'

import './text9.css'

const Text9 = (props) => {
  return (
    <div className={`text9-container ${props.rootClassName} `}>
      <span className="text9-text">
        <span className="">Recipient Registration</span>
      </span>
    </div>
  )
}

Text9.defaultProps = {
  rootClassName: '',
}

Text9.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text9
