import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import { lightBlueA400, white } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'

injectTapEventPlugin()

/**
 * Global Style Injection
 */
injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    font-weight: 300;
  }

  body {
    font-family: "Helvetica Neue", "Arial", " Segoe UI", "PingFang SC", "Hiragino Sans GB", "STHeiti", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif !important;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #root {
    height: 100vh;
    width: 100vw;
    background-color: whitesmoke;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
    font-size: 100%;
    font-family: inherit;
  }
`
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
    height: 60,
    color: '#2196f3'
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

  render () {
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
