import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { MainPage } from './pages/MainPage'
import { OnlinePage } from './pages/OnlinePage'
import { ContactPage } from './pages/ContactPage'

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
      <Redirect to="/" />
    </Switch>
  )
}