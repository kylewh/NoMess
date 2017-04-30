import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
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

class Root extends Component {

  componentDidMount () {
    console.log('app loaded')
  }

  render() {
    const { store } = this.props
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store} >
          <Router history={createHistory()}>
            <App />
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default Root
