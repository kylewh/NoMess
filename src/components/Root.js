import React from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import AppBar from '../containers/AppBar'
import Sidebar from '../containers/Sidebar'
import Login from '../containers/Login'
import { lightBlueA400, white } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../style/app.css'

injectTapEventPlugin()

/**
 * Material-ui default style config
 */
const muiTheme = getMuiTheme({
  palette: {
    fontFamily: 'Roboto',
    primary1Color: lightBlueA400,
    alternateTextColor: white
  },
  appBar: {
    height: 60
  },
  'checkbox': {
    'boxColor': '#455a64',
    'checkedColor': '#00b0ff'
  }
})

const Root = ({ store }) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store} >
        <Router history={createHistory()}>
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
                component={App}
                exact
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

export default Root
