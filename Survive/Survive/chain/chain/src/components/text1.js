import React from 'react'

import PropTypes from 'prop-types'

import './text1.css'

const Text1 = (props) => {
  return (
    <div className={`text1-container ${props.rootClassName} `}>
      <a href="#Services" className="text1-text">
        <span className="">SERVICES</span>
      </a>
    </div>
  )
}

Text1.defaultProps = {
  rootClassName: '',
}

Text1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text1
