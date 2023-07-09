import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './sign-up-page.css'

const SignUpPage = (props) => {
  return (
    <div className="sign-up-page-container">
      <Helmet>
        <title>SignUp-Page - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="SignUp-Page - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="sign-up-page-open-life61">
        <div className="sign-up-page-openlife3">
          <input
            type="text"
            placeholder="Name"
            className="sign-up-page-name input"
          />
          <input
            type="text"
            placeholder="Email"
            className="sign-up-page-name1 input"
          />
          <input
            type="text"
            placeholder="Password"
            className="sign-up-page-name2 input"
          />
        </div>
        <Link to="/landing-page" className="sign-up-page-navlink button">
          Sign Up
        </Link>
        <Link to="/login-page" className="sign-up-page-navlink1">
          Already Have an Account? Log In
        </Link>
      </div>
    </div>
  )
}

export default SignUpPage
