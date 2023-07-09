import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>Login-Page - Tender Svelte Dolphin</title>
        <meta
          property="og:title"
          content="Login-Page - Tender Svelte Dolphin"
        />
      </Helmet>
      <div className="login-page-open-life71">
        <div className="login-page-openlife3">
          <input
            type="text"
            placeholder="Name"
            className="login-page-name input"
          />
          <input
            type="text"
            placeholder="Email"
            className="login-page-name1 input"
          />
        </div>
        <Link to="/landing-page" className="login-page-navlink button">
           Login
        </Link>
        <Link to="/sign-up-page" className="login-page-navlink1">
          Don&apos;t Have an Account? Sign Up 
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
