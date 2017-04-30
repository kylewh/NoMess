import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../actions'
import { getIsFetching, getCurrentUser } from '../reducers'
import { FlatButton } from 'material-ui'
import ProgressBar from '../styled/ProgressBar'
import TopBar from '../styled/TopBar'
import NavButton from '../styled/NavButton'
import Logged from '../styled/Logged'

const Login = (props) => {
  return (
    <FlatButton {...props} label='Login' />
  )
}

Login.muiName = 'FlatButton'
NavButton.muiName = 'AppBar'

const AppBar = ({toggleSideBar, isFetching, isLogged}) => (
  <div className={'todo-appbar'}>
    {isFetching
      ? (<ProgressBar />) : ''
    }
    <TopBar
      title={'Say no to mess'}
      iconElementLeft={
        <NavButton onClick={toggleSideBar} />
      }
      iconElementRight={isLogged ? <Logged /> : <Login />}
    />
  </div>
)

const mapStateToProps = (state, { match }) => ({
  isFetching: getIsFetching(state, match.params.filter || 'all'),
  isLogged: getCurrentUser(state)
})

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(AppBar))
