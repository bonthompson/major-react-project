import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import Homepage from './pages/homepage/homepage.component'
import Shoppage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Header from './components/header/header.component'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />

      </Switch>
    </div>
  )
}

export default App
