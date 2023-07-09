import React from 'react'

import PropTypes from 'prop-types'

import './group20.css'

const Group20 = (props) => {
  return (
    <div className={`group20-group20 ${props.rootClassName} `}>
      <span className="group20-text">
        <span className="">OUR SERVICES</span>
      </span>
      <span className="group20-text2">
        <span className="">Donate an Organ</span>
      </span>
      <span className="group20-text4">
        <span className="">Request an Organ</span>
      </span>
      <span className="group20-text6">
        <span className="">Check Eligibility</span>
      </span>
    </div>
  )
}

Group20.defaultProps = {
  rootClassName: '',
}

Group20.propTypes = {
  rootClassName: PropTypes.string,
}

export default Group20
