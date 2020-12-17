import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { MainPage } from './pages/MainPage'
import { OnlinePage } from './pages/OnlinePage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/online" exact>
        <OnlinePage />
      </Route>
      <Route path="/contacts" exact>
        <ContactPage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}