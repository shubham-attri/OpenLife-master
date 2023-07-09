import React from 'react'

import PropTypes from 'prop-types'

import './group191.css'

const Group191 = (props) => {
  return (
    <div className={`group191-group19 ${props.rootClassName} `}>
      <span className="group191-text">
        <span className="">HOME</span>
      </span>
      <span className="group191-text2">
        <span className="">Useful Links</span>
      </span>
      <span className="group191-text4">
        <span className="">ABOUT</span>
      </span>
      <span className="group191-text6">
        <span className="">SERVICES</span>
      </span>
    </div>
  )
}

Group191.defaultProps = {
  rootClassName: '',
}

Group191.propTypes = {
  rootClassName: PropTypes.string,
}

export default Group191
