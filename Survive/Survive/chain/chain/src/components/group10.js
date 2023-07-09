import React from 'react'

import PropTypes from 'prop-types'

import './group10.css'

const Group10 = (props) => {
  return (
    <div className={`group10-group10 ${props.rootClassName} `}>
      <span className="group10-text">
        <span className="">Make requests for organ as a recipient...</span>
      </span>
      <span className="group10-text2">
        <span className=""> Request an Organ</span>
      </span>
      <img
        alt={props.Rectangle12_alt}
        src={props.Rectangle12_src}
        className="group10-rectangle12"
      />
      <span className="group10-text4">
        <span className="">READ MORE</span>
      </span>
      <img
        alt={props.IconsPhosphorHealthHeartbeat_alt}
        src={props.IconsPhosphorHealthHeartbeat_src}
        className="group10-icons-phosphor-health-heartbeat"
      />
    </div>
  )
}

Group10.defaultProps = {
  Rectangle12_alt: 'Rectangle122357',
  IconsPhosphorHealthHeartbeat_alt: 'IconsPhosphorHealthHeartbeat6456',
  Rectangle12_src: '/playground_assets/rectangle122357-z0rs-200h.png',
  IconsPhosphorHealthHeartbeat_src:
    '/playground_assets/iconsphosphorhealthheartbeat6456-zkol.svg',
  rootClassName: '',
}

Group10.propTypes = {
  Rectangle12_alt: PropTypes.string,
  IconsPhosphorHealthHeartbeat_alt: PropTypes.string,
  Rectangle12_src: PropTypes.string,
  IconsPhosphorHealthHeartbeat_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group10
