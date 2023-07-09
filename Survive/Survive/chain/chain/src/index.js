import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import OrganMatchingB5 from './views/organ-matching-b5'
import OrganTracking from './views/organ-tracking'
import OrganMatchingA5 from './views/organ-matching-a5'
import OrganMatchingB8 from './views/organ-matching-b8'
import OrganMatchingB2 from './views/organ-matching-b2'
import OrganMatchingA2 from './views/organ-matching-a2'
import DonorRegistration from './views/donor-registration'
import LoginPage from './views/login-page'
import OrganSend from './views/organ-send'
import OrganMatchingB3 from './views/organ-matching-b3'
import OrganMatchingB7 from './views/organ-matching-b7'
import RecipientRegistration from './views/recipient-registration'
import OrganBatchingB6 from './views/organ-batching-b6'
import OrganMatchingB1 from './views/organ-matching-b1'
import EligibilitySucces from './views/eligibility-succes'
import OrganMatchingA3 from './views/organ-matching-a3'
import Notifications from './views/notifications'
import Eligibility from './views/eligibility'
import EligibilityFailure from './views/eligibility-failure'
import Home from './views/home'
import OrganMatchingA4 from './views/organ-matching-a4'
import SignUpPage from './views/sign-up-page'
import OrganMatchingB4 from './views/organ-matching-b4'
import OrganMatchingA1 from './views/organ-matching-a1'
import OrganReceive from './views/organ-receive'
import OrganMatching1 from './views/organ-matching-1'
import Profile from './views/profile'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={LandingPage} exact path="/landing-page" />
        <Route component={OrganMatchingB5} exact path="/organ-matching-b5" />
        <Route component={OrganTracking} exact path="/organ-tracking" />
        <Route component={OrganMatchingA5} exact path="/organ-matching-a5" />
        <Route component={OrganMatchingB8} exact path="/organ-matching-b8" />
        <Route component={OrganMatchingB2} exact path="/organ-matching-b2" />
        <Route component={OrganMatchingA2} exact path="/organ-matching-a2" />
        <Route component={DonorRegistration} exact path="/donor-registration" />
        <Route component={LoginPage} exact path="/login-page" />
        <Route component={OrganSend} exact path="/organ-send" />
        <Route component={OrganMatchingB3} exact path="/organ-matching-b3" />
        <Route component={OrganMatchingB7} exact path="/organ-matching-b7" />
        <Route
          component={RecipientRegistration}
          exact
          path="/recipient-registration"
        />
        <Route component={OrganBatchingB6} exact path="/organ-batching-b6" />
        <Route component={OrganMatchingB1} exact path="/organ-matching-b1" />
        <Route component={EligibilitySucces} exact path="/eligibility-succes" />
        <Route component={OrganMatchingA3} exact path="/organ-matching-a3" />
        <Route component={Notifications} exact path="/notifications" />
        <Route component={Eligibility} exact path="/eligibility" />
        <Route
          component={EligibilityFailure}
          exact
          path="/eligibility-failure"
        />
        <Route component={Home} exact path="/" />
        <Route component={OrganMatchingA4} exact path="/organ-matching-a4" />
        <Route component={SignUpPage} exact path="/sign-up-page" />
        <Route component={OrganMatchingB4} exact path="/organ-matching-b4" />
        <Route component={OrganMatchingA1} exact path="/organ-matching-a1" />
        <Route component={OrganReceive} exact path="/organ-receive" />
        <Route component={OrganMatching1} exact path="/organ-matching-1" />
        <Route component={Profile} exact path="/profile" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
