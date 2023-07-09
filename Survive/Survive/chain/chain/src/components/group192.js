import React from 'react'

import PropTypes from 'prop-types'

import './group192.css'

const Group192 = (props) => {
  return (
    <div className={`group192-group19 ${props.rootClassName} `}>
      <span className="group192-text">
        <span className="">HOME</span>
      </span>
      <span className="group192-text2">
        <span className="">Useful Links</span>
      </span>
      <span className="group192-text4">
        <span className="">ABOUT</span>
      </span>
      <span className="group192-text6">
        <span className="">SERVICES</span>
      </span>
    </div>
  )
}

Group192.defaultProps = {
  rootClassName: '',
}

Group192.propTypes = {
  rootClassName: PropTypes.string,
}

export default Group192
