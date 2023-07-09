import React from 'react'

import PropTypes from 'prop-types'

import './group12.css'

const Group12 = (props) => {
  return (
    <div className={`group12-group12 ${props.rootClassName} `}>
      <span className="group12-text">
        <span className="">
          Check if you are eligible to receive/ donate an organ...
        </span>
      </span>
      <span className="group12-text2">
        <span className="">Check Eligibility</span>
      </span>
      <img
        alt={props.Rectangle16_alt}
        src={props.Rectangle16_src}
        className="group12-rectangle16"
      />
      <span className="group12-text4">
        <span className="">READ MORE</span>
      </span>
      <img
        alt={props.IconsPhosphorSecurityCircleWavyCheck_alt}
        src={props.IconsPhosphorSecurityCircleWavyCheck_src}
        className="group12-icons-phosphor-security-circle-wavy-check"
      />
    </div>
  )
}

Group12.defaultProps = {
  Rectangle16_alt: 'Rectangle162357',
  IconsPhosphorSecurityCircleWavyCheck_src:
    '/playground_assets/iconsphosphorsecuritycirclewavycheck1448-304j.svg',
  Rectangle16_src: '/playground_assets/rectangle162357-2j4k-200h.png',
  IconsPhosphorSecurityCircleWavyCheck_alt:
    'IconsPhosphorSecurityCircleWavyCheck1448',
  rootClassName: '',
}

Group12.propTypes = {
  Rectangle16_alt: PropTypes.string,
  IconsPhosphorSecurityCircleWavyCheck_src: PropTypes.string,
  Rectangle16_src: PropTypes.string,
  IconsPhosphorSecurityCircleWavyCheck_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group12
