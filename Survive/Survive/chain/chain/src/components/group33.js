import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Text9 from './text9'
import './group33.css'

const Group33 = (props) => {
  return (
    <div className={`group33-group33 ${props.rootClassName} `}>
      <span className="group33-text">
        <span className="">Register as an organ recipient</span>
      </span>
      <Link to="/recipient-registration" className="group33-navlink">
        <Text9
          rootClassName="text9-root-class-name"
          className="group33-component"
        ></Text9>
      </Link>
      <img
        alt={props.Ellipse4_alt}
        src={props.Ellipse4_src}
        className="group33-ellipse4"
      />
      <img
        alt={props.IconsPhosphorHealthHeartbeat_alt}
        src={props.IconsPhosphorHealthHeartbeat_src}
        className="group33-icons-phosphor-health-heartbeat"
      />
    </div>
  )
}

Group33.defaultProps = {
  Ellipse4_src: '/playground_assets/ellipse45756-920v.svg',
  IconsPhosphorHealthHeartbeat_alt: 'IconsPhosphorHealthHeartbeat1434',
  Ellipse4_alt: 'Ellipse45756',
  IconsPhosphorHealthHeartbeat_src:
    '/playground_assets/iconsphosphorhealthheartbeat1434-jods.svg',
  rootClassName: '',
}

Group33.propTypes = {
  Ellipse4_src: PropTypes.string,
  IconsPhosphorHealthHeartbeat_alt: PropTypes.string,
  Ellipse4_alt: PropTypes.string,
  IconsPhosphorHealthHeartbeat_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group33
