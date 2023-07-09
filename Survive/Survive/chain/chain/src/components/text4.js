import React from 'react'

import PropTypes from 'prop-types'

import './text4.css'

const Text4 = (props) => {
  return (
    <div className={`text4-container ${props.rootClassName} `}>
      <a href="#Services" className="text4-text">
        <span className="">Check Eligibility</span>
      </a>
    </div>
  )
}

Text4.defaultProps = {
  rootClassName: '',
}

Text4.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text4
