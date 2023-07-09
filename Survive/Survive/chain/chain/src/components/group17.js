import React from 'react'

import PropTypes from 'prop-types'

import './group17.css'

const Group17 = (props) => {
  return (
    <div className={`group17-group17 ${props.rootClassName} `}>
      <span className="group17-text">
        <span className="">Check Eligibility</span>
      </span>
    </div>
  )
}

Group17.defaultProps = {
  rootClassName: '',
}

Group17.propTypes = {
  rootClassName: PropTypes.string,
}

export default Group17
