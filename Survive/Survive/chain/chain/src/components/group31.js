import React from 'react'

import PropTypes from 'prop-types'

import './group31.css'

const Group31 = (props) => {
  return (
    <div className={`group31-group31 ${props.rootClassName} `}>
      <span className="group31-text">
        <span className="">Get the latest updates and information</span>
      </span>
      <span className="group31-text2">
        <span className="">Notifications</span>
      </span>
      <img
        alt={props.Ellipse1_alt}
        src={props.Ellipse1_src}
        className="group31-ellipse1"
      />
      <img
        alt={props.IconsFeatherbell_alt}
        src={props.IconsFeatherbell_src}
        className="group31-icons-featherbell"
      />
    </div>
  )
}

Group31.defaultProps = {
  rootClassName: '',
  IconsFeatherbell_alt: 'IconsFeatherbell1436',
  IconsFeatherbell_src: '/playground_assets/iconsfeatherbell1436-tsj.svg',
  Ellipse1_src: '/playground_assets/ellipse12356-k0wc.svg',
  Ellipse1_alt: 'Ellipse12356',
}

Group31.propTypes = {
  rootClassName: PropTypes.string,
  IconsFeatherbell_alt: PropTypes.string,
  IconsFeatherbell_src: PropTypes.string,
  Ellipse1_src: PropTypes.string,
  Ellipse1_alt: PropTypes.string,
}

export default Group31
