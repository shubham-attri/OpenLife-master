import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './group34.css'

const Group34 = (props) => {
  return (
    <Link to="/profile" className="">
      <div className={`group34-group34 ${props.rootClassName} `}>
        <span className="group34-text">
          <span className="">Check your details, Notifications</span>
        </span>
        <span className="group34-text2">
          <span className="">
            View Profile
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <img
          alt={props.Ellipse3_alt}
          src={props.Ellipse3_src}
          className="group34-ellipse3"
        />
        <img
          alt={props.IconsPhosphorPeopleUser_alt}
          src={props.IconsPhosphorPeopleUser_src}
          className="group34-icons-phosphor-people-user"
        />
      </div>
    </Link>
  )
}

Group34.defaultProps = {
  rootClassName: '',
  Ellipse3_src: '/playground_assets/ellipse32356-fbjr-200h.png',
  IconsPhosphorPeopleUser_alt: 'IconsPhosphorPeopleUser1414',
  Ellipse3_alt: 'Ellipse32356',
  IconsPhosphorPeopleUser_src:
    '/playground_assets/iconsphosphorpeopleuser1414-5h5.svg',
}

Group34.propTypes = {
  rootClassName: PropTypes.string,
  Ellipse3_src: PropTypes.string,
  IconsPhosphorPeopleUser_alt: PropTypes.string,
  Ellipse3_alt: PropTypes.string,
  IconsPhosphorPeopleUser_src: PropTypes.string,
}

export default Group34
