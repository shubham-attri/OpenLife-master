import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Tender Svelte Dolphin</title>
        <meta property="og:title" content="Tender Svelte Dolphin" />
      </Helmet>
      <div className="home-open-life11">
        <div className="home-container1">
          <h1 className="home-text">Open Life</h1>
          <span className="home-text1">
            The Greatest Gift is the Gift of Life
          </span>
          <Link to="/login-page" className="home-navlink button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
