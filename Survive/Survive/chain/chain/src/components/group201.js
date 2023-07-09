import React from 'react'

import PropTypes from 'prop-types'

import './group201.css'

const Group201 = (props) => {
  return (
    <div className={`group201-group20 ${props.rootClassName} `}>
      <span className="group201-text">
        <span className="">OUR SERVICES</span>
      </span>
      <span className="group201-text2">
        <span className="">Donate an Organ</span>
      </span>
      <span className="group201-text4">
        <span className="">Request an Organ</span>
      </span>
      <span className="group201-text6">
        <span className="">Check Eligibility</span>
      </span>
    </div>
  )
}

Group201.defaultProps = {
  rootClassName: '',
}

Group201.propTypes = {
  rootClassName: PropTypes.string,
}

export default Group201
