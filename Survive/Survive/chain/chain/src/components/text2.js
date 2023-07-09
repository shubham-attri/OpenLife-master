import React from 'react'

import PropTypes from 'prop-types'

import './text2.css'

const Text2 = (props) => {
  return (
    <div className={`text2-container ${props.rootClassName} `}>
      <a href="#Services" className="text2-text">
        <span className="">Request an Organ</span>
      </a>
    </div>
  )
}

Text2.defaultProps = {
  rootClassName: '',
}

Text2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text2
