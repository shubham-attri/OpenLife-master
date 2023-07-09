import React from 'react'

import PropTypes from 'prop-types'

import './screenshot2023010619585011.css'

const Screenshot2023010619585011 = (props) => {
  return (
    <div
      className={`screenshot2023010619585011-container ${props.rootClassName} `}
    >
      <img
        alt={props.Screenshot202301061958501_alt}
        src={props.Screenshot202301061958501_src}
        className="screenshot2023010619585011-screenshot202301061958501"
      />
    </div>
  )
}

Screenshot2023010619585011.defaultProps = {
  Screenshot202301061958501_src:
    '/playground_assets/screenshot2023010619585017958-kmlo-200h.png',
  Screenshot202301061958501_alt: 'Screenshot2023010619585017958',
  rootClassName: '',
}

Screenshot2023010619585011.propTypes = {
  Screenshot202301061958501_src: PropTypes.string,
  Screenshot202301061958501_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Screenshot2023010619585011
