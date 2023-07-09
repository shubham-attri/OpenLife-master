import React from 'react'

import PropTypes from 'prop-types'

import './screenshot202301061958501.css'

const Screenshot202301061958501 = (props) => {
  return (
    <div
      className={`screenshot202301061958501-container ${props.rootClassName} `}
    >
      <img
        alt={props.Screenshot202301061958501_alt}
        src={props.Screenshot202301061958501_src}
        className="screenshot202301061958501-screenshot202301061958501"
      />
    </div>
  )
}

Screenshot202301061958501.defaultProps = {
  rootClassName: '',
  Screenshot202301061958501_alt: 'Screenshot2023010619585017657',
  Screenshot202301061958501_src:
    '/playground_assets/screenshot2023010619585017657-tz59-200h.png',
}

Screenshot202301061958501.propTypes = {
  rootClassName: PropTypes.string,
  Screenshot202301061958501_alt: PropTypes.string,
  Screenshot202301061958501_src: PropTypes.string,
}

export default Screenshot202301061958501
