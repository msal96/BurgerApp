import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BurgerBuilderPage from '../pages/BurgerBuilderPage'
import CheckoutPage from '../pages/CheckoutPage'
import Header from '../components/Header'

export default class Routing extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={BurgerBuilderPage} />
            <Route path='/checkout' component={CheckoutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
