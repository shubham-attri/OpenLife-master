import React from 'react'

import PropTypes from 'prop-types'

import './group19.css'

const Group19 = (props) => {
  return (
    <div className={`group19-group19 ${props.rootClassName} `}>
      <span className="group19-text">
        <span className="">HOME</span>
      </span>
      <span className="group19-text2">
        <span className="">Useful Links</span>
      </span>
      <span className="group19-text4">
        <span className="">ABOUT</span>
      </span>
      <span className="group19-text6">
        <span className="">SERVICES</span>
      </span>
    </div>
  )
}

Group19.defaultProps = {
  rootClassName: '',
}

Group19.propTypes = {
  rootClassName: PropTypes.string,
}

export default Group19
