import React from 'react'

import PropTypes from 'prop-types'

import './group11.css'

const Group11 = (props) => {
  return (
    <div className={`group11-group11 ${props.rootClassName} `}>
      <span className="group11-text">
        <span className="">Donate as an organ donor’s...</span>
      </span>
      <span className="group11-text2">
        <span className="">Donate an Organ</span>
      </span>
      <img
        alt={props.Rectangle15_alt}
        src={props.Rectangle15_src}
        className="group11-rectangle15"
      />
      <span className="group11-text4">
        <span className="">READ MORE</span>
      </span>
      <img
        alt={props.IconsPhosphorHealthBrain_alt}
        src={props.IconsPhosphorHealthBrain_src}
        className="group11-icons-phosphor-health-brain"
      />
    </div>
  )
}

Group11.defaultProps = {
  IconsPhosphorHealthBrain_src:
    '/playground_assets/iconsphosphorhealthbrain6456-arq.svg',
  Rectangle15_alt: 'Rectangle152357',
  IconsPhosphorHealthBrain_alt: 'IconsPhosphorHealthBrain6456',
  rootClassName: '',
  Rectangle15_src: '/playground_assets/rectangle152357-6z5g-200h.png',
}

Group11.propTypes = {
  IconsPhosphorHealthBrain_src: PropTypes.string,
  Rectangle15_alt: PropTypes.string,
  IconsPhosphorHealthBrain_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Rectangle15_src: PropTypes.string,
}

export default Group11
