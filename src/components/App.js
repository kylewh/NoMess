import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../containers/Sidebar'
import AppBar from '../containers/AppBar'
import Login from '../containers/Login.js'
import Main from './Main.js'

const App = () => (
  <div className='app'>
    <AppBar />
    <Sidebar />
    <Switch>
      <Route
        path='/login'
        component={Login}
      />
      <Route
        path='/:filter?'
        component={Main}
        exact
      />
    </Switch>
  </div>
)

export default App
