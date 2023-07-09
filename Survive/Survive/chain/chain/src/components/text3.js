import React from 'react'

import PropTypes from 'prop-types'

import './text3.css'

const Text3 = (props) => {
  return (
    <div className={`text3-container ${props.rootClassName} `}>
      <a href="#Services" className="text3-text">
        <span className="">Donate an Organ</span>
      </a>
    </div>
  )
}

Text3.defaultProps = {
  rootClassName: '',
}

Text3.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text3
