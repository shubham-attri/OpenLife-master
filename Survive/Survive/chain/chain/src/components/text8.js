import React from 'react'

import PropTypes from 'prop-types'

import './text8.css'

const Text8 = (props) => {
  return (
    <div className={`text8-container ${props.rootClassName} `}>
      <span className="text8-text">
        <span className="text8-text1">Registering as a Donor</span>
        <br className="text8-text2"></br>
        <span className="text8-text3">(</span>
        <span className="text8-text4">
          Please note that only the family member/person related by blood to the
          brain-dead person can register from their side or through a donor
          card/ a document signed by the deceased before being brain-dead
          stating their intention to donate their organs can register according
          to the Transplantation of Human Organs Act by Government Of India,
          1994)
        </span>
        <br className="text8-text5"></br>
        <span>Please enter your details:</span>
        <br></br>
      </span>
    </div>
  )
}

Text8.defaultProps = {
  rootClassName: '',
}

Text8.propTypes = {
  rootClassName: PropTypes.string,
}

export default Text8
