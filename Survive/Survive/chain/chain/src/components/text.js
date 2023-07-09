import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className={`text-container ${props.rootClassName} `}>
      <a href="#AboutSection" className="text-text">
        <span className="">ABOUT</span>
      </a>
    </div>
  )
}

Text.defaultProps = {
  rootClassName: '',
}

Text.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text
